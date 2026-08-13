<template>
  <div>
    <!-- Hero -->
    <section class="py-16 sm:py-20 md:py-24" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-wide mb-4" :style="{ color: 'var(--color-primary)' }">
            For IT and operations teams
          </p>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" :style="{ color: 'var(--color-content-primary)' }">
            Your building data belongs in the tools your team already uses.
          </h1>
          <p class="text-lg sm:text-xl leading-relaxed mb-8" :style="{ color: 'var(--color-content-secondary)' }">
            Door events, sensor telemetry, and device state live on an open message bus instead of
            inside someone's SaaS. Scrape it, stream it, retain it, and graph it next to the rest of
            your infrastructure.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@stone-age.io?subject=Demo%20access%20for%20IT%20teams"
              class="btn btn-primary inline-flex items-center justify-center px-6 py-3 rounded-md font-medium"
            >Get demo access</a>
            <a
              href="https://docs.stone-age.io"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium border"
              :style="{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }"
            >Read the docs</a>
          </div>
        </div>
      </div>
    </section>

    <!-- The silo contrast -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div class="max-w-3xl mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            No silo, no export button
          </h2>
          <p class="leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            Most access control and building systems keep their data inside a vendor's cloud, and the
            integration story is a CSV download or a paid API tier. Here the event stream is the product
            surface. Everything that happens is a message on a subject you can subscribe to, with
            JetStream retention behind it, so bringing it into your existing observability stack is
            plumbing rather than a procurement exercise.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(path, index) in dataPaths"
            :key="`path-${index}`"
            class="p-6 rounded-lg"
            :style="{ backgroundColor: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }"
          >
            <h3 class="font-semibold mb-2" :style="{ color: 'var(--color-content-primary)' }">
              {{ path.title }}
            </h3>
            <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
              {{ path.body }}
            </p>
          </div>
        </div>

        <p class="mt-8 text-sm max-w-3xl" :style="{ color: 'var(--color-content-secondary)' }">
          We don't build the time-series database and we don't build the dashboard. Prometheus,
          VictoriaMetrics, Grafana, and Perses already do those jobs well, and our job is to make sure
          yours works.
        </p>
      </div>
    </section>

    <!-- Runs where you put it -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div class="max-w-3xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            Runs where you decide, on hardware you own
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(item, index) in deployPoints" :key="`deploy-${index}`" class="flex items-start">
            <span class="mr-3 mt-1 flex-shrink-0" :style="{ color: 'var(--color-primary)' }">&#10003;</span>
            <div>
              <h3 class="font-semibold mb-1" :style="{ color: 'var(--color-content-primary)' }">
                {{ item.title }}
              </h3>
              <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
                {{ item.body }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Keeps working -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div class="max-w-3xl">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            The building keeps working when the link doesn't
          </h2>
          <p class="leading-relaxed mb-4" :style="{ color: 'var(--color-content-secondary)' }">
            Every site runs a leaf node with a local mirror of its own configuration and a local copy of
            device state. Access decisions, automation rules, and recording all happen on site. When the
            WAN drops, doors still open, badges still work, and rules still fire. The site queues its
            events and reconciles when the link returns.
          </p>
          <p class="leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            That also keeps the control plane out of the critical path of your physical operations. An
            outage upstream costs you configuration changes and dashboards while the building keeps
            running.
          </p>
        </div>
      </div>
    </section>

    <!-- Your own model -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div class="max-w-3xl">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            Bring your own model, too
          </h2>
          <p class="leading-relaxed mb-4" :style="{ color: 'var(--color-content-secondary)' }">
            Object detection runs on the edge box next to the cameras, so video stays in the
            building. And because the platform's whole surface is a documented CLI over an
            open API, pointing an assistant at your own inventory is a matter of giving it a read-only
            credential, with whichever model you choose, including one running inside your own network.
          </p>
          <p class="leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            Same principle as everything above. Bring your own dashboard. Bring your own model. Own the
            infrastructure underneath both.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div
          class="max-w-3xl mx-auto text-center p-8 rounded-lg"
          :style="{ backgroundColor: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }"
        >
          <h2 class="text-2xl sm:text-3xl font-bold mb-3" :style="{ color: 'var(--color-content-primary)' }">
            Look at a running system
          </h2>
          <p class="leading-relaxed mb-4" :style="{ color: 'var(--color-content-secondary)' }">
            We'll give you a read-only login to a live reference environment rather than a slide deck.
          </p>
          <p class="leading-relaxed mb-6" :style="{ color: 'var(--color-content-secondary)' }">
            A hosted account is <strong :style="{ color: 'var(--color-content-primary)' }">$149/month</strong>
            for every application across up to three sites, and $49/month for each site after that.
            No per-door, per-camera, or per-device metering. The source is open and the binaries are
            yours, so nothing you build on top of it depends on us still being here in five years.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@stone-age.io?subject=Demo%20access%20for%20IT%20teams"
              class="btn btn-primary inline-flex items-center justify-center px-6 py-3 rounded-md font-medium"
            >Get demo access</a>
            <a
              href="https://docs.stone-age.io"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium border"
              :style="{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }"
            >Read the docs</a>
          </div>
          <p class="text-xs mt-6" :style="{ color: 'var(--color-content-secondary)' }">
            The reference environment's traffic is generated on purpose: a few hundred users and tens of
            thousands of events a month, so you can see how it behaves under load before you have load
            of your own.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
/**
 * For IT Teams — audience page for the IT-literate end customer.
 *
 * Lead claim: "your building data belongs in the tools your team already uses."
 *
 * Accuracy note: rule-router exposes a Prometheus endpoint with a documented metric
 * catalogue (see its docs/12-observability.md). The platform console does NOT expose
 * one — do not claim otherwise here. Business telemetry reaches a TSDB by subscribing
 * to NATS subjects and forwarding, which is what dataPaths describes.
 */

const dataPaths = [
  {
    title: 'Scrape it',
    body: 'The rule-router automation engine at each site exposes a Prometheus metrics endpoint with a documented catalogue covering rule and gateway throughput, queue depth, and error counts. Point Prometheus or VictoriaMetrics at it like any other target.',
  },
  {
    title: 'Stream it',
    body: 'Every event is a message on a NATS subject with JetStream retention. Subscribe and forward it wherever it belongs: a warehouse, a TSDB, a webhook, or another site. No proprietary transport in the way.',
  },
  {
    title: 'Query it',
    body: 'Device state lives in JetStream key-value buckets you can read directly, and the whole management API is plain REST with an admin UI in front of it. Nothing is hidden behind an integration tier.',
  },
];

const deployPoints = [
  {
    title: 'Small static binaries',
    body: 'Control plane, automation engine, and edge agent are single Go binaries. Bare metal, a VM, an industrial router, or a Raspberry Pi. If you can copy a file, you can deploy it.',
  },
  {
    title: 'SQLite for management, NATS for throughput',
    body: 'Configuration and identity live in one embedded database that is trivial to back up. High-volume telemetry never touches it.',
  },
  {
    title: 'Nothing listens on your edge network',
    body: 'Devices and sites initiate every connection outbound. No port forwarding, no inbound firewall exceptions, and NAT traversal handles LTE, 5G, and restrictive corporate networks.',
  },
  {
    title: 'Self-host or hosted, same binary',
    body: 'Run it yourself under an open-source license, or let us run it. The migration path between the two is the same binary.',
  },
];
</script>
