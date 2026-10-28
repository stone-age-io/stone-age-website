<template>
  <section id="pricing" class="py-16 md:py-24 dark-section" :style="{ backgroundColor: 'var(--color-primary)' }">
    <div class="container text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Get started</h2>
      <p class="text-lg sm:text-xl mb-12 max-w-2xl mx-auto text-white">
        Predictable pricing per site, with room to grow. No per-door or per-device fees, and no
        surcharge for the vendor clouds you connect.
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
        A site is a place where equipment connects to the platform directly. Anything that arrives
        through a vendor's cloud counts as part of that cloud, not as a site.
      </p>

      <p class="text-sm leading-relaxed mt-4 max-w-2xl mx-auto text-white/90">
        Hosted and Dedicated plans include connection and message storage headroom sized for
        typical commercial and industrial facilities. High-frequency streaming, extended
        historical retention, or enterprise-scale workloads move to dedicated capacity.
      </p>

      <p class="text-sm leading-relaxed mt-4 max-w-2xl mx-auto text-white/90">
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
 * Pricing section, headed "Get started".
 *
 * The heading names the job rather than the artefact: the section carries three
 * plans, a demo request, the integrator page, GitHub, the docs, and a contact
 * link, which is more than a price list. Two things keep the rename from
 * reading as price-hiding. The anchor stays `pricing`, so /#pricing links and
 * the footer's literal "Pricing" entry still land here; and the price framing
 * is the first line under the heading, because the buyers here are integrators
 * and MSPs who came to find a number and resent being made to hunt for it.
 *
 * Prices match the price sheet exactly: $149 direct with a $49 per-site step,
 * $499 Dedicated with a $49 per-customer-organization step. Do not reintroduce
 * "unlimited organizations" on Dedicated. The per-org step is the platform's
 * only expansion-revenue mechanism, and a published "unlimited" cannot be
 * walked back on a quote.
 *
 * Capacity is described, never promised as infinite. The framing line used to
 * say "everything in it is included" and the Hosted card "however many doors,
 * cameras, and devices are in them", which read as unlimited compute and
 * storage on plans that run on real disks. What the page promises now is the
 * absence of a per-door or per-device fee, plus fair-use headroom sized for a
 * typical facility, and the second note under the cards says what happens past
 * it: high-frequency streaming, long retention, and enterprise-scale workloads
 * move to dedicated capacity. That keeps the advantage over per-door pricing
 * while making a capacity review routine stewardship rather than a broken
 * promise. Do not reintroduce "however many", "everything included", or "no
 * renegotiation at a threshold", here or on the audience pages that repeat
 * these terms (ForItTeamsView, ForIntegratorsView).
 *
 * "Customer" means the integrator's customer and belongs only on the Dedicated
 * card, where a possessive makes that explicit: "your customers". Hosted reads
 * "for end users" because the buyer there operates the building and is nobody's
 * customer in this vocabulary. The two used to disagree, with Hosted sold to
 * "end customers" and Dedicated counting "customer organizations", which left
 * the word meaning the reader on one card and the reader's client on the next.
 * The system diagram labels its boundary "Site" for the same reason.
 *
 * The meter is "site", in the framing line and on the card alike. The line
 * used to say "per location" and "everything in the building", three words
 * for one unit, and Location is a record in the console that can be a single
 * room, so "per location" read as per room. A site has no record of its own,
 * so the plain-English definition under the cards is the contract: a place
 * where equipment connects directly. Anything that reaches the platform only
 * through a vendor's cloud is part of that cloud, not a site. Without that,
 * every truck in a fleet, or each of forty single-inverter solar installs,
 * could be read as a site at $49 apiece, and the buyer connecting their SaaS
 * silos is exactly the one who would stop reading there.
 *
 * The definition states the rule and lists nothing, for the same reason the
 * hero subhead is a range: a list reads as the whole scope. It used to name
 * "a building, a campus, a yard" and "vehicles, drones and energy systems",
 * which told a pump station it was not a site and a telematics buyer that
 * only three kinds of cloud were covered. Keep examples like those in quotes
 * and in this comment, not on the page.
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
    subtitle: 'For end users',
    headerBgColor: '#1F2733',
    subtitleClass: 'text-gray-300',
    price: '$149<span class="text-base font-normal">/mo</span>',
    features: [
      'Every application: access control, video, kiosks, monitoring',
      'Up to 3 sites included, $49/mo per additional site',
      'No per-door or per-device licensing; generous fair-use capacity included',
      'Event retention and digital twin state; capacity expands as you grow',
      'Remote support and policy changes included; on-site work quoted'
    ],
    ctaText: 'Get demo access',
    ctaLink: 'mailto:info@stone-age.io?subject=Demo%20access',
    ctaClass: 'border border-gray-500 bg-gray-700 hover:bg-gray-600 text-white'
  },
  {
    name: 'Dedicated',
    subtitle: 'For integrators and MSPs',
    headerBgColor: '#0D9488', // platform accent
    subtitleClass: 'text-teal-100',
    price: '$499<span class="text-base font-normal">/mo</span>',
    features: [
      'Your own instance, your brand, your domains',
      'Your own signing keys, database, and encryption key',
      'Includes 10 customer organizations ($49/mo each after)',
      'Capacity sized for your whole fleet, with more added as it grows',
      'A service desk your customers see under your logo'
    ],
    ctaText: 'For integrators',
    ctaLink: '/for-integrators',
    ctaClass: 'bg-white hover:bg-gray-100 text-teal-700'
  },
  {
    name: 'Self-hosted',
    subtitle: 'Open source',
    headerBgColor: '#1F2733',
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
