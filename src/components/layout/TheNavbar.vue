<template>
  <!-- Desktop Navigation -->
  <nav class="hidden md:flex items-center space-x-6">
    <a
      v-for="(item, index) in navItems"
      :key="`nav-desktop-${index}`"
      :href="`#${item.id}`"
      @click.prevent="scrollToSection(item.id)"
      class="text-base hover:text-primary font-medium py-2 px-3 rounded-md transition-colors"
      :aria-label="`Go to ${item.label} section`"
    >
      {{ item.label }}
    </a>

    <ThemeToggle class="mr-2" />

    <button
      @click="scrollToSection('cta')"
      class="btn btn-primary"
      aria-label="Get Started with Stone-Age.io"
    >
      Get Started
    </button>
  </nav>

  <!-- Mobile Navigation -->
  <div class="flex items-center space-x-3 md:hidden">
    <ThemeToggle />
    <button
      class="p-2 rounded-full h-10 w-10 flex items-center justify-center"
      aria-label="Toggle mobile menu"
      :aria-expanded="showMobileMenu ? 'true' : 'false'"
      @click="toggleMobileMenu"
    >
      <i class="pi pi-bars text-base"></i>
    </button>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="showMobileMenu"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      aria-hidden="true"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile Menu Panel -->
    <transition name="mobile-menu">
      <div
        v-if="showMobileMenu"
        class="fixed top-0 right-0 h-full w-64 sm:w-80 shadow-lg z-50 p-4 overflow-y-auto"
        :style="{ backgroundColor: 'var(--color-surface)' }"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div
          class="flex justify-between items-center mb-8 pb-4 border-b"
          :style="{ borderBottomColor: 'var(--color-border)' }"
        >
          <StoneLogo size="sm" />
          <button
            class="p-2 rounded-full h-10 w-10 flex items-center justify-center"
            aria-label="Close menu"
            @click="closeMobileMenu"
          >
            <i class="pi pi-times text-base"></i>
          </button>
        </div>

        <div class="flex flex-col space-y-2">
          <a
            v-for="(item, index) in navItems"
            :key="`nav-mobile-${index}`"
            :href="`#${item.id}`"
            @click.prevent="scrollToSectionAndCloseMenu(item.id)"
            class="mobile-nav-item hover:bg-surface-alt"
            :aria-label="`Go to ${item.label} section`"
          >
            {{ item.label }}
          </a>

          <div class="pt-4 mt-2">
            <button
              @click="scrollToSectionAndCloseMenu('cta')"
              class="btn btn-primary w-full justify-center"
              aria-label="Get Started with Stone-Age.io"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue';
import ThemeToggle from '../common/ThemeToggle.vue';
import StoneLogo from '../common/StoneLogo.vue';

/**
 * Navigation component — desktop and mobile
 * Simplified to match the new section structure
 */

// Navigation items matching the page sections
const navItems = [
  { id: 'architecture', label: 'Architecture' },
  { id: 'platform-tour', label: 'Platform' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'benefits', label: 'Benefits' }
];

// Reactive state
const showMobileMenu = ref(false);
const originalOverflow = ref(null);

/** Toggle mobile menu visibility */
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
  if (showMobileMenu.value) {
    originalOverflow.value = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  } else {
    restoreBodyScroll();
  }
};

/** Close mobile menu */
const closeMobileMenu = () => {
  showMobileMenu.value = false;
  restoreBodyScroll();
};

/** Restore body scroll */
const restoreBodyScroll = () => {
  document.body.style.overflow = originalOverflow.value || '';
};

/**
 * Smooth scroll to section
 * @param {string} sectionId - ID of the target section
 */
const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId);
  if (el) {
    setTimeout(() => {
      const offset = 80; // Fixed header height
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 100);
  }
};

/** Scroll to section and close mobile menu */
const scrollToSectionAndCloseMenu = (sectionId) => {
  closeMobileMenu();
  scrollToSection(sectionId);
};

/** Handle escape key to close mobile menu */
const handleEscKey = (e) => {
  if (e.key === 'Escape' && showMobileMenu.value) {
    closeMobileMenu();
  }
};

onMounted(() => document.addEventListener('keydown', handleEscKey));
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscKey);
  restoreBodyScroll();
});
</script>

<style scoped>
/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
