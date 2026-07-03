<template>
  <div>
    <HeroSection />
    <ScreenshotTour />
    <BuiltOnTeaser />
    <PillarsSection />
    <HowItWorksSection />
    <BenefitsSection />
    <CallToAction />
  </div>
</template>

<script setup>
/**
 * Home page view — streamlined landing page
 *
 * Section flow (proof before architecture):
 * 1. Hero — Value proposition and CTAs
 * 2. Screenshots — Visual proof of the platform console
 * 3. Built On teaser — Applications/components proof, links to /built-on
 * 4. Pillars — Radio network analogy + three pillars (conceptual foundation)
 * 5. How It Works — Vertical pipeline from registration to observability
 * 6. Benefits — Why MSPs/SIs should choose Stone-Age
 * 7. Pricing/CTA — Deployment models and pricing
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
const PillarsSection = defineAsyncComponent(() =>
  import('../components/home/PillarsSection.vue')
);

const ScreenshotTour = defineAsyncComponent(() =>
  import('../components/home/ScreenshotTour.vue')
);

const BuiltOnTeaser = defineAsyncComponent(() =>
  import('../components/home/BuiltOnTeaser.vue')
);

const HowItWorksSection = defineAsyncComponent(() =>
  import('../components/home/HowItWorksSection.vue')
);

const BenefitsSection = defineAsyncComponent(() =>
  import('../components/home/BenefitsSection.vue')
);

const CallToAction = defineAsyncComponent(() =>
  import('../components/home/CallToAction.vue')
);
</script>
