<template>
  <section id="how-it-works" class="section" :style="{ backgroundColor: 'var(--color-background)' }">
    <div class="container">
      <h2 class="section-title text-center">How It All Fits Together</h2>
      <p class="section-subtitle text-center">
        Composable tiers that each do one job well. Adopt only what you need today and grow into the rest without rewrites.
      </p>

      <!-- Phases -->
      <div class="mt-12 space-y-12">
        <div v-for="(phase, pIdx) in phases" :key="`phase-${pIdx}`">
          <!-- Phase header bar -->
          <div class="phase-header" :style="{ borderLeftColor: phase.color }">
            <span class="phase-step" :style="{ backgroundColor: phase.color }">{{ pIdx + 1 }}</span>
            <div>
              <h3 class="text-lg font-bold" :style="{ color: 'var(--color-content-primary)' }">
                {{ phase.title }}
              </h3>
              <p class="text-sm" :style="{ color: 'var(--color-content-secondary)' }">
                {{ phase.subtitle }}
              </p>
            </div>
          </div>

          <!-- Step cards -->
          <div
            class="grid gap-4 mt-4"
            :class="phase.steps.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'"
          >
            <div
              v-for="(step, sIdx) in phase.steps"
              :key="`step-${pIdx}-${sIdx}`"
              class="step-card"
            >
              <!-- Card header: tag + title -->
              <div class="step-card-header" :style="{ borderBottomColor: step.color + '25' }">
                <span class="step-tag" :style="{ backgroundColor: step.color + '18', color: step.color }">
                  {{ step.tag }}
                </span>
                <h4 class="text-base font-semibold mt-2" :style="{ color: 'var(--color-content-primary)' }">
                  {{ step.title }}
                </h4>
              </div>

              <!-- Card body -->
              <p class="text-sm leading-relaxed mt-3" :style="{ color: 'var(--color-content-secondary)' }">
                {{ step.description }}
              </p>

              <!-- Highlight -->
              <div v-if="step.highlight" class="step-highlight mt-3">
                <i class="pi pi-check-circle mr-1.5" :style="{ color: step.color }"></i>
                <span>{{ step.highlight }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar: protocols + resilience -->
      <div class="mt-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        <!-- Protocol compatibility -->
        <div class="bottom-card">
          <h4 class="text-sm font-semibold mb-3" :style="{ color: 'var(--color-content-primary)' }">
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

        <!-- Resilience note -->
        <div class="bottom-card bottom-card-green">
          <h4 class="text-sm font-semibold mb-2" :style="{ color: 'var(--color-content-primary)' }">
            <i class="pi pi-shield text-green-500 mr-1.5"></i>
            Built-in Resilience
          </h4>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            If your TSDB goes down, recent data stays safe in JetStream until it comes back. If a site loses
            internet, Leaf Nodes cache locally and sync when it returns. No data gaps, no manual recovery.
          </p>
        </div>
      </div>

      <!-- What it is made of -->
      <div id="architecture" class="mt-16 max-w-5xl mx-auto scroll-mt-24">
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
                Nebula, the rule engine, and the agent alongside it as you need them. Bare metal,
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
 * HowItWorksSection — 3 phases with compact card grids
 * Phase 1: Connect — getting devices online
 * Phase 2: Process — automation and bridging
 * Phase 3: Observe — live state, management, history
 */

const phases = [
  {
    title: 'Connect',
    subtitle: 'Get things online with one-touch provisioning',
    color: '#3b82f6',
    steps: [
      {
        title: 'Register & Bootstrap',
        tag: 'Control Plane',
        color: '#3b82f6',
        description: 'Create a Thing in the console. PocketBase generates credentials. The Thing can then fetch its NATS .creds and/or Nebula certificate via the REST API.',
        highlight: 'One-touch provisioning'
      },
      {
        title: 'Connect & Publish',
        tag: 'Data Plane',
        color: '#8b5cf6',
        description: 'Things connect outbound to NATS. Telemetry publishes to subject-namespaced topics with per-user JWT permissions enforcing what each thing or user can see and do.',
        highlight: 'Native MQTT support via NATS JetStream'
      },
      {
        title: 'Edge Autonomy',
        tag: 'Leaf Nodes',
        color: '#10b981',
        description: 'Deploy NATS Leaf Nodes at the extreme edge. Things keep communicating during internet outages. Data syncs automatically when connectivity returns.',
        highlight: 'Runs on cellular routers and gateways'
      }
    ]
  },
  {
    title: 'Process',
    subtitle: 'Route, react, and analyze data in real-time',
    color: '#f59e0b',
    steps: [
      {
        title: 'Rule Engine',
        tag: 'Reflexes',
        color: '#f59e0b',
        description: 'A unified rule engine handles NATS routing, HTTP webhooks in both directions, and cron-driven publishes, all in the same declarative YAML. Durable state in NATS KV lets rules deduplicate alarms, track presence, and rate-limit actions.',
        highlight: 'Router, gateway, and scheduler: one binary, one syntax'
      },
      {
        title: 'Stream Processing',
        tag: 'Analytics',
        color: '#06b6d4',
        description: 'When questions involve windowed aggregations, stream joins, or anomaly detection, graduate to a stream processor. eKuiper, Benthos, or a custom service consumes from NATS, runs the heavy analytics, and publishes results back. The rule engine reacts to those results.',
        highlight: 'Sliding windows, joins, and continuous queries over event streams'
      }
    ]
  },
  {
    title: 'Observe',
    subtitle: 'Monitor live state and store history your way',
    color: '#ec4899',
    steps: [
      {
        title: 'Digital Twin',
        tag: 'NATS KV',
        color: '#ec4899',
        description: 'Live state in NATS KV. The UI subscribes via WebSocket and updates instantly. Edit setpoints in the browser and changes publish back to the device.',
        highlight: 'Sub-millisecond, fully bi-directional'
      },
      {
        title: 'Edge Agent',
        tag: 'Go Binary',
        color: '#6366f1',
        description: 'Lightweight system service collecting telemetry, monitoring services, and executing whitelisted commands. Publishes heartbeats for online/offline status.',
        highlight: 'Less than 50MB RAM'
      },
      {
        title: 'Historical Storage',
        tag: 'Bring Your Own',
        color: '#ef4444',
        description: 'Telegraf consumes JetStream and pushes to your Timeseries Database of choice. Stone-Age remains lightweight by offloading heavy storage to purpose-built TSDB targets.',
        highlight: 'VictoriaMetrics, InfluxDB, Postgres, or whatever you prefer'
      }
    ]
  }
];

const protocols = [
  { name: 'NATS', icon: 'pi-share-alt', color: '#8b5cf6', note: 'Native' },
  { name: 'MQTT', icon: 'pi-comments', color: '#10b981', note: 'JetStream' },
  { name: 'HTTP', icon: 'pi-globe', color: '#3b82f6', note: 'Gateway' },
  { name: 'WebSocket', icon: 'pi-bolt', color: '#f59e0b', note: 'Browser' }
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
    role: 'Management: identity, inventory, organizations and locations, an embedded SQLite database, a REST API, and an admin UI in one binary.'
  },
  {
    name: 'NATS.io',
    icon: 'pi-share-alt',
    color: '#8b5cf6',
    role: 'Messaging: pub/sub with native MQTT, JetStream for persistence and replay, key-value buckets for live device state, and leaf nodes for edge autonomy.'
  },
  {
    name: 'Nebula',
    icon: 'pi-shield',
    color: '#10b981',
    role: 'Connectivity: a peer-to-peer mesh with NAT traversal, identity-based firewall rules, and outbound-only connections, so no port opens on an edge network.'
  }
];
</script>

<style scoped>
/* Phase header with left accent border */
.phase-header {
  @apply flex items-center gap-3 pl-4 py-2;
  border-left: 3px solid;
}

.phase-step {
  @apply w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0;
}

/* Step cards — clean layout with structured header */
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

/* Tag pill */
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

.bottom-card-green {
  border-color: rgba(16, 185, 129, 0.2);
}

.dark .bottom-card-green {
  border-color: rgba(16, 185, 129, 0.15);
}

/* Moved here with the single-binary note when PillarsSection was removed. */
.callout-box {
  background-color: rgba(59, 130, 246, 0.05);
}

.dark .callout-box {
  background-color: rgba(59, 130, 246, 0.1);
}
</style>
