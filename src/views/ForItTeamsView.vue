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
            The systems your team inherited should run like the systems it chose.
          </h1>
          <p class="text-lg sm:text-xl leading-relaxed mb-8" :style="{ color: 'var(--color-content-secondary)' }">
            Cellular routers, power systems, cameras, door controllers, and cloud SaaS platforms usually arrive
            as isolated silos with their own proprietary dashboards. Here every physical event and SaaS webhook
            is a message on an open bus, on hardware you own: scrape it, stream it, retain it, and act on it
            alongside the rest of your infrastructure.
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

    <BuiltOnTeaser
      background="var(--color-background)"
      heading="What runs on it"
      subtitle="You do not start from an empty bus. These are the applications and components that run on it, all open source, and a hosted account includes every one of them."
    />

    <!-- The silo contrast -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div class="max-w-3xl mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            No silo, no export button
          </h2>
          <p class="leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            Most access control, kiosk, and telemetry systems keep their data inside a vendor's cloud,
            and the integration story is a CSV download or a paid API tier. Here the event stream is the product
            surface. Everything that happens is a message on a subject you can subscribe to, with
            JetStream retention behind it, so bringing it into your existing observability stack is
            plumbing rather than a procurement exercise.
          </p>
        </div>

        <!--
          Data-path diagram. The point is convergence and fan-out: physical devices
          and cloud SaaS platforms meet on one bus. The lower path is drawn dashed because
          those three are tooling the customer picks and runs, which the prose below the cards
          says in words. Deliberately no "ours/yours" labels: the data is the customer's on all paths.
        -->
        <div class="dg-scroll mb-10">
          <svg
            class="dg"
            viewBox="0 20 740 195"
            role="img"
            aria-label="Physical devices and cloud SaaS platforms publish events and webhooks to NATS JetStream and Rule-Router. The bus feeds live console state, triggers Helpdesk tickets, webhooks, and alerts, and streams history into time-series databases."
          >
            <defs>
              <marker
                id="itArrow" viewBox="0 0 10 10" refX="9" refY="5"
                markerWidth="6" markerHeight="6" orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" class="dg-arrow" />
              </marker>
            </defs>

            <!-- Physical Edge Source -->
            <rect x="4" y="32" width="124" height="58" rx="6" class="dg-box" />
            <text x="66" y="54" text-anchor="middle" class="dg-title">Physical devices</text>
            <text x="66" y="70" text-anchor="middle" class="dg-sub">routers, power, doors</text>

            <line x1="128" y1="61" x2="168" y2="92" class="dg-line" marker-end="url(#itArrow)" />

            <!-- Cloud SaaS Source -->
            <rect x="4" y="122" width="124" height="58" rx="6" class="dg-box" />
            <text x="66" y="144" text-anchor="middle" class="dg-title">SaaS & clouds</text>
            <text x="66" y="160" text-anchor="middle" class="dg-sub">CRM, ticketing, energy</text>

            <line x1="128" y1="151" x2="168" y2="122" class="dg-line" marker-end="url(#itArrow)" />

            <!-- The Unified Bus -->
            <rect x="174" y="26" width="134" height="162" rx="8" class="dg-box dg-box-bus" />
            <text x="241" y="96" text-anchor="middle" class="dg-title">NATS JetStream</text>
            <text x="241" y="114" text-anchor="middle" class="dg-title">+ Rule-Router</text>
            <text x="241" y="132" text-anchor="middle" class="dg-sub">events and rules</text>

            <!-- Live State in Browser -->
            <line x1="308" y1="52" x2="336" y2="52" class="dg-line" marker-end="url(#itArrow)" />
            <rect x="340" y="30" width="186" height="46" rx="6" class="dg-box dg-box-platform" />
            <text x="433" y="51" text-anchor="middle" class="dg-title">Console + KV twin</text>
            <text x="433" y="66" text-anchor="middle" class="dg-sub">live state in the browser</text>

            <!-- Automated Actions & Dispatches -->
            <line x1="308" y1="107" x2="336" y2="107" class="dg-line" marker-end="url(#itArrow)" />
            <rect x="340" y="85" width="186" height="46" rx="6" class="dg-box" />
            <text x="433" y="105" text-anchor="middle" class="dg-title">Automated actions</text>
            <text x="433" y="120" text-anchor="middle" class="dg-sub">Helpdesk tickets, webhooks, alerts</text>

            <!-- History: Customer Stack -->
            <line x1="308" y1="163" x2="336" y2="163" class="dg-line" marker-end="url(#itArrow)" />
            <rect x="340" y="140" width="104" height="46" rx="6" class="dg-box dg-box-byo" />
            <text x="392" y="161" text-anchor="middle" class="dg-title">Telegraf</text>
            <text x="392" y="176" text-anchor="middle" class="dg-sub">consumer</text>

            <line x1="444" y1="163" x2="468" y2="163" class="dg-line" marker-end="url(#itArrow)" />
            <rect x="472" y="140" width="112" height="46" rx="6" class="dg-box dg-box-byo" />
            <text x="528" y="161" text-anchor="middle" class="dg-title">Your TSDB</text>
            <text x="528" y="176" text-anchor="middle" class="dg-sub">VictoriaMetrics</text>

            <line x1="584" y1="163" x2="608" y2="163" class="dg-line" marker-end="url(#itArrow)" />
            <rect x="612" y="140" width="124" height="46" rx="6" class="dg-box dg-box-byo" />
            <text x="674" y="161" text-anchor="middle" class="dg-title">Grafana / Perses</text>
            <text x="674" y="176" text-anchor="middle" class="dg-sub">history and trends</text>
          </svg>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(path, index) in dataPaths"
            :key="`path-${index}`"
            class="p-6 rounded-lg"
            :style="{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }"
          >
            <h3 class="font-semibold mb-2" :style="{ color: 'var(--color-content-primary)' }">
              {{ path.title }}
            </h3>
            <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
              {{ path.body }}
            </p>
          </div>
        </div>

        <!--
          One block rather than one per card: at three columns a card is about 200px
          of text width, narrower than any command worth showing. The comments map
          1:1 to the three cards above.
        -->
        <div
          class="rounded-lg p-5 overflow-x-auto mt-8"
          :style="{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }"
        >
          <pre class="font-mono text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--color-content-primary)' }"><code># scrape it: rule-router's metrics listener, :2112 by default
scrape_configs:
  - job_name: rule-router
    static_configs:
      - targets: ['site-a:2112']

# stream it: every badge tap and its decision, live off the bus
$ nats sub 'acc.*.*.*.evt.tap'
[#1] acc.hq.door.lobby-main.evt.tap {"user":"Alice Example","allow":true,"reason":"allow_grant"}

# act on it: a rule turns a held-open door into a Helpdesk ticket
$ nats sub 'helpdesk.tickets.create'
[#1] helpdesk.tickets.create {"title":"Door held open: lobby-main","priority":"high","thing_code":"lobby-main","dedupe_key":"lobby-main-held"}

# query it: current state of one door, straight from KV
$ stone kv get ACC_STATUS portal.lobby-main
{"code":"lobby-main","location":"hq","door":"closed","posture":"secure","held":false}</code></pre>
        </div>

        <p class="mt-8 text-sm max-w-3xl" :style="{ color: 'var(--color-content-secondary)' }">
          We don't build the time-series database and we don't build the dashboard. Prometheus,
          VictoriaMetrics, Grafana, and Perses already do those jobs well, and our job is to make sure
          yours works.
        </p>
      </div>
    </section>

    <!--
      The vendor-cloud section. The hero argues against the appliance with a
      vendor cloud behind it, so this states the position precisely: against
      silos, not against clouds. Scoped to shipped behavior: the gateway takes
      webhooks, the scheduler polls APIs, and nats-auth-manager refreshes tokens
      into the tenant's own KV. Categories only until a recipe ships.
    -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div class="max-w-3xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            Keep the vendor clouds. Lose the silos.
          </h2>
          <p class="leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            Routers, energy monitors, cameras, access controllers, and business SaaS platforms (CRMs, ERPs, ticketing)
            each come with their own dashboard and their own API. The automation layer polls those APIs on a schedule and
            receives their webhooks, so their events land on the same bus as your physical equipment, and one rule can
            act on both. API tokens refresh themselves and are stored in your organization's own account on the bus,
            readable only by the identities you give access to.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(integration, index) in cloudIntegrations"
            :key="`cloud-${index}`"
            class="p-5 rounded-lg"
            :style="{ backgroundColor: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }"
          >
            <h3 class="font-semibold mb-2" :style="{ color: 'var(--color-content-primary)' }">
              {{ integration.title }}
            </h3>
            <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
              {{ integration.body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--
      The governance claim. True only when each integration runs as a Thing with
      its own NATS user, which is how the tenant bundle and recipes provision it:
      deactivating the Thing revokes that user. It says "access to your bus" and
      no more, because the vendor-side API secret stays valid until someone
      rotates it at the vendor. Do not widen it to "the integration stops".
    -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div class="max-w-3xl">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            Every integration has an owner and an off switch
          </h2>
          <p class="leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            Each connection to an outside service runs under its own registered identity, with a
            credential limited to the subjects it needs. It is listed in the inventory beside the
            doors and cameras, and changes to it appear in the activity feed. Deactivating it revokes
            its access to your bus at once.
          </p>
        </div>
      </div>
    </section>

    <!-- Runs where you put it -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
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
    <section class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div class="max-w-3xl">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            Decisions happen on site, not on a network round trip
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
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
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
    <section class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div
          class="max-w-3xl mx-auto text-center p-8 rounded-lg"
          :style="{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }"
        >
          <h2 class="text-2xl sm:text-3xl font-bold mb-3" :style="{ color: 'var(--color-content-primary)' }">
            Look at a running system
          </h2>
          <p class="leading-relaxed mb-4" :style="{ color: 'var(--color-content-secondary)' }">
            We'll give you a read-only login to a live reference environment rather than a slide deck.
          </p>
          <p class="leading-relaxed mb-6" :style="{ color: 'var(--color-content-secondary)' }">
            A hosted account is <strong :style="{ color: 'var(--color-content-primary)' }">$149/month</strong>
            for every application across up to three sites, and $49/month for each site after that,
            with no per-door or per-device licensing fees to penalize adding equipment. The source is
            open and the binaries are yours, so nothing you build on top of it depends on us still being
            here in five years.
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
            thousands of events a month, so you can see it with realistic traffic before you have traffic
            of your own.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BuiltOnTeaser from '../components/home/BuiltOnTeaser.vue';

/**
 * For IT Teams — audience page for the IT-literate end customer.
 *
 * Lead claim: the appliance contrast. The systems this team inherited should
 * behave like the ones it chose.
 *
 * Do not reframe this page around "building data" again. BMS and smart-building
 * language files it under a facilities budget, and IT does not buy a BMS while
 * facilities does not buy a message bus. Doors and badges stay as examples
 * because they are concrete and they differentiate; they are not the category.
 * Kiosk and Helpdesk are on this page's strip precisely because neither is a
 * building system, and both are things an IT team would own.
 *
 * Accuracy note: rule-router exposes a Prometheus endpoint with a documented metric
 * catalogue (see its docs/12-observability.md). The platform console does NOT expose
 * one — do not claim otherwise here. Business telemetry reaches a TSDB by subscribing
 * to NATS subjects and forwarding, which is what dataPaths describes.
 *
 * The snippet block shows real surfaces, not pseudocode: :2112 is rule-router's default
 * metrics listener, acc.{location}.{type}.{thing}.evt.tap is what access controllers
 * publish per tap, and ACC_STATUS holds one portal.{code} key per door (both from
 * access-control docs/protocol.md; the sample values match its demo rules).
 * helpdesk.tickets.create and its payload fields are Helpdesk's ingest subject (its
 * docs/protocol.md). `stone kv get <bucket> <key>` is the CLI's documented KV read.
 * Keep them runnable, and keep the ticket example on Helpdesk rather than a
 * third-party desk: it is our own product and the integration actually ships.
 * A snippet a reader cannot paste is worse than no snippet. An earlier version showed
 * `access.decision.>` and a `twins` bucket, neither of which exists.
 *
 * "No inbound connections from the internet", not "nothing listens": rule-router
 * listens on :2112 (the snippet above scrapes it) and the agent on 127.0.0.1:9100.
 * A webhook receiver DOES need a public endpoint, so run the gateway that takes
 * SaaS webhooks beside the platform, not on the site network, or this claim breaks.
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
const cloudIntegrations = [
  {
    title: 'Cellular and router clouds',
    body: 'The management clouds behind your cellular routers and gateways. Link and failover events arrive by webhook where the vendor sends them, or by a scheduled poll of its API where it does not.',
  },
  {
    title: 'Energy monitoring portals',
    body: 'Solar, battery, and power-monitoring portals. Readings land in the live device state beside your own equipment, so one rule can watch a battery level and a door together.',
  },
  {
    title: 'Business SaaS',
    body: 'CRMs, ERPs, and ticketing systems. Their webhooks become events your rules can act on, and rules can call their APIs back, with retries, from the same YAML.',
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
    title: 'No inbound connections from the internet',
    body: 'Devices and sites initiate every connection to the platform outbound. No port forwarding, no inbound firewall exceptions, and NAT traversal handles LTE, 5G, and restrictive corporate networks. Local listeners, such as a metrics endpoint, stay on your own network.',
  },
  {
    title: 'Self-host or hosted, same binary',
    body: 'Run it yourself under an open-source license, or let us run it. The migration path between the two is the same binary.',
  },
];
</script>
