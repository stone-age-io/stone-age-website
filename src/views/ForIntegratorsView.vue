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
              href="mailto:info@stone-age.io?subject=Demo%20access%20—%20integrator"
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

    <!-- The two structural arguments -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
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
            language model can be trusted near a door. The answer is structural, not a promise:
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            v-for="(guard, index) in guardrails"
            :key="`guard-${index}`"
            class="p-5 rounded-lg"
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
            authority. A compromised device in one customer's building has no path into another's. On a
            dedicated instance you also hold your own signing keys, your own database, and your own
            encryption key, so the isolation boundary is the machine rather than the correctness of our rules.
          </p>
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

    <!-- Pricing + CTA -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div
          class="max-w-3xl mx-auto text-center p-8 rounded-lg"
          :style="{ backgroundColor: 'var(--color-background-alt)', border: '1px solid var(--color-border)' }"
        >
          <h2 class="text-2xl sm:text-3xl font-bold mb-3" :style="{ color: 'var(--color-content-primary)' }">
            Dedicated instance, from $499/month
          </h2>
          <p class="leading-relaxed mb-6" :style="{ color: 'var(--color-content-secondary)' }">
            Your own instance, your own branding, your own keys, unlimited customer organizations.
            Self-hosting is free and open source if you'd rather run it yourself, and the migration path
            between the two is the same binary.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@stone-age.io?subject=Dedicated%20instance%20—%20integrator"
              class="btn btn-primary inline-flex items-center justify-center px-6 py-3 rounded-md font-medium"
            >Start a conversation</a>
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

const guardrails = [
  {
    title: 'It proposes a diff, it does not press the button',
    body: 'The assistant edits YAML in a working copy. A human reads the diff and runs apply. Nothing reaches a live system between those two steps.',
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
    body: 'Access rules are evaluated server-side on every request. What an identity may do does not depend on how carefully anyone worded an instruction.',
  },
];

const isolationPoints = [
  {
    title: 'Per-customer NATS account',
    body: 'Signed credentials scoped to one organization. Cross-tenant reach is unrepresentable rather than merely filtered out.',
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
