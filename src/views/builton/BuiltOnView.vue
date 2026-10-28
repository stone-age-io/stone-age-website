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
            The platform is a control plane and a few small components around it. Below are those
            components, then the reference applications we built with them to show the patterns end
            to end. All of it is open source, on the same primitives you get: small static binaries,
            embedded PocketBase, and NATS everywhere.
          </p>
        </div>
      </div>
    </section>

    <!-- Components -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <h2 class="text-2xl sm:text-3xl font-bold mb-2" :style="{ color: 'var(--color-content-primary)' }">
          Components
        </h2>
        <p class="mb-8 max-w-3xl" :style="{ color: 'var(--color-content-secondary)' }">
          Parts of the stack itself, and part of the platform you run or we host. Deploy them beside
          the control plane, at the edge, or on your own machine.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard v-for="(comp, index) in components" :key="`comp-${index}`" :item="comp" />
        </div>
      </div>
    </section>

    <!-- Reference applications -->
    <section class="section pt-0" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <h2 class="text-2xl sm:text-3xl font-bold mb-2" :style="{ color: 'var(--color-content-primary)' }">
          Reference applications
        </h2>
        <p class="mb-8 max-w-3xl" :style="{ color: 'var(--color-content-secondary)' }">
          Complete systems we built to show the patterns end to end: each one a single binary with its
          own data model, running on the same bus. They are open source and you can run them as they
          are, but they are examples to learn from and build on, not supported products.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard v-for="(app, index) in applications" :key="`app-${index}`" :item="app" />
        </div>

        <p class="mt-10 text-sm text-center" :style="{ color: 'var(--color-content-secondary)' }">
          There's more in the toolbox: the
          <code class="font-mono text-xs">leaf-sync</code> config mirror and the platform itself.
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
 * BuiltOnView — hub page for the components and reference applications.
 *
 * Components come first because they are the product: parts of the stack that
 * a hosted account or a self-hosted install actually runs. The applications are
 * reference projects. They are real and usable, but no pricing card or audience
 * page sells them, and this page must not either: keep "reference" in the
 * heading and the not-a-supported-product sentence under it.
 */
import ProjectCard from '../../components/builton/ProjectCard.vue';


const components = [
  {
    name: 'Rule-Router',
    href: '/rule-router',
    icon: 'pi-share-alt',
    color: '#8b5cf6',
    blurb:
      'A NATS-native rule engine: router, HTTP gateway, and cron scheduler in one binary with one YAML syntax. KV-backed state for dedup, presence, and rate limiting.',
  },
  {
    name: 'Agent',
    href: '/agent',
    icon: 'pi-microchip',
    color: '#10b981',
    blurb:
      'The per-device daemon: heartbeats, system telemetry, service control, and whitelisted commands over NATS. Linux, Windows, and FreeBSD in under 50 MB of RAM.',
  },
  {
    name: 'stone CLI',
    href: '/stone-cli',
    icon: 'pi-code',
    color: '#3b82f6',
    blurb:
      'The command-line client: tenant resources with typed flags, NATS publish and subscribe, KV reads, and a tenant pulled down as YAML you review in git and apply back.',
  },
];

const applications = [
  {
    name: 'Access Control',
    href: '/access-control',
    icon: 'pi-id-card',
    color: '#f59e0b',
    blurb:
      'Badge-in physical access control. Every door decides locally against policy mirrored to NATS KV, keeps working through an outage, and logs every tap to a JetStream audit trail.',
  },
  {
    name: 'Kiosk',
    href: '/kiosk',
    icon: 'pi-shopping-cart',
    color: '#3b82f6',
    blurb:
      'Self-service checkout for tool cribs and storerooms: badge in, scan items, go. Append-only ledgers, fleet aggregation, and a virtual timeclock in one ~40 MB binary.',
  },
  {
    name: 'Helpdesk',
    href: '/helpdesk',
    icon: 'pi-ticket',
    color: '#14b8a6',
    blurb:
      'A service desk for MSPs: support tickets and field work. Machine-generated tickets arrive over NATS with their customer read from a signed subject, alongside a staff app, requester portal, visit dispatch, and time tracking.',
  },
];
</script>
