<template>
  <section id="what-it-is" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <!-- Row 1: two questions side by side. What it does on the left, what
           it is built from on the right; the stack cards below answer the
           right-hand one in detail. -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10">
        <div>
          <h2 class="section-title">What it is</h2>
          <p class="intro-text">
            A control plane for connected operations: one place to register equipment and the people
            who use it, one real-time bus to carry what it reports, and one encrypted network to reach
            it. Composable pieces that each do one job well, so you adopt what you need today and grow
            into the rest without rewrites.
          </p>
        </div>
        <!-- The stack. Named projects matter to the two buyers who read
             repositories before they read a price sheet. -->
        <div>
          <h3 class="section-title">What it is made of</h3>
          <p class="intro-text">
            Three well-known open-source projects, each doing the job it is good at, plus our own
            components alongside them. Nothing here is a proprietary protocol you would have to
            reverse engineer later, and nothing is a fork you would be stuck maintaining.
          </p>
        </div>
      </div>

      <!-- Row 2: the stack -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="(part, index) in stack" :key="`stack-${index}`" class="bottom-card">
          <div class="flex items-center mb-2">
            <i :class="`pi ${part.icon}`" class="mr-2" :style="{ color: part.color }"></i>
            <span class="font-mono text-sm font-semibold" :style="{ color: 'var(--color-content-primary)' }">
              {{ part.name }}
            </span>
          </div>
          <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            {{ part.role }}
          </p>
        </div>
      </div>

      <!-- Row 3: three supporting facts, a card each, so none of them reads
           as an afterthought trailing the stack. -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <!-- Protocol compatibility. The icons fill the space under the title
             and sit centered in it, since the cards beside this one are taller
             with text. -->
        <div class="bottom-card flex flex-col">
          <h4 class="fact-title">
            <i class="pi pi-link fact-icon"></i>
            Works with what you already have
          </h4>
          <div class="grid grid-cols-4 gap-3 flex-1 content-center py-2">
            <div v-for="(proto, index) in protocols" :key="`proto-${index}`" class="text-center">
              <i :class="`pi ${proto.icon}`" class="text-2xl mb-2" :style="{ color: proto.color }"></i>
              <div class="text-xs font-medium" :style="{ color: 'var(--color-content-primary)' }">{{ proto.name }}</div>
              <div class="text-xs opacity-60">{{ proto.note }}</div>
            </div>
          </div>
        </div>

        <!-- The off-ramps. Heavy analytics and long-term history are somebody
             else's job; saying so is the point, not an omission. -->
        <div class="bottom-card">
          <h4 class="fact-title">
            <i class="pi pi-sitemap fact-icon"></i>
            Everything else plugs into the same bus
          </h4>
          <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            Telegraf ships JetStream data to whichever time-series database you prefer; eKuiper or
            Benthos handle windowed aggregations and anomaly detection and publish results back for
            the rules to act on. Stone-Age stays small because the heavy jobs stay with the tools
            built for them.
          </p>
        </div>

        <div class="bottom-card">
          <h4 class="fact-title">
            <i class="pi pi-file fact-icon"></i>
            Every piece is one file
          </h4>
          <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            Start with the control plane binary: run
            <code class="font-mono bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs whitespace-nowrap">./stone-age init</code>,
            then
            <code class="font-mono bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs whitespace-nowrap">./stone-age serve --nats</code>,
            and open your browser. The database, REST API, UI, and a NATS server are already inside
            it. Add Nebula, Rule-Router, and the agent alongside it as you need them. Bare metal,
            containers, or VMs, on Linux, FreeBSD, or Windows. The control plane also runs on
            macOS.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * WhatItIsSection — a short definition and the parts list.
 *
 * This replaces HowItWorksSection, which had grown into a page of its own: an
 * interactive system diagram with four lenses, a sticky control rail, and seven
 * filterable component cards. Three things retired it. The diagram was the most
 * expensive thing on the home page to maintain and the least likely to be read
 * by someone still deciding whether to keep scrolling; the seven cards restated
 * what the stack cards below them already said, one abstraction level down; and
 * the whole apparatus asked a first-time reader to explore an architecture
 * before they had decided they cared. Depth of that kind belongs in the docs,
 * which now has a nav link of its own.
 *
 * Layout: left aligned in rows, like the tour above it. Row 1 puts the
 * definition and the "made of" paragraph side by side, row 2 is the stack,
 * row 3 gives the protocols, the off-ramps and the single-binary note a card
 * each. They used to trail the stack one under another, centered and full
 * width by turns, and read as leftovers.
 *
 * What survived is what a reader needs here: one paragraph saying what the
 * thing is, the named projects underneath it, the protocols it already speaks,
 * and the single-binary claim. The audience pages carry the argument; this
 * section only has to make the product legible.
 *
 * The heading avoids "built on" on purpose. That phrase is taken: Built On is
 * the hub for the components and reference applications, linked from the nav
 * and teased, components only, in the section directly below this one.
 *
 * No docs link closes this section. The nav carries one permanently and the
 * Get Started section further down has "Read Documentation" as a button;
 * a third inside one scroll would read as pleading rather than helpful.
 */

const protocols = [
  { name: 'NATS', icon: 'pi-share-alt', color: '#8b5cf6', note: 'Native' },
  { name: 'MQTT', icon: 'pi-comments', color: '#10b981', note: 'JetStream' },
  { name: 'HTTP', icon: 'pi-globe', color: '#3b82f6', note: 'Gateway' },
  { name: 'WebSocket', icon: 'pi-bolt', color: '#f59e0b', note: 'Browser' },
];

/**
 * The stack. Each upstream project states the capability a removed component
 * card used to carry: provisioning under PocketBase, leaf nodes and live state
 * under NATS, outbound-only connections under Nebula. The fourth card is ours,
 * so a reader can tell which parts we are on the hook for.
 */
const stack = [
  {
    name: 'PocketBase',
    icon: 'pi-database',
    color: '#3b82f6',
    role: 'Management: identity, inventory, organizations and locations, an embedded SQLite database, a REST API, and an admin UI in one binary. Creating a thing here mints the credentials it fetches on first boot.',
  },
  {
    name: 'NATS.io',
    icon: 'pi-share-alt',
    color: '#8b5cf6',
    role: 'Messaging: pub/sub with native MQTT, JetStream for persistence and replay, key-value buckets holding the live device state the browser subscribes to, and leaf nodes that keep a site running through an internet outage.',
  },
  {
    name: 'Nebula',
    icon: 'pi-shield',
    color: '#10b981',
    role: 'Connectivity: a peer-to-peer mesh with NAT traversal, identity-based firewall rules, and outbound-only connections, so no port opens on an edge network and nothing depends on a customer VPN.',
  },
  {
    name: 'Stone-Age',
    icon: 'pi-box',
    color: '#f59e0b',
    role: 'Ours: the console you run the fleet from, plus the components in the section below. Rule-Router automates across NATS, HTTP, and cron, the agent reports and controls a single device, and the stone CLI drives it all from a terminal.',
  },
];
</script>

<style scoped>
/* Card shell, shared by the stack cards and the three fact cards. */
.bottom-card {
  @apply rounded-lg p-4;
  background-color: var(--color-surface-secondary);
  border: 1px solid var(--color-border-primary);
}

.intro-text {
  @apply text-lg leading-relaxed max-w-2xl;
  color: var(--color-content-secondary);
}

.fact-title {
  @apply flex items-center gap-2 text-base font-semibold mb-3;
  color: var(--color-content-primary);
}

.fact-icon {
  color: var(--color-primary);
}
</style>
