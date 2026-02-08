<template>
  <section id="key-features" class="section" :style="{ backgroundColor: 'var(--color-background)' }">
    <div class="container">
      <h2 class="section-title text-center">The Three Pillars</h2>
      <p class="section-subtitle text-center">
        Stone-Age.io orchestrates three industry-leading technologies into a unified management experience
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16">
        <!-- PocketBase - Management -->
        <div class="tech-card">
          <div class="tech-card-header">
            <div class="flex items-center justify-center mb-4">
              <div class="rounded-full p-4 bg-blue-500 text-white">
                <i class="pi pi-database text-3xl"></i>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-center">Management</h3>
            <p class="text-center text-sm mt-2 opacity-75">PocketBase</p>
          </div>
          <div class="tech-card-body">
            <p class="mb-4">
              A monolithic backend providing Identity, Inventory, and an embedded UI. 
              The single-binary foundation that orchestrates everything.
            </p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>User & device identity management</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>Organization & location hierarchy</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>Embedded SQLite database</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>Built-in REST API & admin UI</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- NATS - Messaging -->
        <div class="tech-card">
          <div class="tech-card-header">
            <div class="flex items-center justify-center mb-4">
              <div class="rounded-full p-4 bg-purple-500 text-white">
                <i class="pi pi-share-alt text-3xl"></i>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-center">Messaging</h3>
            <p class="text-center text-sm mt-2 opacity-75">NATS.io</p>
          </div>
          <div class="tech-card-body">
            <p class="mb-4">
              High-performance, multi-tenant "Nervous System" for telemetry and commands. 
              Handles pub/sub, streaming, and key-value storage.
            </p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>Core pub/sub messaging</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>JetStream for persistence</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>KV Store for Digital Twins</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>Leaf Nodes for edge deployment</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Nebula - Connectivity -->
        <div class="tech-card">
          <div class="tech-card-header">
            <div class="flex items-center justify-center mb-4">
              <div class="rounded-full p-4 bg-green-500 text-white">
                <i class="pi pi-shield text-3xl"></i>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-center">Connectivity</h3>
            <p class="text-center text-sm mt-2 opacity-75">Nebula</p>
          </div>
          <div class="tech-card-body">
            <p class="mb-4">
              Peer-to-peer mesh VPN providing secure, encrypted tunnels to the extreme edge. 
              No open ports required.
            </p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>P2P mesh networking</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>NAT traversal & hole punching</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>Identity-based firewall rules</span>
              </li>
              <li class="flex items-start">
                <i class="pi pi-check text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                <span>Outbound-only connections</span>
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
    </div>
  </section>
</template>

<script setup>
/**
 * Key Features section component - The Three Pillars
 * Highlights PocketBase, NATS, and Nebula as the core foundation
 * Emphasizes the single-binary simplicity of the platform
 */
</script>
