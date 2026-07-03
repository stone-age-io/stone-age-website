<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
/**
 * PageShell — shared layout for every page (MPA).
 * Header + page content slot + footer, with theme initialization.
 */
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
import { useTheme } from '../../composables/useTheme';

// Initialize the theme system
const { isDarkMode } = useTheme();
</script>

<style>
/* Global container style */
.container {
  @apply px-4 sm:px-6 mx-auto;
  max-width: 1280px;
}

/* Add smooth scrolling to the entire page */
html {
  scroll-behavior: smooth;
}

/* Improve focus styles for accessibility */
:focus-visible {
  @apply outline-none ring-2 ring-primary-600 ring-offset-2;
  @apply dark:ring-primary-400 dark:ring-offset-gray-800;
}
</style>
