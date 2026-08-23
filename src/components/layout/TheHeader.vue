<template>
  <header ref="root" class="sticky top-0 z-30 shadow-sm" :style="{ backgroundColor: 'var(--color-surface)' }">
    <div class="container py-4 md:py-5 flex items-center justify-between">
      <div class="flex items-center">
        <HomeLink class="flex items-center transition-colors" aria-label="Stone-Age.io home">
          <StoneLogo />
        </HomeLink>
      </div>
      <TheNavbar />
    </div>
  </header>
</template>

<script setup>
/**
 * Site header. Sticky at z-30, so it owns the top of the viewport permanently
 * and anything else that sticks has to clear it.
 *
 * Its height is not a constant. Padding steps up at md, and the nav row grows
 * again in the middle of the range where the theme toggle and the Pricing
 * button are taller than the text links: measured 72px at 375, 104px at 900,
 * 84px at 1280. So the header publishes its own height as --header-height
 * rather than letting other components guess, and the static value in theme.css
 * is only the fallback for the first frame before this mounts.
 *
 * A ResizeObserver rather than a resize listener, because the height also
 * changes without the window changing: fonts finishing, nav items reflowing,
 * the browser's own zoom. It observes the border box on purpose: the default
 * content box does not change when the padding steps up at md, so the variable
 * would go stale at exactly one of the breakpoints it exists to handle. The
 * resize listener covers browsers that ignore the box option.
 */
import { onBeforeUnmount, onMounted, ref } from 'vue';
import TheNavbar from './TheNavbar.vue';
import HomeLink from '../common/HomeLink.vue';
import StoneLogo from '../common/StoneLogo.vue';

const root = ref(null);
let observer = null;

const publishHeight = () => {
  if (!root.value) return;
  const height = Math.round(root.value.getBoundingClientRect().height);
  document.documentElement.style.setProperty('--header-height', `${height}px`);
};

onMounted(() => {
  publishHeight();
  observer = new ResizeObserver(publishHeight);
  observer.observe(root.value, { box: 'border-box' });
  window.addEventListener('resize', publishHeight);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
  window.removeEventListener('resize', publishHeight);
});
</script>
