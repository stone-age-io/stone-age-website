<template>
  <section id="architecture" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">Platform Architecture</h2>
      <p class="section-subtitle text-center">
        Stone-Age.io orchestrates three industry-leading technologies into a unified, single-binary platform
      </p>

  <!-- The Three Pillars -->
  <div id="arch-pillars" class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16 scroll-mt-20">
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
          <li v-for="(feature, fIndex) in pillar.features" :key="`feature-${index}-${fIndex}`" class="flex items-start">
            <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
            <span>{{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Single Binary Callout -->
  <div class="mt-12 max-w-4xl mx-auto">
    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-500">
      <div class="flex items-start">
        <i class="pi pi-info-circle text-blue-500 text-2xl mr-4 mt-1 flex-shrink-0"></i>
        <div>
          <h4 class="text-lg font-semibold mb-2">Single Binary Simplicity</h4>
          <p class="text-sm opacity-90">
            The entire Stone-Age.io platform (database, identity, API, and embedded UI) is delivered as a 
            <strong>single executable binary</strong> built on PocketBase. No Docker-compose complexity, 
            no database migrations, and no "it works on my machine" deployment bugs. Just download and run.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Architecture Details -->
  <div id="arch-flow" class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 scroll-mt-20">
    <!-- Control Plane vs Data Plane -->
    <div class="tech-card dark-card">
      <div class="tech-card-header dark-card-header">
        <h3 class="text-xl font-semibold">Control Plane vs Data Plane</h3>
      </div>
      <div class="tech-card-body dark-card-body">
        <div class="space-y-6">
          <div v-for="(component, index) in coreComponents" :key="`component-${index}`" class="feature-item">
            <div class="feature-icon" :style="{ backgroundColor: component.color }">
              <i :class="component.icon" class="text-white"></i>
            </div>
            <div class="feature-content">
              <h4 class="feature-title">{{ component.title }}</h4>
              <p class="feature-description">{{ component.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Data Flow -->
    <div class="tech-card dark-card">
      <div class="tech-card-header dark-card-header">
        <h3 class="text-xl font-semibold">Data Flow Architecture</h3>
      </div>
      <div class="tech-card-body dark-card-body">
        <div class="h-full flex flex-col justify-between p-4 rounded-lg font-mono text-sm leading-relaxed" 
             style="background-color: #131631; color: #f8f8f2;">
          <div class="space-y-4">
            <div>
              <div class="text-blue-300 font-semibold">Device Registration</div>
              <div class="text-gray-400 text-xs ml-4">↓ (PocketBase Control Plane)</div>
            </div>
            <div>
              <div class="text-green-300 font-semibold">Bootstrap & Credentials</div>
              <div class="text-gray-400 text-xs ml-4">↓ (.creds files, NATS JWT, Nebula cert)</div>
            </div>
            <div>
              <div class="text-yellow-300 font-semibold">NATS Cluster Connection</div>
              <div class="text-gray-400 text-xs ml-4">↓ (pub/sub to isolated Account)</div>
            </div>
            <div>
              <div class="text-purple-300 font-semibold">Edge Processing</div>
              <div class="text-gray-400 text-xs ml-4">↓ (Leaf Nodes, Rule-Router)</div>
            </div>
            <div>
              <div class="text-pink-300 font-semibold">Digital Twin Update</div>
              <div class="text-gray-400 text-xs ml-4">↓ (NATS KV for live state)</div>
            </div>
            <div>
              <div class="text-orange-300 font-semibold">Historical Storage</div>
              <div class="text-gray-400 text-xs ml-4">↓ (Telegraf → TSDB of choice)</div>
            </div>
          </div>
          
          <div class="space-y-3 mt-6 pt-4 border-t border-gray-600">
            <div>
              <div class="text-cyan-300 font-semibold">Multi-Tenant Security:</div>
              <div class="text-gray-300 text-xs">Each Org → NATS Account + Nebula CA</div>
            </div>
            <div>
              <div class="text-red-300 font-semibold">Edge Resilience:</div>
              <div class="text-gray-300 text-xs">Leaf Node Cache → Local Rules → Auto Sync</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Observability -->
  <div id="arch-observability" class="mt-16 max-w-5xl mx-auto scroll-mt-20">
    <div class="text-center mb-8">
      <h3 class="text-2xl sm:text-3xl font-bold mb-4">Observability: "Bring Your Own"</h3>
      <p class="text-lg opacity-75">
        Platform focuses on live control. Use industry-leading TSDBs for historical data.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Platform Focus -->
      <div class="tech-card dark-card">
        <div class="tech-card-header dark-card-header">
          <h4 class="text-lg font-semibold">Real-Time Control</h4>
        </div>
        <div class="tech-card-body dark-card-body">
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="pi pi-bolt text-yellow-400 mr-3 mt-1 text-lg flex-shrink-0"></i>
              <div>
                <strong>Live State:</strong>
                <span class="text-sm opacity-90"> Current readings, switch status, online/offline</span>
              </div>
            </li>
            <li class="flex items-start">
              <i class="pi pi-sliders-h text-blue-400 mr-3 mt-1 text-lg flex-shrink-0"></i>
              <div>
                <strong>Control:</strong>
                <span class="text-sm opacity-90"> Send commands, update setpoints instantly via NATS</span>
              </div>
            </li>
            <li class="flex items-start">
              <i class="pi pi-sitemap text-green-400 mr-3 mt-1 text-lg flex-shrink-0"></i>
              <div>
                <strong>Inventory:</strong>
                <span class="text-sm opacity-90"> Device metadata, credentials in PocketBase</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Suggested Stack -->
      <div class="tech-card dark-card">
        <div class="tech-card-header dark-card-header">
          <h4 class="text-lg font-semibold">Historical Data</h4>
        </div>
        <div class="tech-card-body dark-card-body">
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="pi pi-download text-purple-400 mr-3 mt-1 text-lg flex-shrink-0"></i>
              <div>
                <strong>Telegraf:</strong>
                <span class="text-sm opacity-90"> Consumes NATS JetStream, pushes to your TSDB</span>
              </div>
            </li>
            <li class="flex items-start">
              <i class="pi pi-database text-red-400 mr-3 mt-1 text-lg flex-shrink-0"></i>
              <div>
                <strong>VictoriaMetrics:</strong>
                <span class="text-sm opacity-90"> High-performance TSDB with months/years retention</span>
              </div>
            </li>
            <li class="flex items-start">
              <i class="pi pi-chart-line text-orange-400 mr-3 mt-1 text-lg flex-shrink-0"></i>
              <div>
                <strong>Grafana:</strong>
                <span class="text-sm opacity-90"> Build dashboards and alerts from historical data</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Why Separate -->
    <div class="mt-8 bg-white/5 dark:bg-white/5 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <i class="pi pi-bolt text-yellow-500 text-2xl mb-2 inline-block"></i>
          <h5 class="font-semibold mb-1">Fast</h5>
          <p class="text-sm opacity-75">Core platform not bogged down by time-series I/O</p>
        </div>
        <div>
          <i class="pi pi-sync text-blue-500 text-2xl mb-2 inline-block"></i>
          <h5 class="font-semibold mb-1">Flexible</h5>
          <p class="text-sm opacity-75">Switch TSDBs without changing platform code</p>
        </div>
        <div>
          <i class="pi pi-chart-line text-green-500 text-2xl mb-2 inline-block"></i>
          <h5 class="font-semibold mb-1">Scalable</h5>
          <p class="text-sm opacity-75">Scale storage independently as devices grow</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Platform Capabilities -->
  <div id="arch-capabilities" class="mt-16 scroll-mt-20">
    <h3 class="text-2xl sm:text-3xl font-bold text-center mb-4">Platform Capabilities</h3>
    <p class="text-center text-lg opacity-75 mb-10 max-w-3xl mx-auto">
      Everything you need for production IoT deployments
    </p>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div 
        v-for="(capability, index) in capabilities" 
        :key="`capability-${index}`" 
        class="tech-feature-card"
      >
        <div class="tech-feature-icon">
          <i :class="capability.icon"></i>
        </div>
        <h4 class="tech-feature-title">{{ capability.title }}</h4>
        <p class="tech-feature-description">{{ capability.description }}</p>
      </div>
    </div>
  </div>

  <!-- Modern Radio Network Analogy -->
  <div class="mt-16 max-w-4xl mx-auto">
    <div class="radio-network-card rounded-lg p-8 border">
      <div class="text-center mb-6">
        <i class="pi pi-bolt text-yellow-500 dark:text-yellow-400 text-4xl mb-4 inline-block"></i>
        <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">The Modern Radio Network Analogy</h3>
        <p class="text-gray-700 dark:text-gray-300">Think of Stone-Age.io like a modern digital radio network</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div class="text-center">
          <div class="icon-box rounded-lg p-4 mb-3">
            <i class="pi pi-sitemap text-blue-600 dark:text-blue-400 text-3xl"></i>
          </div>
          <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">The Towers</h4>
          <p class="text-sm text-gray-600 dark:text-gray-300">NATS and Nebula provide the resilient airwaves and secure tunnels</p>
        </div>
        <div class="text-center">
          <div class="icon-box rounded-lg p-4 mb-3">
            <i class="pi pi-wifi text-purple-600 dark:text-purple-400 text-3xl"></i>
          </div>
          <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">The Channels</h4>
          <p class="text-sm text-gray-600 dark:text-gray-300">NATS Accounts and Subjects provide isolated channels for different customers</p>
        </div>
        <div class="text-center">
          <div class="icon-box rounded-lg p-4 mb-3">
            <i class="pi pi-tablet text-green-600 dark:text-green-400 text-3xl"></i>
          </div>
          <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">The Radios</h4>
          <p class="text-sm text-gray-600 dark:text-gray-300">Devices and applications that speak NATS, MQTT, or HTTP</p>
        </div>
      </div>
    </div>
  </div>
</div>

  </section>
</template>

<script setup>
/**
 * Comprehensive Architecture section
 * Combines Three Pillars, architecture details, observability, and capabilities
 * Provides complete technical overview of the platform
 */

// The Three Pillars
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
    description: 'High-performance, multi-tenant "Nervous System" for telemetry and commands. Handles pub/sub, streaming, and key-value storage.',
    features: [
      'Core pub/sub messaging',
      'JetStream for persistence',
      'KV Store for Digital Twins',
      'Leaf Nodes for edge deployment'
    ],
    color: '#8b5cf6'
  },
  {
    icon: 'pi pi-shield',
    title: 'Connectivity',
    subtitle: 'Nebula',
    description: 'Peer-to-peer mesh VPN providing secure, encrypted tunnels to the extreme edge. No open ports required.',
    features: [
      'P2P mesh networking',
      'NAT traversal & hole punching',
      'Identity-based firewall rules',
      'Outbound-only connections'
    ],
    color: '#10b981'
  }
];

// Core architecture components
const coreComponents = [
  {
    icon: 'pi pi-cog',
    title: 'Control Plane (PocketBase)',
    description: 'Manages identity, inventory, and orchestration. Automatically provisions NATS accounts and Nebula CAs when organizations are created.',
    color: '#3b82f6'
  },
  {
    icon: 'pi pi-bolt',
    title: 'Data Plane (NATS + Nebula)',
    description: 'Handles real-time messaging and secure connectivity. NATS provides pub/sub, streaming, and KV storage.',
    color: '#8b5cf6'
  },
  {
    icon: 'pi pi-database',
    title: 'Digital Twin (NATS KV)',
    description: 'Live state storage separate from inventory. Sub-millisecond updates for current temperature, switch status, and heartbeats.',
    color: '#10b981'
  },
  {
    icon: 'pi pi-server',
    title: 'Edge Computing (Leaf Nodes)',
    description: 'Local autonomy at customer sites. If internet fails, devices continue communicating. Auto-sync when restored.',
    color: '#f59e0b'
  }
];

// Platform capabilities
const capabilities = [
  {
    icon: 'pi pi-id-card',
    title: 'Device Bootstrapping',
    description: 'Automated credential provisioning and secure device registration via REST API.'
  },
  {
    icon: 'pi pi-sitemap',
    title: 'Multi-Tenant',
    description: 'Cryptographic isolation per organization with dedicated NATS Accounts.'
  },
  {
    icon: 'pi pi-bolt',
    title: 'Rule-Router',
    description: 'YAML-based automation processing thousands of messages per second.'
  },
  {
    icon: 'pi pi-globe',
    title: 'HTTP Gateway',
    description: 'Bridge webhooks and REST APIs to NATS messaging backbone.'
  },
  {
    icon: 'pi pi-cog',
    title: 'Edge Agent',
    description: 'Lightweight Go binary for Linux, Windows, FreeBSD management.'
  },
  {
    icon: 'pi pi-lock',
    title: 'Zero Trust Security',
    description: 'JWT-based auth with topic-level permissions. Outbound-only connections.'
  }
];
</script>

<style scoped>
/* Dark card styling for technical sections */
.dark-card {
  background-color: #1a1d36;
  color: #e5e7eb;
}

.dark .dark-card {
  background-color: #131631;
}

.dark-card-header {
  background-color: #131631;
  border-color: rgba(75, 85, 99, 0.4);
  color: #f9fafb;
}

.dark .dark-card-header {
  background-color: #0d1117;
}

.dark-card-body {
  color: #e5e7eb;
}

/* Modern Radio Network Card Styling */
.radio-network-card {
  background: linear-gradient(to right, rgb(191, 219, 254), rgb(233, 213, 255));
  border-color: rgb(147, 197, 253);
}

.dark .radio-network-card {
  background: linear-gradient(to right, rgba(30, 58, 138, 0.6), rgba(88, 28, 135, 0.6));
  border-color: rgba(96, 165, 250, 0.3);
}

.icon-box {
  background-color: rgba(255, 255, 255, 0.5);
}

.dark .icon-box {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
