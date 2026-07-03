<template>
  <section id="pricing" class="py-16 md:py-24 dark-section" :style="{ backgroundColor: 'var(--color-primary)' }">
    <div class="container text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Choose Your Deployment Model</h2>
      <p class="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-white">
        Free and open source to self-host today. Managed options are on the way.
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
      
      <!-- Pricing cards grid - 3 cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
      
      <!-- Why the name -->
      <div class="mt-12 text-center">
        <p class="text-sm max-w-2xl mx-auto text-white/80 italic">
          Why "Stone Age"? Because we build with boring tools that don't break:
          static binaries, SQLite, plain files. Complexity is the enemy.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import PricingCard from '../pricing/PricingCard.vue';

/**
 * CallToAction component with deployment options
 * Self-hosted (real today) is the highlighted plan; managed hosting is
 * honestly labeled "coming soon"; white-label/support is a conversation.
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

// Pricing plans - honest about what exists today: self-hosted is real,
// managed hosting is planned, white-label/support is a conversation
const pricingPlans = [
  {
    name: 'Self-hosted',
    subtitle: 'Open Source',
    headerBgColor: '#f59e0b',
    subtitleClass: 'text-amber-100',
    price: 'Free',
    features: [
      'Download & deploy anywhere',
      'Unlimited organizations',
      'Unlimited devices',
      'Community support'
    ],
    ctaText: 'Download',
    ctaLink: 'https://github.com/stone-age-io/platform/releases',
    ctaClass: 'bg-white hover:bg-gray-100 text-amber-700',
    isPopular: true
  },
  {
    name: 'Managed Hosting',
    subtitle: 'Coming soon',
    headerBgColor: '#1f2937',
    subtitleClass: 'text-gray-300',
    price: 'TBA',
    features: [
      'We run the control plane & NATS',
      'Per-organization pricing',
      'Clean migration path from self-hosted',
      'Early access shapes the roadmap'
    ],
    ctaText: 'Get Notified',
    ctaLink: 'mailto:info@stone-age.io?subject=Managed%20Hosting%20Early%20Access',
    ctaClass: 'border border-gray-500 bg-gray-700 hover:bg-gray-600 text-white',
    isPopular: false
  },
  {
    name: 'White-Label & Support',
    subtitle: 'For MSPs and integrators',
    headerBgColor: '#1f2937',
    subtitleClass: 'text-gray-300',
    price: 'Custom',
    features: [
      'Your brand, your domains',
      'Deployment assistance',
      'Custom development',
      'Direct line to the maintainers'
    ],
    ctaText: 'Contact Us',
    ctaLink: 'mailto:info@stone-age.io?subject=White-Label%20%2F%20Support',
    ctaClass: 'border border-gray-500 bg-gray-700 hover:bg-gray-600 text-white',
    isPopular: false
  }
];
</script>
