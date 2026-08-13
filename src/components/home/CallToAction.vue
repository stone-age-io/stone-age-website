<template>
  <section id="pricing" class="py-16 md:py-24 dark-section" :style="{ backgroundColor: 'var(--color-primary)' }">
    <div class="container text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Pricing</h2>
      <p class="text-lg sm:text-xl mb-12 max-w-2xl mx-auto text-white">
        Every application included. No per-door, per-camera, or per-device metering.
      </p>

      <!-- Pricing cards grid -->
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
        />
      </div>

      <p class="text-sm leading-relaxed mt-8 max-w-2xl mx-auto text-white/90">
        All three run the same binaries, so you can start on your own hardware and move to a hosted
        instance later without rebuilding anything.
      </p>

      <!-- Secondary actions -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-10">
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
    </div>
  </section>
</template>

<script setup>
import PricingCard from '../pricing/PricingCard.vue';

/**
 * Pricing section.
 *
 * Prices match the price sheet exactly: $149 direct with a $49 per-site step,
 * $499 Dedicated with a $49 per-customer-organization step. Do not reintroduce
 * "unlimited organizations" on Dedicated. The per-org step is the platform's
 * only expansion-revenue mechanism, and a published "unlimited" cannot be
 * walked back on a quote.
 *
 * Self-hosted is a card on purpose. Adoption is the only usage signal this
 * business has while it has no customers, and hiding the open-source option
 * from the buyers most likely to read the repository would cost more than it
 * saves. Four rules keep it from competing with the paid tiers, and all four
 * were broken by the version this replaced:
 *
 *   1. It is listed last and is never the highlighted card.
 *   2. Its bullets describe what the operator takes on, not what they get.
 *      The old card advertised "unlimited organizations / unlimited devices",
 *      which made the free tier look more generous than Dedicated and made
 *      Dedicated look like the crippled one.
 *   3. Its CTA is a weaker verb than the paid CTAs. "View on GitHub", never
 *      "Download".
 *   4. It promises community support only. Self-hosters generate support load
 *      against no revenue, so nothing here may imply a response commitment.
 *
 * Read together, the paid cards are the same software plus somebody else's
 * operations, which is what they actually are.
 */

const pricingPlans = [
  {
    name: 'Hosted account',
    subtitle: 'For end customers',
    headerBgColor: '#1f2937',
    subtitleClass: 'text-gray-300',
    price: '$149<span class="text-base font-normal">/mo</span>',
    features: [
      'Every application: access control, video, kiosks, monitoring',
      'Up to 3 sites included, $49/mo per additional site',
      'No per-door, per-camera, or per-device metering',
      'Remote support and policy changes included; on-site work quoted'
    ],
    ctaText: 'Get demo access',
    ctaLink: 'mailto:info@stone-age.io?subject=Demo%20access',
    ctaClass: 'border border-gray-500 bg-gray-700 hover:bg-gray-600 text-white'
  },
  {
    name: 'Dedicated',
    subtitle: 'For integrators and MSPs',
    headerBgColor: '#f59e0b',
    subtitleClass: 'text-amber-100',
    price: '$499<span class="text-base font-normal">/mo</span>',
    features: [
      'Your own instance, your brand, your domains',
      'Your own signing keys, database, and encryption key',
      'Includes 10 customer organizations, $49/mo each after',
      'A service desk your customers see under your logo'
    ],
    ctaText: 'For integrators',
    ctaLink: '/for-integrators',
    ctaClass: 'bg-white hover:bg-gray-100 text-amber-700'
  },
  {
    name: 'Self-hosted',
    subtitle: 'Open source',
    headerBgColor: '#1f2937',
    subtitleClass: 'text-gray-300',
    price: 'Free',
    features: [
      'The same binaries we run, under an open-source licence',
      'Nothing held back: no open-core edition, no feature gates',
      'You run the control plane, hold the keys, and own the backups',
      'Community support through GitHub issues'
    ],
    ctaText: 'View on GitHub',
    ctaLink: 'https://github.com/stone-age-io/platform',
    ctaClass: 'border border-gray-500 bg-gray-700 hover:bg-gray-600 text-white'
  }
];

const actionButtons = [
  {
    text: 'Read Documentation',
    icon: 'pi-file',
    href: 'https://docs.stone-age.io',
    classes: 'bg-transparent border border-white text-white hover:bg-white/10',
    external: true
  },
  {
    text: 'Contact Us',
    icon: 'pi-envelope',
    href: 'mailto:info@stone-age.io',
    classes: 'bg-transparent border border-white text-white hover:bg-white/10',
    external: false
  }
];
</script>
