<template>
  <section id="benefits" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">Why Choose Stone-Age.io?</h2>
      <p class="section-subtitle text-center">
        Built specifically for MSPs and System Integrators who need to deploy reliable, private IoT infrastructure 
        for their customers without vendor lock-in or architectural complexity.
      </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
    <div v-for="(benefit, index) in benefits" :key="`benefit-${index}`" 
         class="tech-card">
      <div class="tech-card-header">
        <div class="flex items-center">
          <div class="rounded-full p-2 mr-3 flex items-center justify-center w-10 h-10"
             :style="{ backgroundColor: benefit.color }">
            <i :class="benefit.icon" class="text-white"></i>
          </div>
          <h3 class="text-xl font-semibold">{{ benefit.title }}</h3>
        </div>
      </div>
      <div class="tech-card-body">
        <p class="mb-4 opacity-75">{{ benefit.description }}</p>
        <ul class="space-y-3">
          <li v-for="(point, pointIndex) in benefit.points" :key="`point-${index}-${pointIndex}`" 
              class="flex items-start py-1">
            <i class="pi pi-check mr-2 mt-1 flex-shrink-0" style="color: #4CAF50;"></i>
            <span>{{ point }}</span>
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

// Benefits data with MSP/SI focus - reduced to 3 items each
const benefits = [
  {
    icon: 'pi pi-building',
    title: 'Built for MSPs & System Integrators',
    description: 'Deploy and manage infrastructure for hundreds of customers from a single platform:',
    points: [
      'Cryptographic isolation per organization with dedicated NATS Accounts',
      'White-label ready with customizable branding and domains',
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
      'Deploy on FreeBSD, Linux, Windows, or containers'
    ],
    color: '#8b5cf6'
  },
  {
    icon: 'pi pi-lock',
    title: 'Outbound-Only Security',
    description: 'Devices connect outbound to your infrastructure - no open ports or port forwarding:',
    points: [
      'NATS and Nebula connections initiated from device to server',
      'Automatic NAT traversal and hole punching',
      'Identity-based firewall rules instead of IP-based rules'
    ],
    color: '#10b981'
  },
  {
    icon: 'pi pi-code',
    title: 'Open Source & Commercial Support',
    description: 'Transparent development with professional backing for production:',
    points: [
      'Core platform under permissive licenses',
      'Full visibility into all system operations',
      'Commercial support and training available'
    ],
    color: '#f59e0b'
  }
];
</script>
