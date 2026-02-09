<template>
  <section id="observability" class="section dark-section" style="background-color: #1a1d36; color: white;">
    <div class="container">
      <h2 class="section-title text-center text-white">Bring Your Own Observability</h2>
      <p class="section-subtitle text-center text-gray-300">
        Stone-Age.io focuses on live state and control. For historical data, use industry-leading time-series databases.
      </p>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <!-- Platform Focus -->
        <div class="tech-card dark-card">
          <div class="tech-card-header dark-card-header">
            <h3 class="text-xl font-semibold text-white">Platform Focus: Real-Time Control</h3>
          </div>
          <div class="tech-card-body">
            <ul class="space-y-4">
              <li class="flex items-start">
                <i class="pi pi-bolt text-yellow-400 mr-3 mt-1 text-xl flex-shrink-0"></i>
                <div>
                  <strong class="text-white">Live State</strong>
                  <p class="text-gray-300 text-sm">What is happening right now? Current temp, switch status, online/offline.</p>
                </div>
              </li>
              <li class="flex items-start">
                <i class="pi pi-sliders-h text-blue-400 mr-3 mt-1 text-xl flex-shrink-0"></i>
                <div>
                  <strong class="text-white">Control</strong>
                  <p class="text-gray-300 text-sm">Send commands, update setpoints, restart services instantly via NATS.</p>
                </div>
              </li>
              <li class="flex items-start">
                <i class="pi pi-sitemap text-green-400 mr-3 mt-1 text-xl flex-shrink-0"></i>
                <div>
                  <strong class="text-white">Inventory</strong>
                  <p class="text-gray-300 text-sm">Device metadata, locations, credentials, firmware versions in PocketBase.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Suggested Stack -->
        <div class="tech-card dark-card">
          <div class="tech-card-header dark-card-header">
            <h3 class="text-xl font-semibold text-white">Suggested Stack: Historical Data</h3>
          </div>
          <div class="tech-card-body">
            <ul class="space-y-4">
              <li class="flex items-start">
                <i class="pi pi-download text-purple-400 mr-3 mt-1 text-xl flex-shrink-0"></i>
                <div>
                  <strong class="text-white">Telegraf</strong>
                  <p class="text-gray-300 text-sm">Consumes NATS JetStream and pushes to your TSDB of choice.</p>
                </div>
              </li>
              <li class="flex items-start">
                <i class="pi pi-database text-red-400 mr-3 mt-1 text-xl flex-shrink-0"></i>
                <div>
                  <strong class="text-white">VictoriaMetrics</strong>
                  <p class="text-gray-300 text-sm">High-performance TSDB with Prometheus compatibility. Months/years of retention.</p>
                </div>
              </li>
              <li class="flex items-start">
                <i class="pi pi-chart-line text-orange-400 mr-3 mt-1 text-xl flex-shrink-0"></i>
                <div>
                  <strong class="text-white">Perses/Grafana</strong>
                  <p class="text-gray-300 text-sm">Build trend reports, heatmaps, and comparative charts from historical data.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Why This Approach -->
      <div class="mt-12 max-w-4xl mx-auto">
        <div class="bg-white/5 rounded-lg p-6 border border-white/10">
          <h4 class="text-xl font-semibold mb-4 text-white">Why Separate Storage?</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <i class="pi pi-bolt text-yellow-400 text-3xl mb-3 inline-block"></i>
              <h5 class="font-semibold text-white mb-2">Fast</h5>
              <p class="text-sm text-gray-300">Core platform not bogged down by heavy disk I/O for time-series data</p>
            </div>
            <div class="text-center">
              <i class="pi pi-sync text-blue-400 text-3xl mb-3 inline-block"></i>
              <h5 class="font-semibold text-white mb-2">Flexible</h5>
              <p class="text-sm text-gray-300">Switch from VictoriaMetrics to InfluxDB or SQL without changing platform code</p>
            </div>
            <div class="text-center">
              <i class="pi pi-chart-line text-green-400 text-3xl mb-3 inline-block"></i>
              <h5 class="font-semibold text-white mb-2">Scalable</h5>
              <p class="text-sm text-gray-300">Scale storage independently as device count grows from hundreds to millions</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Data Flow Diagram -->
      <div class="mt-12 max-w-5xl mx-auto">
        <div class="bg-white/5 rounded-lg p-6 border border-white/10">
          <h4 class="text-lg font-semibold mb-4 text-white text-center">Resilient Data Pipeline</h4>
          <div class="font-mono text-sm text-center space-y-3">
            <div class="flex items-center justify-center gap-4 flex-wrap">
              <span class="text-blue-300">Agent/Thing</span>
              <span class="text-gray-400">→</span>
              <span class="text-purple-300">NATS JetStream</span>
              <span class="text-gray-400">→</span>
              <span class="text-green-300">Telegraf</span>
              <span class="text-gray-400">→</span>
              <span class="text-orange-300">VictoriaMetrics</span>
              <span class="text-gray-400">→</span>
              <span class="text-red-300">Grafana</span>
            </div>
            <p class="text-xs text-gray-400 mt-4">
              If VictoriaMetrics goes down, data stays safe in JetStream. When back online, Telegraf catches up automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Observability section component
 * Explains the "Bring Your Own" philosophy for historical data storage
 * Highlights the separation between real-time control and historical analytics
 */
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
