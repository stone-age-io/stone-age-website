<template>
  <section id="pricing" class="py-16 md:py-24 dark-section" :style="{ backgroundColor: 'var(--color-primary)' }">
    <div class="container text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Choose Your Deployment Model</h2>
      <p class="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-white">
        From self-hosted to fully managed infrastructure, Stone-Age.io scales with your business needs.
      </p>
      
      <!-- Action buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <a v-for="(button, index) in actionButtons" :key="`action-btn-${index}`"
           :href="button.href" 
           class="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium transition-all"
           :class="button.classes"
           :target="button.external ? '_blank' : '_self'"
           :rel="button.external ? 'noopener noreferrer' : ''">
          <i :class="`pi ${button.icon} mr-2`"></i>
          {{ button.text }}
        </a>
      </div>
      
      <!-- Pricing cards grid - 4 cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <PricingCard
          v-for="(plan, index) in pricingPlans"
          :key="`plan-${index}`"
          :name="plan.name"
          :subtitle="plan.subtitle"
          :price="plan.price"
          :features="plan.features"
          :cta-text="plan.ctaText"
          :cta-link="plan.ctaLink"
          :cta-class="plan.ctaClass"
          :header-bg-color="plan.headerBgColor"
          :subtitle-class="plan.subtitleClass"
          :is-popular="plan.isPopular"
        />
      </div>
      
      <!-- Additional pricing information -->
      <div class="mt-12 text-center">
        <div class="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <h4 class="text-lg font-semibold mb-2">Annual Discounts</h4>
              <p class="text-sm opacity-90">
                Save 15% on Shared and Dedicated plans with annual billing.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-2">Free Migration Support</h4>
              <p class="text-sm opacity-90">
                Moving from self-hosted to cloud? We'll help migrate your data at no cost.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-2">PoC/Free Trial Available</h4>
              <p class="text-sm opacity-90">
                Contact our sales team to apply for a proof-of-concept or free trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PricingCard from '../pricing/PricingCard.vue';

/**
 * CallToAction component with flexible deployment options
 * Displays pricing from self-hosted to fully managed cloud infrastructure
 * Emphasizes the choice between DIY, shared resources, and dedicated infrastructure
 */

// Action buttons
const actionButtons = [
  {
    text: 'Read Documentation',
    icon: 'pi-file',
    href: 'https://docs.stone-age.io',
    classes: 'bg-white text-blue-800 hover:bg-gray-100',
    external: true
  },
  {
    text: 'GitHub Repository',
    icon: 'pi-github',
    href: 'https://github.com/stone-age-io/platform',
    classes: 'bg-white text-blue-800 hover:bg-gray-100',
    external: true
  },
  {
    text: 'Contact Sales',
    icon: 'pi-envelope',
    href: 'mailto:info@stone-age.io',
    classes: 'bg-transparent border border-white text-white hover:bg-white/10',
    external: false
  }
];

// Pricing plans - Deployment model focused
const pricingPlans = [
  {
    name: 'Community',
    subtitle: 'Self-hosted',
    headerBgColor: '#1f2937',
    subtitleClass: 'text-gray-300',
    price: 'Free',
    features: [
      'Download & deploy anywhere',
      'Unlimited organizations',
      'Unlimited devices',
      'Community support'
    ],
    ctaText: 'Download',
    ctaLink: 'https://github.com/stone-age-io/platform/releases',
    ctaClass: 'border border-gray-500 bg-gray-700 hover:bg-gray-600 text-white',
    isPopular: false
  },
  {
    name: 'Shared',
    subtitle: 'Pay per organization',
    headerBgColor: '#1f2937',
    subtitleClass: 'text-gray-300',
    price: '$99<span class="text-lg font-normal">/org/month</span>',
    features: [
      '100 concurrent connections',
      '1,000 subscriptions',
      '10GB JetStream storage',
      'Email & chat support'
    ],
    ctaText: 'Start Free Trial',
    ctaLink: '#',
    ctaClass: 'border border-gray-500 bg-gray-700 hover:bg-gray-600 text-white',
    isPopular: false
  },
  {
    name: 'Dedicated',
    subtitle: 'Your private instance',
    headerBgColor: '#f59e0b',
    subtitleClass: 'text-amber-100',
    price: '$1,499<span class="text-lg font-normal">/month</span>',
    features: [
      'Unlimited organizations',
      'Dedicated NATS cluster',
      'Unlimited connections',
      'Priority support with SLA'
    ],
    ctaText: 'Start Free Trial',
    ctaLink: '#',
    ctaClass: 'bg-white hover:bg-gray-100 text-amber-700',
    isPopular: true
  },
  {
    name: 'Enterprise',
    subtitle: 'Custom solutions',
    headerBgColor: '#1f2937',
    subtitleClass: 'text-gray-300',
    price: 'Custom',
    features: [
      'White-label options',
      'On-premises deployment',
      'Custom development',
      'Dedicated success team'
    ],
    ctaText: 'Contact Sales',
    ctaLink: '#',
    ctaClass: 'border border-gray-500 bg-gray-700 hover:bg-gray-600 text-white',
    isPopular: false
  }
];
</script>
