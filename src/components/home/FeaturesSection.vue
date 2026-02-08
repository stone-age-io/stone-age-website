<template>
  <section id="features" class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
    <div class="container">
      <h2 class="section-title text-center">Complete Platform Capabilities</h2>
      <p class="section-subtitle text-center">
        From device bootstrapping to edge automation, Stone-Age.io provides everything needed for 
        production IoT deployments across distributed infrastructure.
      </p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
        <div 
          v-for="(feature, index) in features" 
          :key="`feature-${index}`" 
          class="tech-feature-card"
        >
          <div class="tech-feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="tech-feature-title">{{ feature.title }}</h3>
          <p class="tech-feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Features section component
 * Displays detailed platform capabilities and features
 * Complements the Three Pillars section with specific functionality
 */

// Define features with accurate platform capabilities from docs
const features = [
  {
    icon: 'pi pi-id-card',
    title: 'Device Registry & Bootstrapping',
    description: 'PocketBase-based registry for device lifecycle management. Automated credential provisioning, firmware distribution, and secure bootstrap via REST API.'
  },
  {
    icon: 'pi pi-share-alt',
    title: 'Real-time Messaging',
    description: 'NATS pub/sub with subject-based permissions and topic wildcards. Sub-millisecond latency for control commands and telemetry streaming.'
  },
  {
    icon: 'pi pi-database',
    title: 'Digital Twin (KV Store)',
    description: 'Separate live state from static inventory. NATS KV provides sub-millisecond updates for current readings, status, and configuration.'
  },
  {
    icon: 'pi pi-server',
    title: 'Edge Computing & Leaf Nodes',
    description: 'Local NATS clusters at customer sites for autonomy during outages. Automatic sync when connectivity restored. Low latency for local operations.'
  },
  {
    icon: 'pi pi-sitemap',
    title: 'Multi-Tenant Architecture',
    description: 'Each organization gets isolated NATS Account and Nebula CA. Cryptographic enforcement prevents cross-tenant data access even if compromised.'
  },
  {
    icon: 'pi pi-shield',
    title: 'Decentralized Authentication',
    description: 'NATS Operator/Resolver for scalable JWT-based auth. Device credentials with topic-level permissions. No central auth bottleneck.'
  },
  {
    icon: 'pi pi-bolt',
    title: 'Rule-Router Automation',
    description: 'Stateless YAML-based rules for message routing and transformation. Processes thousands of messages per second without database overhead.'
  },
  {
    icon: 'pi pi-globe',
    title: 'HTTP Gateway',
    description: 'Bridge webhooks and REST APIs to NATS. Inbound fire-and-forget webhooks. Outbound HTTP requests with JetStream acknowledgment.'
  },
  {
    icon: 'pi pi-cog',
    title: 'Agent for Edge Devices',
    description: 'Lightweight Go binary for Linux, Windows, FreeBSD. Telemetry collection, service management, and remote command execution.'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Observability Integration',
    description: 'Telegraf bridges NATS to VictoriaMetrics, InfluxDB, or any TSDB. Pre-configured Grafana dashboards with alerting capabilities.'
  },
  {
    icon: 'pi pi-lock',
    title: 'Nebula Mesh VPN',
    description: 'P2P encrypted tunnels with NAT traversal. Identity-based firewall rules. Lighthouses for discovery, relays for restrictive networks.'
  },
  {
    icon: 'pi pi-cloud',
    title: 'Flexible Deployment',
    description: 'Single binary for bare metal, containers, or VMs. Optimized for FreeBSD. Full support for Linux. Deploy on-premises or cloud.'
  }
];
</script>
