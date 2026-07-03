<template>
  <section id="built-on" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">More Than a Console</h2>
      <p class="section-subtitle text-center">
        The console runs the substrate. These run on it — real, open-source systems
        we build and operate on the same primitives you get.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <a
          v-for="(item, index) in teaserItems"
          :key="`teaser-${index}`"
          :href="item.href"
          class="teaser-card"
          :aria-label="`Learn more about ${item.name}`"
        >
          <div class="flex items-center mb-2">
            <i :class="`pi ${item.icon}`" class="text-lg mr-2.5" :style="{ color: item.color }"></i>
            <h3 class="text-base font-semibold" :style="{ color: 'var(--color-content-primary)' }">
              {{ item.name }}
            </h3>
          </div>
          <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            {{ item.blurb }}
          </p>
        </a>
      </div>

      <div class="text-center mt-8">
        <a
          href="/built-on"
          class="inline-flex items-center font-medium text-primary hover:underline"
          aria-label="See everything built on Stone-Age"
        >
          See everything built on Stone-Age
          <i class="pi pi-arrow-right ml-2 text-xs"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * BuiltOnTeaser — compact home-page strip linking to the Built On hub.
 * Sits directly below the console screenshots: the console manages the
 * substrate, these applications and components run on it.
 */

const teaserItems = [
  {
    name: 'Access Control',
    href: '/access-control',
    icon: 'pi-id-card',
    color: '#f59e0b',
    blurb: 'Doors that keep deciding locally when the internet dies.',
  },
  {
    name: 'Kiosk',
    href: '/kiosk',
    icon: 'pi-shopping-cart',
    color: '#3b82f6',
    blurb: 'Badge-scan checkout for tool cribs and storerooms.',
  },
  {
    name: 'Rule-Router',
    href: '/rule-router',
    icon: 'pi-share-alt',
    color: '#8b5cf6',
    blurb: 'NATS-native automation: one binary, one YAML syntax.',
  },
  {
    name: 'Agent',
    href: '/agent',
    icon: 'pi-microchip',
    color: '#10b981',
    blurb: 'Per-device telemetry and control in under 50 MB of RAM.',
  },
];
</script>

<style scoped>
.teaser-card {
  @apply rounded-lg p-4 block;
  background-color: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.teaser-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
</style>
