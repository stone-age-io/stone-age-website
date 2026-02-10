<template>
  <div>
    <HeroSection />
    <PillarsSection />
    <ScreenshotTour />
    <HowItWorksSection />
    <BenefitsSection />
    <CallToAction />
  </div>
</template>

<script setup>
/**
 * Home page view — streamlined landing page
 *
 * Section flow:
 * 1. Hero — Value proposition and CTAs
 * 2. Pillars — Radio network analogy + three pillars (conceptual foundation)
 * 3. Screenshots — Visual proof of the platform UI
 * 4. How It Works — Vertical pipeline from registration to observability
 * 5. Benefits — Why MSPs/SIs should choose Stone-Age
 * 6. Pricing/CTA — Deployment models and pricing
 *
 * Hero is eagerly loaded; everything else lazy-loads for performance.
 */
import { defineAsyncComponent } from 'vue';

// Eagerly load hero for immediate display
import HeroSection from '../components/home/HeroSection.vue';

// Lazy load below-fold sections
const PillarsSection = defineAsyncComponent(() =>
  import('../components/home/PillarsSection.vue')
);

const ScreenshotTour = defineAsyncComponent(() =>
  import('../components/home/ScreenshotTour.vue')
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
