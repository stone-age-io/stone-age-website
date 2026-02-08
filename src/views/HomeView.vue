<template>
  <div>
    <HeroSection />
    <KeyFeaturesSection />
    <TechnicalSection />
    <ObservabilitySection />
    <BenefitsSection />
    <CallToAction />
  </div>
</template>

<script setup>
/**
 * Home page view component
 * Main landing page with all sections arranged in logical order:
 * 1. Hero - Initial value proposition
 * 2. Key Features - The Three Pillars (PocketBase, NATS, Nebula)
 * 3. Technical - Architecture and data flow
 * 4. Observability - BYO philosophy for historical data
 * 5. Benefits - Why choose Stone-Age for MSPs/SIs
 * 6. Call to Action - Pricing and get started
 * 
 * Uses lazy loading for components below the fold for better performance
 */
import { defineAsyncComponent } from 'vue';

// Eagerly load the hero section for immediate display
import HeroSection from '../components/home/HeroSection.vue';

// Lazy load components that are further down the page
// This improves initial page load performance
const KeyFeaturesSection = defineAsyncComponent(() => 
  import('../components/home/KeyFeaturesSection.vue')
);

const TechnicalSection = defineAsyncComponent(() => 
  import('../components/home/TechnicalSection.vue')
);

const ObservabilitySection = defineAsyncComponent(() => 
  import('../components/home/ObservabilitySection.vue')
);

const BenefitsSection = defineAsyncComponent(() => 
  import('../components/home/BenefitsSection.vue')
);

const CallToAction = defineAsyncComponent(() => 
  import('../components/home/CallToAction.vue')
);
</script>
