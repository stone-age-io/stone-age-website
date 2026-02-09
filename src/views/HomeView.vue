<template>
  <div>
    <HeroSection />
    <TechnicalSection />
    <BenefitsSection />
    <CallToAction />
  </div>
</template>

<script setup>
/**
 * Home page view component
 * Streamlined landing page with essential sections:
 * 1. Hero - Initial value proposition
 * 2. Architecture - Complete technical overview (pillars, flow, observability, capabilities)
 * 3. Benefits - Why choose Stone-Age for MSPs/SIs
 * 4. Pricing - Deployment options and pricing
 * 
 * Uses lazy loading for components below the fold for better performance
 */
import { defineAsyncComponent } from 'vue';

// Eagerly load the hero section for immediate display
import HeroSection from '../components/home/HeroSection.vue';

// Lazy load components that are further down the page
const TechnicalSection = defineAsyncComponent(() => 
  import('../components/home/TechnicalSection.vue')
);

const BenefitsSection = defineAsyncComponent(() => 
  import('../components/home/BenefitsSection.vue')
);

const CallToAction = defineAsyncComponent(() => 
  import('../components/home/CallToAction.vue')
);
</script>
