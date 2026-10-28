<template>
  <section id="built-on" class="section" :style="{ backgroundColor: background }">
    <div class="container">
      <h2 class="section-title text-center">{{ heading }}</h2>
      <p class="section-subtitle text-center">{{ subtitle }}</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
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
          aria-label="See the components and reference applications"
        >
          Components and reference applications
          <i class="pi pi-arrow-right ml-2 text-xs"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * BuiltOnTeaser — compact strip of the stack's own components, linking to the
 * Built On hub.
 *
 * It lists components, not the applications. Access Control, Kiosk, and
 * Helpdesk are reference applications: open source and usable, but examples of
 * the patterns rather than supported products, so they live on the hub under
 * that name and are not sold here. The audience pages reuse the strip, which is
 * why the framing is a prop. The item list is not: one place to add a
 * component, so the pages cannot drift apart.
 */

defineProps({
  heading: {
    type: String,
    default: 'Around the console',
  },
  subtitle: {
    type: String,
    default:
      'The open-source components you run with it: at the edge, beside the control plane, and from your own terminal.',
  },
  // Sections alternate between the two page backgrounds, so the page that
  // places the teaser says which one it gets.
  background: {
    type: String,
    default: 'var(--color-background-alt)',
  },
});

const teaserItems = [
  {
    name: 'Rule-Router',
    href: '/rule-router',
    icon: 'pi-share-alt',
    color: '#8b5cf6',
    blurb: 'Automation as declarative YAML: NATS rules, webhooks in, API calls out, and cron, in one binary.',
  },
  {
    name: 'Agent',
    href: '/agent',
    icon: 'pi-microchip',
    color: '#10b981',
    blurb: 'Per-device telemetry, service control, and allowlisted commands from one lightweight daemon.',
  },
  {
    name: 'stone CLI',
    href: '/stone-cli',
    icon: 'pi-code',
    color: '#3b82f6',
    blurb: 'The platform from a terminal: tenant resources, NATS, and KV, with config kept as YAML in git.',
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
