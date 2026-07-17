<template>
  <div>
    <!-- Hub hero -->
    <section class="py-16 sm:py-20 md:py-24" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div class="max-w-3xl">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" :style="{ color: 'var(--color-content-primary)' }">
            Built on Stone-Age
          </h1>
          <p class="text-lg sm:text-xl leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            The best proof of a platform is what ships on it. These are real, open-source
            systems we build and run on the same primitives you get: small static binaries,
            embedded PocketBase, and NATS everywhere.
          </p>
        </div>
      </div>
    </section>

    <!-- Applications -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <h2 class="text-2xl sm:text-3xl font-bold mb-2" :style="{ color: 'var(--color-content-primary)' }">
          Applications
        </h2>
        <p class="mb-8" :style="{ color: 'var(--color-content-secondary)' }">
          Complete systems built on the platform's patterns, each one a single binary you deploy at the edge.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard v-for="(app, index) in applications" :key="`app-${index}`" :item="app" />
        </div>
      </div>
    </section>

    <!-- Components -->
    <section class="section pt-0" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <h2 class="text-2xl sm:text-3xl font-bold mb-2" :style="{ color: 'var(--color-content-primary)' }">
          Components
        </h2>
        <p class="mb-8" :style="{ color: 'var(--color-content-secondary)' }">
          Parts of the stack itself. Deploy them alongside the control plane, centrally or at the edge.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard v-for="(comp, index) in components" :key="`comp-${index}`" :item="comp" />
        </div>

        <p class="mt-10 text-sm text-center" :style="{ color: 'var(--color-content-secondary)' }">
          There's more in the toolbox — the <code class="font-mono text-xs">stone</code> CLI, the
          <code class="font-mono text-xs">leaf-sync</code> config mirror, and the platform itself.
          <a
            href="https://github.com/stone-age-io"
            class="underline hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >Browse the GitHub organization</a>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
/**
 * BuiltOnView — hub page for applications and components built on Stone-Age.
 * Applications = complete systems built on the platform's patterns.
 * Components = parts of the stack itself.
 */
import ProjectCard from '../../components/builton/ProjectCard.vue';

const applications = [
  {
    name: 'Access Control',
    href: '/access-control',
    icon: 'pi-id-card',
    color: '#f59e0b',
    status: 'In Development',
    blurb:
      'Badge-in physical access control. Every door decides locally against policy mirrored to NATS KV, keeps working through an outage, and logs every tap to a JetStream audit trail.',
  },
  {
    name: 'Kiosk',
    href: '/kiosk',
    icon: 'pi-shopping-cart',
    color: '#3b82f6',
    status: 'In Development',
    blurb:
      'Self-service checkout for tool cribs and storerooms: badge in, scan items, go. Append-only ledgers, fleet aggregation, and a virtual timeclock in one ~40 MB binary.',
  },
  {
    name: 'Helpdesk',
    href: '/helpdesk',
    icon: 'pi-ticket',
    color: '#14b8a6',
    status: 'In Development',
    blurb:
      'A service desk for MSPs: reactive support tickets and proactive field work. Machine-generated tickets stream in over NATS with unforgeable provenance, alongside a staff app, requester portal, visit dispatch, and time tracking.',
  },
];

const components = [
  {
    name: 'Rule-Router',
    href: '/rule-router',
    icon: 'pi-share-alt',
    color: '#8b5cf6',
    status: 'Released',
    blurb:
      'A NATS-native rule engine: router, HTTP gateway, and cron scheduler in one binary with one YAML syntax. KV-backed state for dedup, presence, and rate limiting.',
  },
  {
    name: 'Agent',
    href: '/agent',
    icon: 'pi-microchip',
    color: '#10b981',
    status: 'In Development',
    blurb:
      'The per-device daemon: heartbeats, system telemetry, service control, and whitelisted commands over NATS. Linux, Windows, and FreeBSD in under 50 MB of RAM.',
  },
];
</script>
