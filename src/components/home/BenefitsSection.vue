<template>
  <section id="benefits" class="section dark-section" style="background-color: #121212; color: white;">
    <div class="container">
      <h2 class="section-title text-center text-white">Why Choose Stone-Age.io?</h2>
      <p class="section-subtitle text-center text-gray-300">
        Built specifically for MSPs and System Integrators who need to deploy reliable, private IoT infrastructure 
        for their customers without vendor lock-in or architectural complexity.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
        <div v-for="(benefit, index) in benefits" :key="`benefit-${index}`" 
             class="tech-card dark-card">
          <div class="tech-card-header dark-card-header">
            <div class="flex items-center">
              <div class="rounded-full p-2 mr-3 flex items-center justify-center w-10 h-10"
                 :style="{ backgroundColor: benefit.color }">
                <i :class="benefit.icon" class="text-white"></i>
              </div>
              <h3 class="text-xl font-semibold text-white">{{ benefit.title }}</h3>
            </div>
          </div>
          <div class="tech-card-body dark-card-body">
            <p class="text-gray-300 mb-4">{{ benefit.description }}</p>
            <ul class="space-y-3">
              <li v-for="(point, pointIndex) in benefit.points" :key="`point-${index}-${pointIndex}`" 
                  class="flex items-start py-1">
                <i class="pi pi-check mr-2 mt-1 flex-shrink-0" style="color: #4CAF50;"></i>
                <span class="text-white">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Benefits section component
 * Highlights the key advantages for MSPs and System Integrators
 * Emphasizes multi-tenancy, simplicity, security, and the radio network analogy
 */

// Benefits data with MSP/SI focus
const benefits = [
  {
    icon: 'pi pi-building',
    title: 'Built for MSPs & System Integrators',
    description: 'Deploy and manage infrastructure for hundreds of customers from a single platform:',
    points: [
      'Multi-tenant by design with cryptographic isolation per organization',
      'White-label ready with customizable branding and domains',
      'Central management for distributed customer sites worldwide',
      'Leaf Nodes enable local autonomy during network outages'
    ],
    color: '#3b82f6'
  },
  {
    icon: 'pi pi-box',
    title: 'Single Binary Simplicity',
    description: 'No Docker-compose hell, no database migrations, no microservices complexity:',
    points: [
      'One executable includes database, API, and UI (built on PocketBase)',
      'SQLite embedded - no separate database server to manage',
      'Deploy on bare metal, Docker, or Kubernetes as you prefer',
      'Works on FreeBSD (preferred), Linux, Windows, and containers'
    ],
    color: '#8b5cf6'
  },
  {
    icon: 'pi pi-lock',
    title: 'Outbound-Only Security',
    description: 'Devices connect outbound to your infrastructure - no open ports or port forwarding:',
    points: [
      'NATS connections initiated from device to server only',
      'Nebula P2P mesh with automatic NAT traversal and hole punching',
      'Devices invisible to port scanners and automated bot attacks',
      'Identity-based firewall rules instead of fragile IP-based rules'
    ],
    color: '#10b981'
  },
  {
    icon: 'pi pi-code',
    title: 'Open Source & Commercial Support',
    description: 'Transparent development with professional backing for production deployments:',
    points: [
      'Core platform under permissive open source licenses (MIT/Apache)',
      'Full visibility into system operations - no proprietary black boxes',
      'Community-driven development with public roadmap',
      'Commercial support, training, and implementation services available'
    ],
    color: '#f59e0b'
  }
];
</script>

<style scoped>
.dark-card {
  @apply bg-gray-900 border-none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.dark-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}

.dark-card-header {
  @apply bg-gray-800 border-b border-gray-700;
}

.dark-card-body {
  @apply text-gray-200;
}
</style>
