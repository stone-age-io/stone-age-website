<template>
  <section id="architecture" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">

      <!-- Radio Network Analogy — conceptual anchor first -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="section-title">The Modern Radio Network</h2>
        <p class="section-subtitle">
          Think of a digital radio network. You build the towers, 
          assign private channels to each organization, and hand out radios to utilize 
	  the infrastructure. 
          Stone-Age.io applies this concept as a modern IoT Framework or Event-Driven Architecture .
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 md:mb-20">
        <div v-for="(item, index) in analogyItems" :key="`analogy-${index}`" class="text-center">
          <div class="analogy-icon-box mx-auto mb-3">
            <i :class="`pi ${item.icon}`" class="text-3xl" :style="{ color: item.color }"></i>
          </div>
          <h4 class="font-semibold mb-1" :style="{ color: 'var(--color-content-primary)' }">{{ item.title }}</h4>
          <p class="text-sm" :style="{ color: 'var(--color-content-secondary)' }">{{ item.description }}</p>
        </div>
      </div>

      <!-- Three Pillars -->
      <div class="text-center mb-10">
        <h3 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
          Three Pillars, One Binary
        </h3>
        <p class="text-lg max-w-3xl mx-auto" :style="{ color: 'var(--color-content-secondary)' }">
          The management platform (database, identity, API, and UI) ships as a single executable
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(pillar, index) in pillars" :key="`pillar-${index}`" class="tech-card">
          <div class="tech-card-header">
            <div class="flex items-center justify-center mb-4">
              <div class="rounded-full p-4 text-white" :style="{ backgroundColor: pillar.color }">
                <i :class="pillar.icon" class="text-3xl"></i>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-center">{{ pillar.title }}</h3>
            <p class="text-center text-sm mt-2 opacity-75">{{ pillar.subtitle }}</p>
          </div>
          <div class="tech-card-body">
            <p class="mb-4">{{ pillar.description }}</p>
            <ul class="space-y-2 text-sm">
              <li v-for="(feature, fIdx) in pillar.features" :key="`pf-${index}-${fIdx}`" class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Single binary callout -->
      <div class="mt-12 max-w-4xl mx-auto">
        <div class="callout-box rounded-lg p-6 border-l-4 border-blue-500">
          <div class="flex items-start">
            <i class="pi pi-info-circle text-blue-500 text-2xl mr-4 mt-1 flex-shrink-0"></i>
            <div>
              <h4 class="text-lg font-semibold mb-2">No Complex Docker-Compose Required</h4>
              <p class="text-sm opacity-90">
                Download the binary, run <code class="font-mono bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs">./stone-age serve</code>, 
                and open your browser. The embedded SQLite database, REST API, and reactive UI are all included. 
                Deploy on bare metal, containers, or VMs (FreeBSD, Linux, or Windows)
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
 * PillarsSection — The conceptual and architectural foundation
 * Leads with the Radio Network analogy for mental model,
 * then presents the Three Pillars (PocketBase, NATS, Nebula)
 */

// Radio network analogy items
const analogyItems = [
  {
    icon: 'pi-sitemap',
    title: 'The Towers',
    description: 'NATS and Nebula provide resilient airwaves and secure tunnels',
    color: '#3b82f6'
  },
  {
    icon: 'pi-wifi',
    title: 'The Channels',
    description: 'NATS Accounts and Subjects give each organization isolated, private channels',
    color: '#8b5cf6'
  },
  {
    icon: 'pi-tablet',
    title: 'The Radios',
    description: 'Devices and applications that speak NATS, MQTT, or plain HTTP',
    color: '#10b981'
  }
];

// Three Pillars data
const pillars = [
  {
    icon: 'pi pi-database',
    title: 'Management',
    subtitle: 'PocketBase',
    description: 'A monolithic backend providing Identity, Inventory, and an embedded UI. The single-binary foundation that orchestrates everything.',
    features: [
      'User & device identity management',
      'Organization & location hierarchy',
      'Embedded SQLite database',
      'Built-in REST API & admin UI'
    ],
    color: '#3b82f6'
  },
  {
    icon: 'pi pi-share-alt',
    title: 'Messaging',
    subtitle: 'NATS.io',
    description: 'High-performance, multi-tenant messaging backbone for telemetry and commands. Handles pub/sub, streaming, and key-value storage.',
    features: [
      'Core pub/sub with MQTT support',
      'JetStream for persistence & replay',
      'KV Store for Digital Twins',
      'Leaf Nodes for edge autonomy'
    ],
    color: '#8b5cf6'
  },
  {
    icon: 'pi pi-shield',
    title: 'Connectivity',
    subtitle: 'Nebula',
    description: 'Peer-to-peer mesh VPN providing secure overlay networks and encrypted tunnels to the extreme edge. No open ports required.',
    features: [
      'P2P mesh networking',
      'NAT traversal & hole punching',
      'Identity-based firewall rules',
      'Outbound-only connections'
    ],
    color: '#10b981'
  }
];
</script>

<style scoped>
.analogy-icon-box {
  @apply rounded-lg p-4 w-16 h-16 flex items-center justify-center;
  background-color: var(--color-surface-primary);
  box-shadow: var(--shadow-md);
}

.callout-box {
  background-color: rgba(59, 130, 246, 0.05);
}

.dark .callout-box {
  background-color: rgba(59, 130, 246, 0.1);
}
</style>
