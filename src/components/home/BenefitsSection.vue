<template>
  <section id="benefits" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">Why Choose Stone-Age.io?</h2>
      <p class="section-subtitle text-center">
        Built for MSPs and System Integrators who deploy infrastructure for their customers,  
         or even hobbyists who self-host running a single Raspberry Pi.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12 md:mt-16">
        <div
          v-for="(benefit, index) in benefits"
          :key="`benefit-${index}`"
          class="tech-card"
        >
          <div class="tech-card-header">
            <div class="flex items-center">
              <div
                class="rounded-full p-2 mr-3 flex items-center justify-center w-10 h-10"
                :style="{ backgroundColor: benefit.color }"
              >
                <i :class="benefit.icon" class="text-white"></i>
              </div>
              <h3 class="text-xl font-semibold">{{ benefit.title }}</h3>
            </div>
          </div>
          <div class="tech-card-body">
            <p class="mb-4 opacity-75">{{ benefit.description }}</p>
            <ul class="space-y-3">
              <li
                v-for="(point, pIdx) in benefit.points"
                :key="`point-${index}-${pIdx}`"
                class="flex items-start py-1"
              >
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
 * Benefits section — sharpened copy for MSP/SI audience
 * Each benefit leads with a concrete outcome, not a feature name
 */

const benefits = [
  {
    icon: 'pi pi-building',
    title: 'Hundreds of Customers, One Deployment',
    description: 'Multi-tenancy is infrastructure-enforced, not just a database filter:',
    points: [
      'Each organization gets its own NATS Account with cryptographic isolation. A compromised device in Org A has zero path to Org B',
      'Dedicated Nebula Certificate Authority per org for network-level separation',
      'White-label ready. Customize to your brand, your domains, your identity'
    ],
    color: '#3b82f6'
  },
  {
    icon: 'pi pi-box',
    title: 'The Unix Philosophy for IoT',
    description: 'Every component used in the stack ships as a lightweight, static binary:',
    points: [
      'Run the Platform, NATS, and the Agent directly on bare metal, VMs, or existing industrial routers.',
      'SQLite for management, NATS streams high-throughput telemetry. Pipe data to tools like VictoriaMetrics for history. Do one thing well and do it well.',
      'BSD, Linux, Windows. If you can copy a file, you can deploy this stack'
    ],
    color: '#8b5cf6'
  },
  {
    icon: 'pi pi-lock',
    title: 'Things Connect Out, Attackers Stay Out',
    description: 'No open ports on your edge network. No port forwarding conversations with IT:',
    points: [
      'NATS and Nebula initiate all connections outbound from the device',
      'Automatic NAT traversal handles LTE, 5G, satellite, and restrictive corporate networks',
      'Identity-based firewall rules: "admins can SSH to gateways, sensors can only talk to gateways"'
    ],
    color: '#10b981'
  },
  {
    icon: 'pi pi-wifi',
    title: 'Sites Keep Running When Internet Fails',
    description: 'Leaf Nodes provide true local autonomy, not just a "retry later" queue:',
    points: [
      'Local NATS server or cluster at each site so things keep communicating during outages',
      'Edge Rule-Router instances process alerts locally with zero cloud dependency',
      'Automatic sync when connectivity restores. No data gaps, no manual intervention'
    ],
    color: '#f59e0b'
  }
];
</script>
