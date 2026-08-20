<template>
  <div>
    <!-- Hero -->
    <section class="py-16 sm:py-20 md:py-24" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-wide mb-4" :style="{ color: 'var(--color-primary)' }">
            For security integrators
          </p>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" :style="{ color: 'var(--color-content-primary)' }">
            The platform you'd otherwise have to build yourself.
          </h1>
          <p class="text-lg sm:text-xl leading-relaxed mb-8" :style="{ color: 'var(--color-content-secondary)' }">
            Multi-tenant identity, an event bus, an encrypted mesh, and a service desk, running on
            hardware you control, under your brand, with your customers as organizations. You keep the
            customer relationship and the recurring revenue.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@stone-age.io?subject=Demo%20access%20for%20integrators"
              class="btn btn-primary inline-flex items-center justify-center px-6 py-3 rounded-md font-medium"
            >Get demo access</a>
            <a
              href="https://github.com/stone-age-io"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium border"
              :style="{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }"
            >Read the source</a>
          </div>
        </div>
      </div>
    </section>

    <!--
      Claim two, and per Sales Messaging it is the one that converts: an integrator
      can start with the customers they already have. Deliberately scoped to what
      the gateway and the bus actually do (webhook in, API call out, cron poll,
      native MQTT). It does NOT claim we administer another vendor's panel or take
      over its authorization, because we do not. Keep it that way.
    -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div class="max-w-3xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            Start with the customers you already have
          </h2>
          <p class="leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            Their installed base is the asset, not the obstacle. The automation layer speaks HTTP in
            both directions and MQTT natively, so systems already running in a customer's buildings can
            put their events on the bus without new hardware. You get one screen across their sites now,
            and replacing a panel becomes a decision you make later, per door, instead of a precondition
            for the first invoice.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in bridgingPoints"
            :key="`bridge-${index}`"
            class="p-5 rounded-lg"
            :style="{ backgroundColor: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }"
          >
            <h3 class="font-semibold mb-2" :style="{ color: 'var(--color-content-primary)' }">
              {{ item.title }}
            </h3>
            <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
              {{ item.body }}
            </p>
          </div>
        </div>

        <p class="max-w-3xl mt-6 leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
          Where you do install new hardware, the access control application drives OSDP readers and GPIO
          or I2C lock hardware directly, so a retrofit and a new build run on the same stack.
        </p>
      </div>
    </section>

    <!-- The two structural arguments -->
    <section class="section pt-0" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, index) in structuralArguments"
            :key="`arg-${index}`"
            class="p-6 rounded-lg border"
            :style="{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-alt)' }"
          >
            <h2 class="text-xl sm:text-2xl font-bold mb-3" :style="{ color: 'var(--color-content-primary)' }">
              {{ item.title }}
            </h2>
            <p class="leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
              {{ item.body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Config in version control -->
    <section class="section pt-0" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div class="max-w-3xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            Site config lives in version control
          </h2>
          <p class="leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            Your margin is labor. Fifty sites configured by hand means no diff, no rollback, and no
            record of who changed what. The <code class="font-mono text-sm">stone</code> CLI pulls every
            tenant resource into a directory of YAML, so a site is a commit: reviewable, reproducible,
            and rolled out the same way twice.
          </p>
        </div>

        <div
          class="rounded-lg p-5 overflow-x-auto mb-6"
          :style="{ backgroundColor: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }"
        >
          <pre class="font-mono text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--color-content-primary)' }"><code>stone pull --set-workspace .     # every thing, location, type → YAML
git diff                         # review the change like any other code
stone apply                      # idempotent, batched, performs no deletes</code></pre>
        </div>

        <ul class="space-y-3 max-w-3xl">
          <li v-for="(point, index) in iacPoints" :key="`iac-${index}`" class="flex items-start">
            <span class="mr-3 mt-1 flex-shrink-0" :style="{ color: 'var(--color-primary)' }">&#10003;</span>
            <span :style="{ color: 'var(--color-content-secondary)' }">{{ point }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Assistants, boundary first -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div class="max-w-3xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            Point an assistant at it, safely, with your own model
          </h2>
          <p class="leading-relaxed mb-4" :style="{ color: 'var(--color-content-secondary)' }">
            The CLI documents its own surface for AI assistants, so provisioning a site can be a
            conversation instead of an afternoon. The obvious question in this trade is whether a
            language model can be trusted near a door. The answer is a short list of boundaries you
            can check yourself, not a promise:
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            v-for="(guard, index) in guardrails"
            :key="`guard-${index}`"
            class="p-5 rounded-lg"
            :class="guard.span ? 'md:col-span-2' : ''"
            :style="{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }"
          >
            <h3 class="font-semibold mb-2" :style="{ color: 'var(--color-content-primary)' }">
              {{ guard.title }}
            </h3>
            <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
              {{ guard.body }}
            </p>
          </div>
        </div>

        <p class="max-w-3xl leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
          And the model is yours. Assistants that route through OpenRouter or run locally mean you pick
          the model, or keep inference inside your own network entirely. Same principle as the rest of
          the stack: bring your own dashboard, bring your own model, own your infrastructure.
        </p>
      </div>
    </section>

    <!-- Isolation -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div class="max-w-3xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            Your customers are isolated by cryptography, not by a database column
          </h2>
          <p class="leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            Each customer organization gets its own NATS account and its own Nebula certificate
            authority. Accounts start isolated, so absent a grant you created, a compromised device in
            one customer's building has no path into another's. Where you do want traffic to cross, it is
            an export and a matching import you can point at: a managed organization exports its
            application events into your own account, remapped under a prefix carrying the customer's
            identity in a signed token rather than in a payload. On a dedicated instance you also hold
            your own signing keys, your own database, and your own encryption key, so the isolation
            boundary is the machine rather than the correctness of our rules.
          </p>
        </div>

        <!--
          Tenancy diagram. The claim in the heading is the one a technical buyer will
          not take on faith, so the picture shows the two per-customer boundaries by
          name and strikes out the path a reader is already imagining.

          The strike means "not by default", not "impossible": accounts start isolated,
          and traffic crosses only where an export and a matching import exist. Do not
          restore an absolute label here. Managed organizations use exactly that
          mechanism to export their app events into the operator hub account, so an
          absolute claim would contradict how Helpdesk receives tickets.
        -->
        <div class="dg-scroll mb-10">
          <svg
            class="dg"
            viewBox="0 0 720 234"
            role="img"
            aria-label="Your dedicated instance holds each customer in its own organization, with its own NATS account and its own Nebula certificate authority. No path exists between two customers unless you grant one."
          >
            <rect x="2" y="2" width="716" height="228" rx="10" class="dg-box-instance" stroke-width="1.5" />
            <text x="20" y="28" class="dg-title">Your dedicated instance</text>
            <text x="20" y="46" class="dg-sub">your signing keys, your database, your encryption key</text>

            <!-- Customer A -->
            <rect x="20" y="62" width="210" height="96" rx="8" class="dg-box-org" stroke-width="1.5" />
            <text x="36" y="88" class="dg-title">Customer A</text>
            <circle cx="42" cy="110" r="4" class="dg-dot-nats" />
            <text x="54" y="114" class="dg-sub">own NATS account</text>
            <circle cx="42" cy="134" r="4" class="dg-dot-nebula" />
            <text x="54" y="138" class="dg-sub">own Nebula CA</text>

            <!-- Customer B -->
            <rect x="255" y="62" width="210" height="96" rx="8" class="dg-box-org" stroke-width="1.5" />
            <text x="271" y="88" class="dg-title">Customer B</text>
            <circle cx="277" cy="110" r="4" class="dg-dot-nats" />
            <text x="289" y="114" class="dg-sub">own NATS account</text>
            <circle cx="277" cy="134" r="4" class="dg-dot-nebula" />
            <text x="289" y="138" class="dg-sub">own Nebula CA</text>

            <!-- Customer C -->
            <rect x="490" y="62" width="210" height="96" rx="8" class="dg-box-org" stroke-width="1.5" />
            <text x="506" y="88" class="dg-title">Customer C</text>
            <circle cx="512" cy="110" r="4" class="dg-dot-nats" />
            <text x="524" y="114" class="dg-sub">own NATS account</text>
            <circle cx="512" cy="134" r="4" class="dg-dot-nebula" />
            <text x="524" y="138" class="dg-sub">own Nebula CA</text>

            <!-- The path a reader assumes exists -->
            <path d="M 125 158 V 192 H 360 V 158" class="dg-blocked" />
            <circle cx="242" cy="192" r="11" class="dg-x-bg" />
            <line x1="235" y1="185" x2="249" y2="199" class="dg-x" />
            <line x1="249" y1="185" x2="235" y2="199" class="dg-x" />
            <text x="242" y="218" text-anchor="middle" class="dg-note">no path unless you grant one</text>

            <text x="700" y="218" text-anchor="end" class="dg-sub">one account and one CA per customer, however many you add</text>
          </svg>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(item, index) in isolationPoints" :key="`iso-${index}`">
            <h3 class="font-semibold mb-2" :style="{ color: 'var(--color-content-primary)' }">
              {{ item.title }}
            </h3>
            <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
              {{ item.body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service desk -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div class="max-w-3xl">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            A service desk that already knows about the equipment
          </h2>
          <p class="leading-relaxed mb-6" :style="{ color: 'var(--color-content-secondary)' }">
            Helpdesk runs on the same stack: a staff app, a customer-facing portal under your logo,
            visit dispatch, and a billable time ledger. Devices and automation open their own tickets
            over the bus, and the customer they belong to is read from a signed subject rather than a
            payload, so a ticket's origin can't be spoofed. Field work, projects, and hours roll up to
            the same ledger you invoice from.
          </p>
          <a href="/helpdesk" class="font-medium underline hover:no-underline" :style="{ color: 'var(--color-primary)' }">
            See how Helpdesk works
          </a>
        </div>
      </div>
    </section>

    <!-- What it costs and what you keep -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div class="max-w-3xl mb-8">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4" :style="{ color: 'var(--color-content-primary)' }">
            What it costs, and what you keep
          </h2>
          <p class="leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            A dedicated instance is <strong>$499/month and includes ten customer organizations</strong>.
            Each organization after that is <strong>$49/month</strong>, counted from the platform. You set
            your own price to your own customers. At $149 each, here is the arithmetic you were going to
            do anyway.
          </p>
        </div>

        <div class="max-w-3xl overflow-x-auto rounded-lg" :style="{ border: '1px solid var(--color-border)' }">
          <table class="w-full text-sm">
            <thead>
              <tr :style="{ backgroundColor: 'var(--color-background-alt)' }">
                <th
                  v-for="(heading, index) in marginHeadings"
                  :key="`mh-${index}`"
                  class="text-left font-semibold px-4 py-3"
                  :style="{ color: 'var(--color-content-primary)' }"
                >{{ heading }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in marginRows"
                :key="`mr-${index}`"
                :style="{ borderTop: '1px solid var(--color-border)' }"
              >
                <td class="px-4 py-3" :style="{ color: 'var(--color-content-secondary)' }">{{ row.orgs }}</td>
                <td class="px-4 py-3" :style="{ color: 'var(--color-content-secondary)' }">
                  {{ money(row.pay) }}
                  <!-- Fixed-width track, not a percentage of the cell: both columns
                       have to share one axis or the bars are not comparable. -->
                  <div class="bar-track">
                    <div class="bar bar-pay" :style="{ width: barWidth(row.pay) }"></div>
                  </div>
                </td>
                <td class="px-4 py-3" :style="{ color: 'var(--color-content-secondary)' }">
                  {{ money(row.collect) }}
                  <div class="bar-track">
                    <div class="bar bar-collect" :style="{ width: barWidth(row.collect) }"></div>
                  </div>
                </td>
                <td class="px-4 py-3 font-semibold" :style="{ color: 'var(--color-content-primary)' }">
                  {{ row.margin }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="max-w-3xl mt-6 leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
          The margin holds at every scale, which means you can build a plan on it. There is no tier to
          graduate into, no renegotiation at a threshold, and no per-door meter underneath it that makes
          one customer's building more expensive than another's.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="section pt-0" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div
          class="max-w-3xl mx-auto text-center p-8 rounded-lg"
          :style="{ backgroundColor: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }"
        >
          <h2 class="text-2xl sm:text-3xl font-bold mb-3" :style="{ color: 'var(--color-content-primary)' }">
            Start with a login, not a slide deck
          </h2>
          <p class="leading-relaxed mb-6" :style="{ color: 'var(--color-content-secondary)' }">
            We will give you read-only access to a live instance running every application, and walk
            through what your first thirty days would actually look like against the customers you
            already have.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@stone-age.io?subject=Dedicated%20instance%20for%20integrators"
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
            Demo access is a read-only login to a reference environment. Its traffic is generated on
            purpose: a few hundred users and tens of thousands of events a month, so you can see how
            it behaves under load before you have load of your own.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
/**
 * For Integrators — audience page for the Dedicated SKU buyer.
 *
 * Lead claim: "the platform you'd otherwise have to build yourself."
 * Supporting order is deliberate: ownership/durability first (the two arguments a
 * manufacturer-backed competitor cannot make), then labor savings, then AI with the
 * guardrails stated BEFORE the capability, then isolation, then the service desk.
 *
 * Every claim here is backed by shipped behavior. Do not add a capability claim to
 * this page that isn't demonstrable on the reference instance.
 */

// Scoped to shipped behavior: the rule engine's gateway is bidirectional HTTP,
// MQTT is native to the bus, and the scheduler covers pull-only APIs. Nothing here
// claims control of another vendor's access decisions.
const bridgingPoints = [
  {
    title: 'Webhooks in',
    body: 'A system that can post a webhook becomes events on your bus. The gateway verifies the signature, publishes to a subject you choose, and answers the sender immediately so nothing upstream waits on you.',
  },
  {
    title: 'API calls out',
    body: 'Rules call external APIs with retry and backoff, and a cron schedule polls anything that only offers a pull interface. Both directions, one YAML syntax, one binary.',
  },
  {
    title: 'MQTT and agents',
    body: 'Devices already speaking MQTT connect straight to the bus, and the edge agent covers the servers and gateways in the closet. Nothing has to be re-flashed to become visible.',
  },
];

const structuralArguments = [
  {
    title: 'Nobody can end-of-life you',
    body: 'You own the stack: source, data, and keys. There is no dealer program to be restructured, no line to be discontinued, and no renewal where the terms move because someone upstream changed strategy. If we disappeared tomorrow, the binaries you are running keep running.',
  },
  {
    title: 'Your customer stays your customer',
    body: 'Manufacturers increasingly sell direct against the channel that built them. Here the platform carries your brand, your portal, and your recurring revenue, and the customer relationship is yours by construction rather than by permission.',
  },
];

const iacPoints = [
  'Every thing, location, type, and schema pulls down as plain YAML, one file per record, diffable in any editor.',
  'apply is idempotent and performs no deletes, so a re-run is safe and a mistake stays recoverable.',
  'Typed flags for one-off changes: create a location, a thing type, or a device without opening a browser.',
  'The same CLI reads and writes NATS subjects and JetStream KV, so commissioning and troubleshooting are one tool.',
];

// Accuracy constraint, learned the hard way: `stone apply` has no confirmation
// prompt and no --yes flag. Its only flag is --workspace. An assistant holding a
// write credential can run it unattended, and any confirmation a reader has seen
// came from their agent harness asking to run a shell command, not from us. So do
// not restore the old "it proposes a diff, it does not press the button" card, and
// do not describe the review step as something the tooling enforces.
//
// What the tooling does enforce, and what these cards may therefore claim:
//   - apply creates and updates only; it never deletes absent records.
//   - entity delete and the destructive JetStream verbs prompt, and skipping the
//     prompt requires an explicit -y/--yes.
//   - auth login is interactive; the skill states an agent cannot supply credentials.
//   - a read-only role exists and can hold no write capability at all.
//   - collection rules are evaluated server-side on every request.
const guardrails = [
  {
    title: 'The change arrives as a diff',
    body: 'The assistant edits YAML in a git workspace, so what it proposes is reviewable before anything moves: git diff shows exactly which records would change. Running apply is a separate command, and how tightly you gate that is a policy you set in your own agent rather than one we set for you.',
  },
  {
    title: 'apply adds and updates, and never deletes',
    body: 'Re-running it is safe by design, so the worst case for a bad proposal is a record you correct rather than one you restore. Removing something is a different command, and that one asks before it acts; skipping the prompt takes an explicit flag.',
  },
  {
    title: 'Read-only by default',
    body: 'A read-only role exists for exactly this. An assistant can inspect inventory, subjects, and state without holding any write capability at all.',
  },
  {
    title: 'It cannot log itself in',
    body: 'Authentication is interactive by design. Credentials come from a person; an agent cannot mint its own session.',
  },
  {
    title: 'Enforced server-side on every request',
    body: 'Access rules are evaluated server-side on every request. What an identity may do does not depend on how carefully anyone worded an instruction, or on which agent is holding the credential.',
    span: true,
  },
];

// Channel margin at $149 per customer. $499 covers the first ten organizations,
// $49 each thereafter. Keep these in sync with the price sheet; the founder-facing
// business case carries the same table and the two must not drift.
const marginHeadings = ['Your customer orgs', 'You pay us', 'You collect at $149', 'Your margin'];

// Numbers, not strings, so the bars can be drawn from the same figures the table
// prints. barMax is the largest value in the set: both columns scale against it,
// which is what makes the gap between what you pay and what you collect readable.
const marginRows = [
  { orgs: '10', pay: 499, collect: 1490, margin: '66%' },
  { orgs: '25', pay: 1234, collect: 3725, margin: '67%' },
  { orgs: '50', pay: 2459, collect: 7450, margin: '67%' },
  { orgs: '100', pay: 4909, collect: 14900, margin: '67%' },
];

const barMax = Math.max(...marginRows.map((row) => row.collect));

const money = (amount) => `$${amount.toLocaleString('en-US')}`;

const barWidth = (amount) => `${(amount / barMax) * 100}%`;

const isolationPoints = [
  {
    title: 'Per-customer NATS account',
    body: 'Signed credentials scoped to one organization. Reach into another tenant is absent from the credential itself, so crossing accounts takes an export and a matching import you created, not a filter someone can misconfigure.',
  },
  {
    title: 'Per-customer Nebula CA',
    body: 'Each organization gets its own certificate authority for the overlay network, so network-level separation matches the tenancy model.',
  },
  {
    title: 'Your keys on a dedicated box',
    body: 'On a dedicated instance the signing keys, database, and encryption key are yours. The blast radius of a mistake stops at your own tenant.',
  },
];
</script>

<style scoped>
/* Diagram primitives live in assets/css/diagrams.css — two pages use them. */

/*
 * Margin bars. The track is a fixed width rather than a percentage of the table
 * cell, so the "you pay" and "you collect" columns share one axis and can be
 * compared across columns as well as down them.
 */
.bar-track {
  @apply mt-1.5 h-1.5 rounded-full;
  width: 96px;
  max-width: 100%;
  background-color: var(--color-border-primary);
}

.bar {
  @apply h-1.5 rounded-full;
  min-width: 3px;
}

.bar-pay {
  background-color: var(--color-content-secondary);
  opacity: 0.5;
}

.bar-collect {
  background-color: var(--color-primary-500);
}
</style>
