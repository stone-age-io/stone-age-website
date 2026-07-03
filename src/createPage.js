import { createApp, h } from 'vue';
import PrimeVue from 'primevue/config';

// Import styles
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/css/tailwind.css';

import PageShell from './components/layout/PageShell.vue';
import { useThemeStore } from './stores/theme';

/**
 * Create and mount a page (MPA entry point).
 * Wraps the given view in the shared PageShell layout and applies
 * the PrimeVue + theme boilerplate every page needs.
 *
 * @param {object} View - The page's root view component
 * @returns {object} The mounted Vue app instance
 */
export function createPage(View) {
  const app = createApp({
    render: () => h(PageShell, null, { default: () => h(View) }),
  });

  app.use(PrimeVue, {
    ripple: true,
    inputStyle: 'filled',
  });

  // Initialize theme before mounting to prevent flash
  const themeStore = useThemeStore();
  themeStore.initTheme();

  app.mount('#app');
  return app;
}
