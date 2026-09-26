<template>
  <section id="what-it-is" class="section" :style="{ backgroundColor: 'var(--color-background)' }">
    <div class="container">
      <div class="max-w-5xl mx-auto">
        <h2 class="section-title text-center">What It Is</h2>
        <p class="section-subtitle text-center">
          A control plane for connected operations: one place to register equipment and the people
          who use it, one real-time bus to carry what it reports, and one encrypted network to reach
          it. Composable pieces that each do one job well, so you adopt what you need today and grow
          into the rest without rewrites.
        </p>

        <!-- The stack. Named projects matter to the two buyers who read
             repositories before they read a price sheet. -->
        <div class="mt-12">
          <h3 class="text-xl sm:text-2xl font-bold mb-3" :style="{ color: 'var(--color-content-primary)' }">
            What it is made of
          </h3>
          <p class="mb-8 max-w-3xl leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            Three well-known open-source projects, each doing the job it is good at, plus our own
            components alongside them. Nothing here is a proprietary protocol you would have to
            reverse engineer later, and nothing is a fork you would be stuck maintaining.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="(part, index) in stack" :key="`stack-${index}`" class="bottom-card">
              <div class="flex items-center mb-2">
                <i :class="`pi ${part.icon}`" class="mr-2" :style="{ color: part.color }"></i>
                <span class="font-mono text-sm font-semibold" :style="{ color: 'var(--color-content-primary)' }">
                  {{ part.name }}
                </span>
              </div>
              <p class="text-xs leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
                {{ part.role }}
              </p>
            </div>
          </div>

          <!-- The off-ramps. Heavy analytics and long-term history are somebody
               else's job; saying so is the point, not an omission. -->
          <p class="mt-6 max-w-3xl text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            Everything else plugs into the same bus. Telegraf ships JetStream data to whichever
            time-series database you prefer; eKuiper or Benthos handle windowed aggregations and
            anomaly detection and publish results back for the rules to act on. Stone-Age stays
            small because the heavy jobs stay with the tools built for them.
          </p>
        </div>

        <!-- Protocol compatibility -->
        <div class="mt-12 max-w-2xl mx-auto">
          <div class="bottom-card">
            <h4 class="text-sm font-semibold mb-3 text-center" :style="{ color: 'var(--color-content-primary)' }">
              Works With What You Already Have
            </h4>
            <div class="grid grid-cols-4 gap-3">
              <div v-for="(proto, index) in protocols" :key="`proto-${index}`" class="text-center">
                <i :class="`pi ${proto.icon}`" class="text-lg mb-1" :style="{ color: proto.color }"></i>
                <div class="text-xs font-medium" :style="{ color: 'var(--color-content-primary)' }">{{ proto.name }}</div>
                <div class="text-xs opacity-60">{{ proto.note }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="callout-box rounded-lg p-6 border-l-4 border-blue-500 mt-12">
          <div class="flex items-start">
            <i class="pi pi-info-circle text-blue-500 text-2xl mr-4 mt-1 flex-shrink-0"></i>
            <div>
              <h4 class="text-lg font-semibold mb-2" :style="{ color: 'var(--color-content-primary)' }">
                Every piece is one file
              </h4>
              <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
                Start with the control plane binary: run
                <code class="font-mono bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs">./stone-age serve</code>
                and open your browser. The database, REST API, and UI are already inside it. Add NATS,
                Nebula, Rule-Router, and the agent alongside it as you need them. Bare metal,
                containers, or VMs, on FreeBSD, Linux, or Windows.
              </p>
            </div>
          </div>
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
 * What survived is what a reader needs here: one paragraph saying what the
 * thing is, the named projects underneath it, the protocols it already speaks,
 * and the single-binary claim. The audience pages carry the argument; this
 * section only has to make the product legible.
 *
 * The heading avoids "built on" on purpose. That phrase is taken: Built On is
 * the applications-built-on-Stone-Age hub, linked from the nav and teased in
 * the section directly above this one.
 *
 * No docs link closes this section. The nav carries one permanently and the
 * Get Started section a screen below has "Read Documentation" as a button;
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
    role: 'Ours: the console you run the fleet from, Rule-Router for declarative YAML automation across NATS, HTTP, and cron, and a lightweight agent that reports and controls a single device.',
  },
];
</script>

<style scoped>
/* Card shell, shared by the stack cards and the protocol strip. */
.bottom-card {
  @apply rounded-lg p-4;
  background-color: var(--color-surface-secondary);
  border: 1px solid var(--color-border-primary);
}

/* Moved here with the single-binary note when PillarsSection was removed. */
.callout-box {
  background-color: rgba(var(--color-primary-rgb), 0.05);
}

.dark .callout-box {
  background-color: rgba(var(--color-primary-rgb), 0.1);
}
</style>
