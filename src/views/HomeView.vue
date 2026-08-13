<template>
  <div>
    <HeroSection />
    <ScreenshotTour />
    <BuiltOnTeaser />
    <HowItWorksSection />
    <CallToAction />
  </div>
</template>

<script setup>
/**
 * Home page view.
 *
 * Section flow (concrete before architecture):
 * 1. Hero: what it does, plus the audience split into the two buyer pages
 * 2. Screenshots: visual proof of the console
 * 3. Built On teaser: the applications, named as things
 * 4. How It Works: registration through observability, and the stack underneath
 * 5. Pricing
 *
 * Two sections were removed rather than rewritten. PillarsSection led with a
 * radio-network analogy and restated the architecture a third time; its only
 * unique content (the component stack and the single-binary note) now closes
 * How It Works. BenefitsSection restated isolation, static binaries,
 * outbound-only connections, and edge autonomy, all of which are covered
 * better on the two audience pages.
 *
 * Hero is eagerly loaded; everything else lazy-loads for performance.
 */
import { defineAsyncComponent, onMounted } from 'vue';

// Eagerly load hero for immediate display
import HeroSection from '../components/home/HeroSection.vue';

// Cross-page anchors (/#pricing etc.) arrive before the lazy sections have
// mounted, so the browser's native hash scroll finds nothing. Retry until
// the target section exists.
onMounted(() => {
  const id = window.location.hash.slice(1);
  if (!id) return;
  let attempts = 0;
  const tryScroll = () => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    } else if (++attempts < 20) {
      setTimeout(tryScroll, 150);
    }
  };
  setTimeout(tryScroll, 150);
});

// Lazy load below-fold sections
const ScreenshotTour = defineAsyncComponent(() =>
  import('../components/home/ScreenshotTour.vue')
);

const BuiltOnTeaser = defineAsyncComponent(() =>
  import('../components/home/BuiltOnTeaser.vue')
);

const HowItWorksSection = defineAsyncComponent(() =>
  import('../components/home/HowItWorksSection.vue')
);

const CallToAction = defineAsyncComponent(() =>
  import('../components/home/CallToAction.vue')
);
</script>
