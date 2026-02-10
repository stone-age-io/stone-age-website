<template>
  <section id="platform-tour" class="section" :style="{ backgroundColor: 'var(--color-background)' }">
    <div class="container">
      <h2 class="section-title text-center">See It In Action</h2>
      <p class="section-subtitle text-center">
        A single pane of glass for your entire distributed infrastructure
      </p>

      <!-- Tab buttons -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10">
        <button
          v-for="(tab, index) in tabs"
          :key="`tab-${index}`"
          @click="switchTab(index)"
          class="tab-button"
          :class="{ 'tab-button-active': activeTab === index }"
          :aria-label="`View ${tab.label} screenshot`"
          :aria-pressed="activeTab === index"
        >
          <i :class="`pi ${tab.icon} mr-1.5 sm:mr-2`"></i>
          {{ tab.label }}
        </button>
      </div>

      <!-- Screenshot display -->
      <div class="mt-8 max-w-5xl mx-auto">
        <div class="screenshot-frame">
          <!-- Browser chrome bar -->
          <div class="screenshot-chrome">
            <div class="chrome-dots">
              <span class="chrome-dot bg-red-400"></span>
              <span class="chrome-dot bg-yellow-400"></span>
              <span class="chrome-dot bg-green-400"></span>
            </div>
            <div class="chrome-url">
              <i class="pi pi-lock text-green-400 mr-1" style="font-size: 0.625rem;"></i>
              <span class="chrome-url-text">{{ tabs[activeTab].url }}</span>
            </div>
          </div>

          <!-- Screenshot viewport — fixed aspect ratio prevents layout shift -->
          <div class="screenshot-viewport" @click="openLightbox">
            <!-- Skeleton loader shown until image is ready -->
            <div v-if="!loadedTabs[activeTab]" class="screenshot-skeleton">
              <div class="skeleton-shimmer"></div>
            </div>

            <!-- Crossfade: render all visited tabs, show only active -->
            <div
              v-for="(tab, index) in tabs"
              :key="`img-${index}`"
              class="screenshot-layer"
              :class="{ 'screenshot-layer-active': activeTab === index && loadedTabs[index] }"
            >
              <img
                v-if="visitedTabs[index]"
                :src="tab.image"
                :alt="tab.alt"
                class="w-full h-auto"
                loading="lazy"
                @load="onImageLoad(index)"
              />
            </div>

            <!-- Expand hint -->
            <div class="expand-hint">
              <i class="pi pi-expand text-xs mr-1"></i>
              <span>Tap to expand</span>
            </div>
          </div>
        </div>

        <!-- Description below screenshot -->
        <div class="mt-6 text-center max-w-2xl mx-auto">
          <h3 class="text-xl font-semibold mb-2" :style="{ color: 'var(--color-content-primary)' }">
            {{ tabs[activeTab].title }}
          </h3>
          <p :style="{ color: 'var(--color-content-secondary)' }">
            {{ tabs[activeTab].description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Fullscreen lightbox overlay -->
    <transition name="lightbox-fade">
      <div
        v-if="lightboxOpen"
        class="lightbox-overlay"
        @click="closeLightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Expanded screenshot view"
      >
        <button
          class="lightbox-close"
          @click.stop="closeLightbox"
          aria-label="Close expanded view"
        >
          <i class="pi pi-times"></i>
        </button>

        <button
          v-if="tabs.length > 1"
          class="lightbox-nav lightbox-nav-prev"
          @click.stop="prevTab"
          aria-label="Previous screenshot"
        >
          <i class="pi pi-chevron-left"></i>
        </button>

        <button
          v-if="tabs.length > 1"
          class="lightbox-nav lightbox-nav-next"
          @click.stop="nextTab"
          aria-label="Next screenshot"
        >
          <i class="pi pi-chevron-right"></i>
        </button>

        <!-- Lightbox image — same crossfade pattern -->
        <div class="lightbox-content" @click.stop>
          <div class="lightbox-image-container">
            <div
              v-for="(tab, index) in tabs"
              :key="`lb-${index}`"
              class="lightbox-layer"
              :class="{ 'lightbox-layer-active': activeTab === index && loadedTabs[index] }"
            >
              <img
                v-if="visitedTabs[index]"
                :src="tab.image"
                :alt="tab.alt"
                class="lightbox-image"
              />
            </div>
            <!-- Lightbox skeleton -->
            <div v-if="!loadedTabs[activeTab]" class="lightbox-skeleton">
              <div class="skeleton-shimmer"></div>
            </div>
          </div>

          <div class="lightbox-caption">
            <h3 class="text-lg font-semibold text-white">{{ tabs[activeTab].title }}</h3>
            <p class="text-sm text-gray-300 mt-1">{{ tabs[activeTab].description }}</p>
          </div>
        </div>

        <div class="lightbox-dots">
          <button
            v-for="(tab, index) in tabs"
            :key="`dot-${index}`"
            @click.stop="switchTab(index)"
            class="lightbox-dot"
            :class="{ 'lightbox-dot-active': activeTab === index }"
            :aria-label="`View ${tab.label}`"
          ></button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

/**
 * Screenshot Tour component
 *
 * Performance optimizations:
 * - Fixed aspect-ratio container prevents layout shift
 * - Crossfade (no out-in) avoids blank frames between tabs
 * - Skeleton shimmer while images load
 * - Adjacent tab preloading via Image() constructor
 * - Images only mount in DOM once their tab has been visited
 */

const activeTab = ref(0);
const lightboxOpen = ref(false);

// Track which tabs have been visited (triggers DOM mount of <img>)
const visitedTabs = reactive({});
// Track which images have fully loaded (triggers fade-in)
const loadedTabs = reactive({});

const tabs = [
  {
    label: 'Dashboard',
    icon: 'pi-th-large',
    url: 'console.stone-age.io/dashboard',
    image: '/images/screenshots/dashboard.png',
    alt: 'Stone-Age.io dashboard with real-time widgets',
    title: 'Real-Time Dashboard',
    description: 'Build custom views with gauges, charts, switches, and maps. Widgets subscribe directly to NATS, data flows from things to browser without touching a database.'
  },
  {
    label: 'Digital Twin',
    icon: 'pi-bolt',
    url: 'console.stone-age.io/things/sensor-01/twin',
    image: '/images/screenshots/digital-twin.png',
    alt: 'Digital Twin live state view',
    title: 'Live State Management',
    description: 'View and edit the live state of any thing or location in real-time. Change a setpoint in the UI and the update is published to NATS instantly for the thing to receive.'
  },
  {
    label: 'Things',
    icon: 'pi-server',
    url: 'console.stone-age.io/things',
    image: '/images/screenshots/things.png',
    alt: 'Thing management list view',
    title: 'Thing Registry & Management',
    description: 'Manage your entire fleet from one interface. Each thing is a first-class auth record with NATS credentials, Nebula certificates, and metadata.'
  },
  {
    label: 'Floor Plans',
    icon: 'pi-map',
    url: 'console.stone-age.io/.../floorplan',
    image: '/images/screenshots/floorplan.png',
    alt: 'Floor plan with device overlays',
    title: 'Spatial Visualization',
    description: 'Upload floor plans and drag things onto their physical positions. See live status overlaid on your building layout for instant situational awareness.'
  },
  {
    label: 'Organizations',
    icon: 'pi-building',
    url: 'console.stone-age.io/organizations',
    image: '/images/screenshots/organizations.png',
    alt: 'Multi-tenant organization management',
    title: 'Multi-Tenant Management',
    description: 'Each organization gets isolated NATS accounts and Nebula CAs. Manage hundreds of customers from a single deployment with cryptographic data separation.'
  }
];

/**
 * Switch to a tab and preload its neighbors
 */
const switchTab = (index) => {
  activeTab.value = index;
  visitedTabs[index] = true;
  preloadNeighbors(index);
};

/**
 * Called when an image finishes loading
 */
const onImageLoad = (index) => {
  loadedTabs[index] = true;
};

/**
 * Preload adjacent tab images in the background
 */
const preloadNeighbors = (index) => {
  const neighbors = [index - 1, index + 1];
  neighbors.forEach((n) => {
    if (n >= 0 && n < tabs.length && !visitedTabs[n]) {
      visitedTabs[n] = true;
      // Also prefetch via Image() for browser cache
      const img = new Image();
      img.src = tabs[n].image;
    }
  });
};

const openLightbox = () => {
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
};

const prevTab = () => {
  const idx = activeTab.value === 0 ? tabs.length - 1 : activeTab.value - 1;
  switchTab(idx);
};

const nextTab = () => {
  const idx = activeTab.value === tabs.length - 1 ? 0 : activeTab.value + 1;
  switchTab(idx);
};

const handleKeydown = (e) => {
  if (!lightboxOpen.value) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevTab();
  if (e.key === 'ArrowRight') nextTab();
};

onMounted(() => {
  // Mark first tab as visited and start preloading
  switchTab(0);
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<style scoped>
/* ==============================
   Tab buttons
   ============================== */
.tab-button {
  @apply inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm font-medium transition-all;
  color: var(--color-content-secondary);
  background-color: var(--color-surface-secondary);
  border: 1px solid var(--color-border-primary);
}

.tab-button:hover {
  color: var(--color-content-primary);
  background-color: var(--color-surface-hover);
}

.tab-button-active {
  color: white;
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.tab-button-active:hover {
  color: white;
  background-color: var(--color-primary-800);
}

/* ==============================
   Browser frame
   ============================== */
.screenshot-frame {
  @apply rounded-lg overflow-hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-primary);
}

.screenshot-chrome {
  @apply flex items-center gap-2 px-2.5 py-2 sm:px-4 sm:py-2.5;
  background-color: #1f2937;
}

.dark .screenshot-chrome {
  background-color: #111827;
}

.chrome-dots {
  @apply hidden sm:flex items-center gap-1.5 flex-shrink-0;
}

.chrome-dot {
  @apply w-2.5 h-2.5 rounded-full;
}

.chrome-url {
  @apply flex items-center text-gray-400 rounded px-2.5 py-1 min-w-0 flex-1;
  font-size: 0.6875rem;
  background-color: rgba(255, 255, 255, 0.08);
}

.chrome-url-text {
  @apply truncate;
}

/* ==============================
   Screenshot viewport
   ============================== */
.screenshot-viewport {
  @apply relative overflow-hidden cursor-pointer;
  background-color: #0f172a;
  /* Fixed aspect ratio prevents layout shift */
  aspect-ratio: 16 / 8;
}

/* ==============================
   Crossfade layers — all stacked, only active is visible
   ============================== */
.screenshot-layer {
  @apply absolute inset-0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.screenshot-layer-active {
  opacity: 1;
}

.screenshot-layer img {
  @apply block w-full h-full object-contain;
}

/* ==============================
   Skeleton loader
   ============================== */
.screenshot-skeleton {
  @apply absolute inset-0 overflow-hidden;
  background-color: #1e293b;
}

.lightbox-skeleton {
  @apply absolute inset-0 overflow-hidden rounded-lg;
  background-color: #1e293b;
}

.skeleton-shimmer {
  @apply absolute inset-0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.04) 50%,
    transparent 100%
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* ==============================
   Expand hint
   ============================== */
.expand-hint {
  @apply absolute bottom-2 right-2 flex items-center px-2 py-1 rounded text-white text-xs opacity-0 transition-opacity pointer-events-none z-10;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 0.625rem;
}

.screenshot-viewport:hover .expand-hint {
  opacity: 1;
}

@media (hover: none) {
  .expand-hint {
    opacity: 0.7;
  }
}

/* ==============================
   Lightbox
   ============================== */
.lightbox-overlay {
  @apply fixed inset-0 z-50 flex flex-col items-center justify-center;
  background-color: rgba(0, 0, 0, 0.92);
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
}

.lightbox-close {
  @apply absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full text-white transition-colors;
  background-color: rgba(255, 255, 255, 0.15);
}

.lightbox-close:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.lightbox-nav {
  @apply absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white transition-colors;
  background-color: rgba(255, 255, 255, 0.1);
}

.lightbox-nav:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.lightbox-nav-prev {
  @apply left-1 sm:left-2;
}

.lightbox-nav-next {
  @apply right-1 sm:right-2;
}

.lightbox-content {
  @apply flex flex-col items-center w-full px-3 sm:px-6;
  max-height: calc(100vh - 80px);
}

.lightbox-image-container {
  @apply w-full overflow-hidden rounded-lg relative;
  /* Same fixed aspect ratio as inline viewport */
  aspect-ratio: 16 / 8;
  max-height: calc(100vh - 140px);
  background-color: #0f172a;
}

/* Lightbox crossfade layers */
.lightbox-layer {
  @apply absolute inset-0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.lightbox-layer-active {
  opacity: 1;
}

.lightbox-image {
  @apply block w-full h-full object-contain;
}

.lightbox-caption {
  @apply text-center mt-3 px-4;
}

.lightbox-dots {
  @apply absolute bottom-4 sm:bottom-6 flex items-center gap-2;
}

.lightbox-dot {
  @apply w-2 h-2 rounded-full transition-all;
  background-color: rgba(255, 255, 255, 0.3);
}

.lightbox-dot-active {
  @apply w-3;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 9999px;
}

.lightbox-dot:hover {
  background-color: rgba(255, 255, 255, 0.6);
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
