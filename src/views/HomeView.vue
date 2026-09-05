<template>
  <div>
    <HeroSection />
    <ScreenshotTour />
    <BuiltOnTeaser />
    <WhatItIsSection />
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
 * 4. What It Is: the one-paragraph definition and the stack underneath
 * 5. Get Started: pricing and the ways in
 *
 * Three sections were removed rather than rewritten. PillarsSection led with a
 * radio-network analogy and restated the architecture a third time; its only
 * unique content (the component stack and the single-binary note) survives in
 * What It Is. BenefitsSection restated isolation, static binaries,
 * outbound-only connections, and edge autonomy, all of which are covered
 * better on the two audience pages. HowItWorksSection was an interactive
 * architecture explorer that outgrew a home page; What It Is keeps its parts
 * list, and the nav now links to the docs for anyone who wants the depth.
 *
 * Hero is eagerly loaded; everything else lazy-loads for performance.
 */
import { defineAsyncComponent, onMounted } from 'vue';

import { scrollToId } from '../anchorScroll';

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
    if (scrollToId(id)) return;
    if (++attempts < 20) {
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

const WhatItIsSection = defineAsyncComponent(() =>
  import('../components/home/WhatItIsSection.vue')
);

const CallToAction = defineAsyncComponent(() =>
  import('../components/home/CallToAction.vue')
);
</script>
