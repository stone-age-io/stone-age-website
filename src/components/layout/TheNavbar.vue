<template>
  <!-- Desktop Navigation -->
  <nav class="hidden md:flex items-center space-x-6">
    <!-- Architecture with dropdown -->
    <div class="relative" @mouseenter="showArchDropdown = true" @mouseleave="showArchDropdown = false">
      <button
        @click="toggleArchDropdown"
        class="text-base hover:text-primary font-medium py-2 px-3 rounded-md transition-colors flex items-center"
        :aria-label="'Architecture section menu'"
        aria-haspopup="true"
        :aria-expanded="showArchDropdown">
        Architecture
        <i class="pi pi-angle-down ml-1 text-xs"></i>
      </button>

  <!-- Dropdown menu -->
  <transition name="dropdown">
    <div v-if="showArchDropdown" 
         class="absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg z-50"
         :style="{ backgroundColor: 'var(--color-surface-primary)', border: '1px solid var(--color-border-primary)' }">
      <div class="py-2">
        <a v-for="(item, index) in archSubItems" :key="`arch-sub-${index}`"
           :href="`#${item.id}`"
           @click="closeArchDropdown"
           class="block px-4 py-2 text-sm hover:bg-surface-hover transition-colors"
           :aria-label="`Go to ${item.label}`">
          <i :class="`pi ${item.icon} mr-2 text-primary`"></i>
          {{ item.label }}
        </a>
      </div>
    </div>
  </transition>
</div>

<!-- Regular nav items -->
<a v-for="(item, index) in regularNavItems" :key="`nav-desktop-${index}`"
   :href="`#${item.id}`" 
   @click.prevent="scrollToSection(item.id)"
   class="text-base hover:text-primary font-medium py-2 px-3 rounded-md transition-colors"
   :aria-label="`Go to ${item.label} section`">
  {{ item.label }}
</a>

<ThemeToggle class="mr-2" />
<button 
  @click="scrollToSection('cta')" 
  class="btn btn-primary"
  aria-label="Get Started with Stone-Age.io">
  Get Started
</button>

  </nav>

  <!-- Mobile Navigation -->

  <div class="flex items-center space-x-3 md:hidden">
    <ThemeToggle />
    <button 
      class="p-2 rounded-full h-10 w-10 flex items-center justify-center"
      aria-label="Toggle mobile menu"
      aria-expanded="false"
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
  <div v-if="showMobileMenu" 
       class="fixed top-0 right-0 h-full w-64 sm:w-80 shadow-lg z-50 p-4 overflow-y-auto"
       :style="{ backgroundColor: 'var(--color-surface)' }"
       role="dialog"
       aria-modal="true"
       aria-label="Mobile navigation menu">
    <div class="flex justify-between items-center mb-8 pb-4 border-b" 
         :style="{ borderBottomColor: 'var(--color-border)' }">
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
      <!-- Architecture with sub-items in mobile -->
      <div>
        <button
          @click="toggleMobileArchDropdown"
          class="mobile-nav-item hover:bg-surface-alt w-full text-left flex items-center justify-between"
          :aria-label="'Architecture section menu'">
          <span>Architecture</span>
          <i :class="`pi ${showMobileArchDropdown ? 'pi-angle-up' : 'pi-angle-down'} text-xs`"></i>
        </button>
        
        <transition name="mobile-dropdown">
          <div v-if="showMobileArchDropdown" class="ml-4 mt-2 space-y-2">
            <a v-for="(item, index) in archSubItems" :key="`arch-mobile-${index}`"
               :href="`#${item.id}`" 
               @click.prevent="scrollToSectionAndCloseMenu(item.id)" 
               class="mobile-nav-item hover:bg-surface-alt text-sm flex items-center"
               :aria-label="`Go to ${item.label}`">
              <i :class="`pi ${item.icon} mr-2 text-primary text-xs`"></i>
              {{ item.label }}
            </a>
          </div>
        </transition>
      </div>
      
      <!-- Regular items -->
      <a v-for="(item, index) in regularNavItems" :key="`nav-mobile-${index}`"
         :href="`#${item.id}`" 
         @click.prevent="scrollToSectionAndCloseMenu(item.id)" 
         class="mobile-nav-item hover:bg-surface-alt"
         :aria-label="`Go to ${item.label} section`">
        {{ item.label }}
      </a>
      
      <div class="pt-4 mt-2">
        <button 
          @click="scrollToSectionAndCloseMenu('cta')" 
          class="btn btn-primary w-full justify-center"
          aria-label="Get Started with Stone-Age.io">
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
 * Navigation component with desktop and mobile versions
 * Includes dropdown menu for Architecture subsections
 */

// Regular navigation items
const regularNavItems = [
  { id: 'benefits', label: 'Benefits' }
];

// Architecture subsection items
const archSubItems = [
  { id: 'architecture', label: 'Overview', icon: 'pi-sitemap' },
  { id: 'arch-flow', label: 'Data Flow', icon: 'pi-arrow-right' },
  { id: 'arch-observability', label: 'Observability', icon: 'pi-chart-line' },
  { id: 'arch-capabilities', label: 'Capabilities', icon: 'pi-check-circle' }
];

// Reactive state
const showMobileMenu = ref(false);
const showArchDropdown = ref(false);
const showMobileArchDropdown = ref(false);
const originalOverflow = ref(null);

/**
 * Toggle desktop architecture dropdown
 */
const toggleArchDropdown = () => {
  showArchDropdown.value = !showArchDropdown.value;
};

/**
 * Close desktop architecture dropdown
 */
const closeArchDropdown = () => {
  showArchDropdown.value = false;
};

/**
 * Toggle mobile architecture dropdown
 */
const toggleMobileArchDropdown = () => {
  showMobileArchDropdown.value = !showMobileArchDropdown.value;
};

/**
 * Toggle mobile menu visibility
 */
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
  
  if (showMobileMenu.value) {
    originalOverflow.value = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  } else {
    restoreBodyScroll();
  }
};

/**
 * Close mobile menu
 */
const closeMobileMenu = () => {
  showMobileMenu.value = false;
  showMobileArchDropdown.value = false;
  restoreBodyScroll();
};

/**
 * Restore body scroll when closing menu
 */
const restoreBodyScroll = () => {
  document.body.style.overflow = originalOverflow.value || '';
};

/**
 * Smooth scroll to section
 * @param {string} sectionId - ID of the section to scroll to
 */
const scrollToSection = (sectionId) => {
  closeArchDropdown();
  const element = document.getElementById(sectionId);
  if (element) {
    setTimeout(() => {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 100);
  }
};

/**
 * Scroll to section and close mobile menu
 * @param {string} sectionId - ID of the section to scroll to
 */
const scrollToSectionAndCloseMenu = (sectionId) => {
  closeMobileMenu();
  scrollToSection(sectionId);
};

// Handle escape key to close menus
const handleEscKey = (event) => {
  if (event.key === 'Escape') {
    if (showMobileMenu.value) {
      closeMobileMenu();
    }
    if (showArchDropdown.value) {
      closeArchDropdown();
    }
  }
};

// Setup event listeners
onMounted(() => {
  document.addEventListener('keydown', handleEscKey);
});

// Clean up event listeners
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscKey);
  restoreBodyScroll();
});
</script>

<style scoped>
/* Dropdown animations */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile dropdown animations */
.mobile-dropdown-enter-active,
.mobile-dropdown-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.mobile-dropdown-enter-from,
.mobile-dropdown-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.mobile-dropdown-enter-to,
.mobile-dropdown-leave-from {
  max-height: 300px;
  opacity: 1;
}
</style>
