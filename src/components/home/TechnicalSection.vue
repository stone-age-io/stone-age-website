<template>
  <section id="architecture" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">Platform Architecture</h2>
      <p class="section-subtitle text-center">
        Built on proven open source components with clear separation between Control Plane and Data Plane
        for maximum reliability, scalability, and security.
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
                  <h4 class="feature-title">{{ component.title }}</h4>
                  <p class="feature-description">{{ component.description }}</p>
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
      
      <!-- Additional Platform Features -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div v-for="(feature, index) in platformFeatures" :key="`platform-feature-${index}`" class="tech-feature-card">
          <div class="tech-feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h4 class="tech-feature-title">{{ feature.title }}</h4>
          <p class="tech-feature-description">{{ feature.description }}</p>
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
 * Technical section component
 * Highlights the platform architecture with Control Plane vs Data Plane separation
 * Emphasizes multi-tenancy, edge computing, and the grug-brained approach
 */

// Core platform components with updated descriptions
const coreComponents = [
  {
    icon: 'pi pi-cog',
    title: 'Control Plane (PocketBase)',
    description: 'Manages identity, inventory, and orchestration. Stores Organizations, Memberships, Things, Locations, and Types. Automatically provisions NATS accounts and Nebula CAs when organizations are created.',
    color: '#3b82f6'
  },
  {
    icon: 'pi pi-bolt',
    title: 'Data Plane (NATS + Nebula)',
    description: 'Handles real-time messaging and secure connectivity. NATS provides pub/sub, streaming, and KV storage. Nebula creates P2P encrypted tunnels with no open ports required.',
    color: '#8b5cf6'
  },
  {
    icon: 'pi pi-database',
    title: 'Digital Twin (NATS KV)',
    description: 'Live state storage separate from inventory. PocketBase stores static metadata while NATS KV stores current temperature, switch status, heartbeats, and firmware versions for sub-millisecond updates.',
    color: '#10b981'
  },
  {
    icon: 'pi pi-server',
    title: 'Edge Computing (Leaf Nodes)',
    description: 'NATS Leaf Nodes enable local autonomy at customer sites. If internet fails, local devices continue communicating. When restored, data automatically syncs to central cluster.',
    color: '#f59e0b'
  }
];

// Additional platform features
const platformFeatures = [
  {
    icon: 'pi pi-users',
    title: 'Multi-Tenant by Design',
    description: 'Each Organization gets its own isolated NATS Account and Nebula CA. Even if compromised, cryptographically impossible to access other tenants\' data.'
  },
  {
    icon: 'pi pi-bolt',
    title: 'Grug-Brained Automation',
    description: 'Rule-Router processes thousands of messages per second using simple YAML rules. HTTP-Gateway bridges webhooks to NATS. No complex databases for state management.'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Bring Your Own Data',
    description: 'Platform focuses on real-time control. Use Telegraf to pipe data from NATS JetStream into VictoriaMetrics, InfluxDB, or your preferred TSDB without impacting performance.'
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
</style>
