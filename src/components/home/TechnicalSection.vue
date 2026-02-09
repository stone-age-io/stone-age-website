<template>
  <section id="architecture" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">Platform Architecture</h2>
      <p class="section-subtitle text-center">
        Stone-Age.io orchestrates three industry-leading technologies into a unified, single-binary platform
      </p>

   <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 md:mt-16">
        <!-- Core Components Card -->
        <div class="tech-card">
          <div class="tech-card-header">
            <h3 class="text-xl font-semibold">Core Components</h3>
          </div>
          <div class="tech-card-body">
            <div class="space-y-6">
              <div v-for="(component, index) in coreComponents" :key="`component-${index}`" class="feature-item">
                <div class="feature-icon" :style="{ backgroundColor: component.color }">
                  <i :class="component.icon" class="text-white"></i>
                </div>
                <div class="feature-content">
                  <h4 class="feature-title text-gray-900 dark:text-white">{{ component.title }}</h4>
                  <p class="feature-description text-gray-600 dark:text-gray-300">{{ component.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Architecture Flow Card -->
        <div class="tech-card">
          <div class="tech-card-header">
            <h3 class="text-xl font-semibold">Data Flow Architecture</h3>
          </div>
          <div class="tech-card-body">
            <div class="h-full flex flex-col justify-between p-4 rounded-lg font-mono text-sm leading-relaxed data-flow-card">
              <div class="space-y-4">
                <div>
                  <div class="data-flow-title data-flow-blue">Device Registration</div>
                  <div class="data-flow-subtitle">↓ (PocketBase Control Plane)</div>
                </div>
                <div>
                  <div class="data-flow-title data-flow-green">Bootstrap & Credentials</div>
                  <div class="data-flow-subtitle">↓ (.creds files, NATS JWT, Nebula cert)</div>
                </div>
                <div>
                  <div class="data-flow-title data-flow-yellow">NATS Cluster Connection</div>
                  <div class="data-flow-subtitle">↓ (pub/sub to isolated Account)</div>
                </div>
                <div>
                  <div class="data-flow-title data-flow-purple">Edge Processing</div>
                  <div class="data-flow-subtitle">↓ (Leaf Nodes, Rule-Router)</div>
                </div>
                <div>
                  <div class="data-flow-title data-flow-pink">Digital Twin Update</div>
                  <div class="data-flow-subtitle">↓ (NATS KV for live state)</div>
                </div>
                <div>
                  <div class="data-flow-title data-flow-orange">Historical Storage</div>
                  <div class="data-flow-subtitle">↓ (Telegraf → TSDB of choice)</div>
                </div>
              </div>
              
              <div class="space-y-3 mt-6 pt-4 data-flow-footer">
                <div>
                  <div class="data-flow-highlight data-flow-cyan">Multi-Tenant Security:</div>
                  <div class="data-flow-text">Each Org → NATS Account + Nebula CA</div>
                </div>
                <div>
                  <div class="data-flow-highlight data-flow-red">Edge Resilience:</div>
                  <div class="data-flow-text">Leaf Node Cache → Local Rules → Auto Sync</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  <!-- Observability -->
  <div id="arch-observability" class="mt-16 max-w-5xl mx-auto scroll-mt-20">
    <div class="text-center mb-8">
      <h3 class="text-2xl sm:text-3xl font-bold mb-4">Bring Your Own Observability</h3>
      <p class="text-lg opacity-75">
        Stone-Age.io focuses on live control. Use industry-leading TSDBs for historical data.
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
    description: 'High-performance, multi-tenant messaging backbone for telemetry and commands. Handles pub/sub, streaming persistence, and key-value storage.',
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
    description: 'Peer-to-peer mesh VPN providing secure overlay networks, and  encrypted tunnels to the extreme edge. No open ports required.',
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
    icon: 'pi pi-lock',
    title: 'Zero Trust Security',
    description: 'JWT-based auth with subject-level permissions. Outbound-only connections.'
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
  }
];
</script>

<style scoped>
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

/* Data Flow Card Styling */
.data-flow-card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
}

.dark .data-flow-card {
  background-color: #131631;
  border-color: #1e293b;
}

.data-flow-title {
  font-weight: 600;
}

/* Light mode colors - vibrant but readable */
.data-flow-blue { color: #1e40af; }
.dark .data-flow-blue { color: #93c5fd; }

.data-flow-green { color: #15803d; }
.dark .data-flow-green { color: #86efac; }

.data-flow-yellow { color: #ca8a04; }
.dark .data-flow-yellow { color: #fde047; }

.data-flow-purple { color: #7e22ce; }
.dark .data-flow-purple { color: #d8b4fe; }

.data-flow-pink { color: #be185d; }
.dark .data-flow-pink { color: #f9a8d4; }

.data-flow-orange { color: #c2410c; }
.dark .data-flow-orange { color: #fdba74; }

.data-flow-cyan { color: #0891b2; }
.dark .data-flow-cyan { color: #67e8f9; }

.data-flow-red { color: #b91c1c; }
.dark .data-flow-red { color: #fca5a5; }

.data-flow-subtitle {
  font-size: 0.75rem;
  margin-left: 1rem;
  color: #64748b;
}

.dark .data-flow-subtitle {
  color: #94a3b8;
}

.data-flow-footer {
  border-top: 1px solid #e2e8f0;
}

.dark .data-flow-footer {
  border-top-color: #334155;
}

.data-flow-highlight {
  font-weight: 600;
  color: #0891b2;
}

.dark .data-flow-highlight {
  color: #67e8f9;
}

.data-flow-text {
  font-size: 0.75rem;
  color: #475569;
}

.dark .data-flow-text {
  color: #cbd5e1;
}
</style>
