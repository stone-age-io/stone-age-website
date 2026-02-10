<template>
  <section id="how-it-works" class="section" :style="{ backgroundColor: 'var(--color-background)' }">
    <div class="container">
      <h2 class="section-title text-center">How It All Fits Together</h2>
      <p class="section-subtitle text-center">
        From device registration to historical analytics — follow the data through the platform
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
            TSDB goes down? Data stays safe in JetStream. Site loses internet?
            Leaf Nodes cache locally and sync when restored. No data gaps, no manual recovery.
          </p>
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
    subtitle: 'Get devices online with zero-touch provisioning',
    color: '#3b82f6',
    steps: [
      {
        title: 'Register & Bootstrap',
        tag: 'Control Plane',
        color: '#3b82f6',
        description: 'Create a Thing in the console. PocketBase generates credentials. The Thing can then fetch its NATS .creds and/or Nebula certificate via the REST API.',
        highlight: 'Zero-touch provisioning'
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
        description: 'Deploy NATS Leaf Nodes at customer sites. Things keep communicating during internet outages. Data syncs automatically when connectivity returns.',
        highlight: 'Runs on cellular routers and gateways'
      }
    ]
  },
  {
    title: 'Process',
    subtitle: 'Route, transform, and act on data in real-time',
    color: '#f59e0b',
    steps: [
      {
        title: 'Route & Automate',
        tag: 'Rule-Router',
        color: '#f59e0b',
        description: 'Stateless YAML-based rules evaluate messages using Trigger-Condition-Action logic. KV-based stateful alarms prevent notification fatigue. Thousands of messages per second.',
        highlight: 'Dynamic thresholds, signature verification, batch processing'
      },
      {
        title: 'Bridge External Systems',
        tag: 'HTTP Gateway',
        color: '#06b6d4',
        description: 'Bidirectional HTTP-NATS bridge. Inbound webhooks fire-and-forget into NATS. Outbound events trigger Slack, Teams, PagerDuty, or any REST API.',
        highlight: 'Same rule engine as Rule-Router'
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
        description: 'Telegraf consumes JetStream and pushes to your TSDB of choice. Stone-Age stays fast by not storing time-series data. Switch TSDBs without changing platform code.',
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
</style>
