<template>
  <section id="how-it-works" class="section" :style="{ backgroundColor: 'var(--color-background)' }">
    <div class="container">
      <!--
        Heading, controls, picture, and pieces in one container. Below lg the
        controls are a bar above the diagram; from lg they are a column beside
        it, which is where the vertical space comes from: the diagram never
        wanted the full width, and the bar was spending a whole horizontal band
        on four buttons. The subheading moves into that column for the same
        reason, and the bar's divider rule went with it.
      -->
      <div class="lg:max-w-6xl lg:mx-auto">
        <h2 class="section-title text-center">How It All Fits Together</h2>
        <p class="section-subtitle text-center lg:hidden">{{ SUBTITLE }}</p>

        <div class="lg:flex lg:gap-8">
          <!--
            Sticky either way. As a bar it needs an opaque background because the
            diagram scrolls under it; as a rail it sits in its own column and
            nothing passes behind it. self-start keeps it from stretching to the
            row height, which would leave it nothing to stick within. The sticky
            offset lives in CSS because it has to clear the site header, which is
            itself sticky at a higher z-index.
          -->
          <div class="lens-controls sticky z-20 lg:w-56 lg:shrink-0 lg:self-start">
            <p
              class="hidden lg:block text-sm leading-relaxed mb-5"
              :style="{ color: 'var(--color-content-secondary)' }"
            >
              {{ SUBTITLE }}
            </p>

            <div class="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 lg:flex-col lg:items-stretch lg:gap-2">
              <button
                v-for="item in LENSES"
                :key="item.id"
                class="dg-lens lg:w-full lg:justify-start"
                :class="{ 'dg-lens-active': lens === item.id }"
                :aria-pressed="lens === item.id"
                @click="toggle(item.id)"
              >
                <i :class="`pi ${item.icon}`" class="hidden sm:inline-block sm:mr-2"></i>
                {{ item.label }}
              </button>
            </div>

            <!-- The status line answers the two questions a filter raises when its
                 result is off screen: what is applied, and what did it hide. -->
            <p
              class="text-xs sm:text-sm text-center mt-2.5 min-h-[2rem] sm:min-h-0 lg:mt-4 lg:text-left"
              :style="{ color: 'var(--color-content-secondary)' }"
            >
              <template v-if="activeLens">
                <span
                  class="inline-block w-2 h-2 rounded-full mr-1.5 align-middle"
                  :style="{ backgroundColor: activeLens.color }"
                ></span>
                <span class="font-semibold" :style="{ color: 'var(--color-content-primary)' }">{{ activeLens.label }}</span>
                is highlighted, with {{ visibleCards.length }} of the {{ cards.length }} pieces below.
                <button
                  class="underline hover:no-underline ml-1"
                  :style="{ color: 'var(--color-primary)' }"
                  @click="lens = null"
                >
                  Show all
                </button>
              </template>
              <template v-else>
                Pick a job to trace it through the system and see which pieces it uses.
              </template>
            </p>
          </div>

          <div class="lg:flex-1 lg:min-w-0">
            <SystemDiagram :lens="lens" class="mt-3 sm:mt-6 lg:mt-0" />

            <!-- The pieces, tagged with the job each one serves. -->
            <div class="grid gap-4 mt-10" :class="gridClass">
              <div v-for="card in visibleCards" :key="card.title" class="step-card">
                <div class="step-card-header" :style="{ borderBottomColor: cardColor(card) + '25' }">
                  <span class="step-tag" :style="{ backgroundColor: cardColor(card) + '18', color: cardColor(card) }">
                    {{ cardTag(card) }}
                  </span>
                  <h4 class="text-base font-semibold mt-2" :style="{ color: 'var(--color-content-primary)' }">
                    {{ card.title }}
                  </h4>
                </div>

                <p class="text-sm leading-relaxed mt-3" :style="{ color: 'var(--color-content-secondary)' }">
                  {{ card.description }}
                </p>

                <div v-if="card.highlight" class="step-highlight mt-3">
                  <i class="pi pi-check-circle mr-1.5" :style="{ color: cardColor(card) }"></i>
                  <span>{{ card.highlight }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
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

      <!-- What it is made of -->
      <div id="architecture" class="mt-16 max-w-5xl mx-auto scroll-below-header">
        <h3 class="text-xl sm:text-2xl font-bold mb-3" :style="{ color: 'var(--color-content-primary)' }">
          What it is made of
        </h3>
        <p class="mb-8 max-w-3xl leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
          Three well-known open-source projects, each doing the job it is good at, plus our own
          components alongside them. Nothing here is a proprietary protocol you would have to reverse
          engineer later.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

        <div class="callout-box rounded-lg p-6 border-l-4 border-blue-500 mt-6">
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
 * HowItWorksSection — the system diagram, then the pieces it is made of.
 *
 * The cards used to be grouped into three phases (Connect, Process, Observe)
 * with their own headers and colors. That was a second taxonomy sitting next to
 * the diagram's four jobs and disagreeing with it at the edges: Digital Twin was
 * filed under Observe while the thing that makes it work is a publish. Now each
 * card declares which job it serves, the tag says which, and picking a lens
 * filters to those cards. One vocabulary, two views of it.
 *
 * The lens lives here rather than inside the diagram because it drives both
 * views, and the controls live in a sticky bar because the explorer does not fit
 * on a screen. That is not a layout preference: controls that scroll away leave
 * a reader unable to see what is applied, and a filter with no visible state
 * reads as missing content rather than as a filter.
 *
 * Two cards were dropped rather than re-filed. The Edge Agent card repeated the
 * Built On strip that sits directly above this section and links to its own
 * page. The Built-in Resilience card restated the leaf node, which the diagram
 * now draws and labels; its one unique fact, that JetStream holds data while a
 * database is down, moved into the storage card where it belongs.
 */
import { computed, ref } from 'vue';
import SystemDiagram from './SystemDiagram.vue';
import { LENSES, lensById } from './systemLenses';

// Rendered above the heading below lg and inside the control rail from lg, so it
// is declared here rather than written twice in the template.
const SUBTITLE =
  'Composable pieces that each do one job well. Adopt only what you need today ' +
  'and grow into the rest without rewrites.';

const lens = ref(null);

const toggle = (id) => {
  lens.value = lens.value === id ? null : id;
};

const activeLens = computed(() => (lens.value ? lensById(lens.value) : null));

/**
 * One card per component. `lens` is the job it serves, which decides its tag,
 * its color, and whether it shows while a lens is selected.
 */
const cards = [
  {
    lens: 'provision',
    title: 'Register and bootstrap',
    description:
      'Create a Thing in the console. PocketBase generates credentials. The Thing can then fetch its NATS .creds and/or Nebula certificate via the REST API.',
    highlight: 'One-touch provisioning',
  },
  {
    lens: 'publish',
    title: 'Connect and publish',
    description:
      'Things connect outbound to NATS. Telemetry publishes to subject-namespaced topics with per-user JWT permissions enforcing what each thing or user can see and do.',
    highlight: 'Native MQTT support via NATS JetStream',
  },
  {
    lens: 'publish',
    title: 'Edge autonomy',
    description:
      'Deploy NATS Leaf Nodes at the extreme edge. Things keep communicating during internet outages. Data syncs automatically when connectivity returns.',
    highlight: 'Runs on cellular routers and gateways',
  },
  {
    lens: 'publish',
    title: 'Digital twin',
    description:
      'Live state in NATS KV. The UI subscribes via WebSocket and updates instantly. Edit a setpoint in the browser and it is delivered to the edge as a desired value, which the device reads from its own local copy.',
    highlight: 'Millisecond latency, both directions',
  },
  {
    lens: 'react',
    title: 'Rule-Router',
    description:
      'A unified rule engine handles NATS routing, HTTP webhooks in both directions, and cron-driven publishes, all in the same declarative YAML. Durable state in NATS KV lets rules deduplicate alarms, track presence, and rate-limit actions.',
    highlight: 'Router, gateway, and scheduler: one binary, one syntax',
  },
  {
    lens: 'extend',
    title: 'Stream processing',
    description:
      'When questions involve windowed aggregations, stream joins, or anomaly detection, graduate to a stream processor. eKuiper, Benthos, or a custom service consumes from NATS, runs the heavy analytics, and publishes results back. Rule-Router reacts to those results.',
    highlight: 'Sliding windows, joins, and continuous queries over event streams',
  },
  {
    lens: 'extend',
    title: 'Historical storage',
    description:
      'Telegraf consumes JetStream and pushes to your Timeseries Database of choice, so Stone-Age stays lightweight by offloading heavy storage to purpose-built targets. If that database goes down, recent data waits in JetStream until it comes back.',
    highlight: 'VictoriaMetrics, InfluxDB, Postgres, or whatever you prefer',
  },
];

const visibleCards = computed(() =>
  lens.value ? cards.filter((card) => card.lens === lens.value) : cards
);

// A single card stretched across three columns reads as a mistake, so the grid
// narrows to what is actually in it.
const gridClass = computed(() => {
  const count = visibleCards.value.length;
  if (count === 1) return 'grid-cols-1 max-w-md mx-auto';
  if (count === 2) return 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto';
  // Three across only from xl. At lg the control rail has taken 256px off the
  // row, so a third column would leave each card about 224px wide.
  return 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3';
});

const cardTag = (card) => lensById(card.lens).label;
const cardColor = (card) => lensById(card.lens).color;

const protocols = [
  { name: 'NATS', icon: 'pi-share-alt', color: '#8b5cf6', note: 'Native' },
  { name: 'MQTT', icon: 'pi-comments', color: '#10b981', note: 'JetStream' },
  { name: 'HTTP', icon: 'pi-globe', color: '#3b82f6', note: 'Gateway' },
  { name: 'WebSocket', icon: 'pi-bolt', color: '#f59e0b', note: 'Browser' },
];

// The underlying stack, stated as supporting detail rather than as a credibility
// strip in the hero. Naming NATS, Nebula, and PocketBase matters to the two
// buyers who read repositories; it is not a substitute for saying what the
// product does.
const stack = [
  {
    name: 'PocketBase',
    icon: 'pi-database',
    color: '#3b82f6',
    role: 'Management: identity, inventory, organizations and locations, an embedded SQLite database, a REST API, and an admin UI in one binary.',
  },
  {
    name: 'NATS.io',
    icon: 'pi-share-alt',
    color: '#8b5cf6',
    role: 'Messaging: pub/sub with native MQTT, JetStream for persistence and replay, key-value buckets for live device state, and leaf nodes for edge autonomy.',
  },
  {
    name: 'Nebula',
    icon: 'pi-shield',
    color: '#10b981',
    role: 'Connectivity: a peer-to-peer mesh with NAT traversal, identity-based firewall rules, and outbound-only connections, so no port opens on an edge network.',
  },
];
</script>

<style scoped>
/* The controls, sticky in both of their shapes. As a bar the diagram scrolls
   under it, so it needs an opaque background and its own padding. As a rail it
   has its own column and nothing passes behind it, so both come off: a panel
   there would read as a second card next to the picture. */
.lens-controls {
  @apply py-2 sm:py-3;
  /* Clear the site header, which is sticky at z-30 and owns the top of the
     viewport. Without this the controls pin underneath it and the subheading
     disappears behind the logo. */
  top: var(--header-height);
  background-color: var(--color-background);
}

@media (min-width: 1024px) {
  .lens-controls {
    top: calc(var(--header-height) + 2rem);
    padding-top: 0;
    padding-bottom: 0;
    background-color: transparent;
  }
}

/* Cards — clean layout with structured header */
.step-card {
  @apply rounded-lg p-4;
  background-color: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.step-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Card header area */
.step-card-header {
  @apply pb-2;
  border-bottom: 1px solid;
}

/* Tag pill: the job this piece serves */
.step-tag {
  @apply text-xs font-semibold px-2 py-0.5 rounded-full inline-block;
}

/* Highlight row at bottom of card */
.step-highlight {
  @apply flex items-center text-xs;
  color: var(--color-content-secondary);
}

/* Bottom bar cards */
.bottom-card {
  @apply rounded-lg p-4;
  background-color: var(--color-surface-secondary);
  border: 1px solid var(--color-border-primary);
}

/* Moved here with the single-binary note when PillarsSection was removed. */
.callout-box {
  background-color: rgba(59, 130, 246, 0.05);
}

.dark .callout-box {
  background-color: rgba(59, 130, 246, 0.1);
}
</style>
