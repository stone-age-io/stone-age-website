<template>
  <div class="max-w-3xl mx-auto">
    <!--
      Two layouts, one set of claims. Landscape below reads left to right and
      wants 660px; portrait reads top to bottom and fits a phone at 1:1, which
      is the only way to keep the labels legible without a scrollbar. They are
      separate SVGs because SVG coordinates do not reflow, so when you change
      one, change the other: same boxes, same connectors, same words.

      The whole component is capped narrower than the cards below it (see the
      root element, not here: a max-width with auto margins on a flex child
      stops it stretching and it collapses to the 660px minimum). At the full
      container width the picture is over 500px tall, which pushes everything
      that responds to a lens off the bottom of the screen.
    -->
    <div class="hidden sm:block dg-scroll">
      <svg
        class="dg"
        viewBox="0 0 720 366"
        role="img"
        :aria-label="diagramLabel"
      >
        <defs>
          <marker
            id="sysArrow" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" class="dg-arrow" />
          </marker>
        </defs>

        <!--
          The site boundary and the bus are never dimmed. They are the stage
          rather than one of the paths, and a bus that faded while a lens was
          active would undercut the one claim every lens shares: everything
          here is a client of the same bus.
        -->
        <rect x="4" y="6" width="250" height="196" rx="8" class="dg-box-org" stroke-width="1.5" />
        <text x="18" y="28" class="dg-title">Site</text>
        <text x="18" y="192" class="dg-sub">dials out; nothing opens inbound</text>

        <!-- Edge: the things, and the leaf node they publish through -->
        <g :class="groupClass('provision', 'publish', 'react')">
          <rect x="18" y="44" width="110" height="36" rx="6" class="dg-box" />
          <text x="73" y="67" text-anchor="middle" class="dg-title">Door / reader</text>

          <rect x="18" y="88" width="110" height="36" rx="6" class="dg-box" />
          <text x="73" y="111" text-anchor="middle" class="dg-title">Sensor</text>

          <rect x="18" y="132" width="110" height="36" rx="6" class="dg-box" />
          <text x="73" y="155" text-anchor="middle" class="dg-title">Host agent</text>

          <line x1="128" y1="62" x2="144" y2="62" class="dg-line" marker-end="url(#sysArrow)" />
          <line x1="128" y1="106" x2="144" y2="106" class="dg-line" marker-end="url(#sysArrow)" />
          <line x1="128" y1="150" x2="144" y2="150" class="dg-line" marker-end="url(#sysArrow)" />

          <!-- Purple, because a leaf node is NATS: same bus, one hop out. -->
          <rect x="146" y="44" width="94" height="124" rx="6" class="dg-box dg-box-bus" />
          <text x="193" y="96" text-anchor="middle" class="dg-title">Leaf node</text>
          <text x="193" y="114" text-anchor="middle" class="dg-sub">works offline</text>
          <text x="193" y="130" text-anchor="middle" class="dg-sub">and resyncs</text>

          <line
            x1="240" y1="106" x2="274" y2="106" class="dg-line"
            marker-start="url(#sysArrow)" marker-end="url(#sysArrow)"
          />
        </g>

        <!-- The bus -->
        <rect x="276" y="6" width="116" height="248" rx="8" class="dg-box dg-box-bus" />
        <text x="334" y="118" text-anchor="middle" class="dg-title">NATS</text>
        <text x="334" y="136" text-anchor="middle" class="dg-sub">JetStream</text>
        <text x="334" y="152" text-anchor="middle" class="dg-sub">KV twin</text>

        <!-- Console -->
        <g :class="groupClass('publish', 'react')">
          <line
            x1="392" y1="37" x2="414" y2="37" class="dg-line"
            marker-start="url(#sysArrow)" marker-end="url(#sysArrow)"
          />
          <rect x="416" y="12" width="300" height="50" rx="6" class="dg-box dg-box-platform" />
          <text x="566" y="36" text-anchor="middle" class="dg-title">Console in your browser</text>
          <text x="566" y="52" text-anchor="middle" class="dg-sub">live state over WebSocket</text>
        </g>

        <!-- Rule-Router -->
        <g :class="groupClass('react')">
          <line
            x1="392" y1="99" x2="414" y2="99" class="dg-line"
            marker-start="url(#sysArrow)" marker-end="url(#sysArrow)"
          />
          <rect x="416" y="74" width="300" height="50" rx="6" class="dg-box dg-box-platform" />
          <text x="566" y="98" text-anchor="middle" class="dg-title">Rule-Router</text>
          <text x="566" y="114" text-anchor="middle" class="dg-sub">YAML rules, webhooks, cron</text>
        </g>

        <!-- Anything else holding a credential -->
        <g :class="groupClass('extend')">
          <line
            x1="392" y1="161" x2="414" y2="161" class="dg-line"
            marker-start="url(#sysArrow)" marker-end="url(#sysArrow)"
          />
          <rect x="416" y="136" width="300" height="50" rx="6" class="dg-box dg-box-byo" />
          <text x="566" y="160" text-anchor="middle" class="dg-title">Stream processors and your code</text>
          <text x="566" y="176" text-anchor="middle" class="dg-sub">eKuiper, Benthos, anything with a credential</text>
        </g>

        <!-- History. One box rather than the Telegraf, TSDB, and Grafana chain,
             which the IT teams page already draws in full. -->
        <g :class="groupClass('extend')">
          <line x1="392" y1="223" x2="414" y2="223" class="dg-line" marker-end="url(#sysArrow)" />
          <rect x="416" y="198" width="300" height="50" rx="6" class="dg-box dg-box-byo" />
          <text x="566" y="222" text-anchor="middle" class="dg-title">Telegraf and your TSDB</text>
          <text x="566" y="238" text-anchor="middle" class="dg-sub">history, dashboards, alerting</text>
        </g>

        <!--
          Control plane. Both connectors point away from it on purpose: the
          device and the site dial out and pull their own credentials, and the
          only thing the control plane writes on the bus is on the system
          account. An arrow from here into a tenant subject would be the one
          wrong claim this picture could make.
        -->
        <g :class="groupClass('provision')">
          <line x1="129" y1="206" x2="129" y2="286" class="dg-line-setup" marker-end="url(#sysArrow)" />
          <text x="140" y="240" class="dg-sub">pulls its own creds,</text>
          <text x="140" y="256" class="dg-sub">cert, and config</text>

          <rect x="4" y="288" width="250" height="70" rx="8" class="dg-box dg-box-platform" />
          <text x="18" y="314" class="dg-title">stone-age control plane</text>
          <text x="18" y="332" class="dg-sub">identity, inventory, provisioning</text>
          <text x="18" y="348" class="dg-sub">one binary, embedded console</text>

          <path d="M 254 322 H 334 V 256" class="dg-line-setup" marker-end="url(#sysArrow)" />
          <text x="344" y="318" class="dg-sub">system account only:</text>
          <text x="344" y="334" class="dg-sub">no tenant subjects</text>
        </g>
      </svg>
    </div>

    <!-- Portrait: the same system as a spine with its clients hanging off it. The
         canvas ends 2 units under the control plane box rather than 6: that margin
         is what puts the whole picture inside a phone screen once the sticky site
         header and these controls have taken their share. -->
    <div class="sm:hidden">
      <svg
        class="dg dg-portrait"
        viewBox="0 0 340 634"
        role="img"
        :aria-label="diagramLabel"
      >
        <defs>
          <marker
            id="sysArrowTall" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" class="dg-arrow" />
          </marker>
        </defs>

        <rect x="4" y="6" width="316" height="166" rx="8" class="dg-box-org" stroke-width="1.5" />
        <text x="16" y="26" class="dg-title">Site</text>
        <text x="16" y="162" class="dg-sub">dials out; nothing opens inbound</text>

        <g :class="groupClass('provision', 'publish', 'react')">
          <rect x="16" y="40" width="140" height="30" rx="6" class="dg-box" />
          <text x="86" y="60" text-anchor="middle" class="dg-title">Door / reader</text>

          <rect x="16" y="74" width="140" height="30" rx="6" class="dg-box" />
          <text x="86" y="94" text-anchor="middle" class="dg-title">Sensor</text>

          <rect x="16" y="108" width="140" height="30" rx="6" class="dg-box" />
          <text x="86" y="128" text-anchor="middle" class="dg-title">Host agent</text>

          <line x1="156" y1="55" x2="172" y2="55" class="dg-line" marker-end="url(#sysArrowTall)" />
          <line x1="156" y1="89" x2="172" y2="89" class="dg-line" marker-end="url(#sysArrowTall)" />
          <line x1="156" y1="123" x2="172" y2="123" class="dg-line" marker-end="url(#sysArrowTall)" />

          <rect x="176" y="40" width="128" height="98" rx="6" class="dg-box dg-box-bus" />
          <text x="240" y="78" text-anchor="middle" class="dg-title">Leaf node</text>
          <text x="240" y="96" text-anchor="middle" class="dg-sub">works offline</text>
          <text x="240" y="112" text-anchor="middle" class="dg-sub">and resyncs</text>

          <line
            x1="240" y1="140" x2="240" y2="196" class="dg-line"
            marker-start="url(#sysArrowTall)" marker-end="url(#sysArrowTall)"
          />
        </g>

        <rect x="4" y="198" width="316" height="58" rx="8" class="dg-box dg-box-bus" />
        <text x="162" y="224" text-anchor="middle" class="dg-title">NATS</text>
        <text x="162" y="242" text-anchor="middle" class="dg-sub">JetStream and KV twin</text>

        <!-- The bus continued: never dimmed, same as the box it comes out of. -->
        <path d="M 162 258 V 268 H 34 V 496" class="dg-line" />

        <g :class="groupClass('publish', 'react')">
          <line
            x1="34" y1="304" x2="72" y2="304" class="dg-line"
            marker-start="url(#sysArrowTall)" marker-end="url(#sysArrowTall)"
          />
          <rect x="76" y="278" width="244" height="52" rx="6" class="dg-box dg-box-platform" />
          <text x="198" y="302" text-anchor="middle" class="dg-title">Console in your browser</text>
          <text x="198" y="318" text-anchor="middle" class="dg-sub">live state over WebSocket</text>
        </g>

        <g :class="groupClass('react')">
          <line
            x1="34" y1="366" x2="72" y2="366" class="dg-line"
            marker-start="url(#sysArrowTall)" marker-end="url(#sysArrowTall)"
          />
          <rect x="76" y="340" width="244" height="52" rx="6" class="dg-box dg-box-platform" />
          <text x="198" y="364" text-anchor="middle" class="dg-title">Rule-Router</text>
          <text x="198" y="380" text-anchor="middle" class="dg-sub">YAML rules, webhooks, cron</text>
        </g>

        <g :class="groupClass('extend')">
          <line
            x1="34" y1="431" x2="72" y2="431" class="dg-line"
            marker-start="url(#sysArrowTall)" marker-end="url(#sysArrowTall)"
          />
          <rect x="76" y="402" width="244" height="58" rx="6" class="dg-box dg-box-byo" />
          <text x="198" y="424" text-anchor="middle" class="dg-title">Stream processors and your code</text>
          <text x="198" y="440" text-anchor="middle" class="dg-sub">eKuiper, Benthos, anything</text>
          <text x="198" y="454" text-anchor="middle" class="dg-sub">with a credential</text>
        </g>

        <g :class="groupClass('extend')">
          <line x1="34" y1="496" x2="72" y2="496" class="dg-line" marker-end="url(#sysArrowTall)" />
          <rect x="76" y="470" width="244" height="52" rx="6" class="dg-box dg-box-byo" />
          <text x="198" y="494" text-anchor="middle" class="dg-title">Telegraf and your TSDB</text>
          <text x="198" y="510" text-anchor="middle" class="dg-sub">history, dashboards, alerting</text>
        </g>

        <g :class="groupClass('provision')">
          <!-- Up the left margin to the bus, and up the right margin to the
               site: the two setup paths, kept out of everything else's way. -->
          <line x1="18" y1="560" x2="18" y2="258" class="dg-line-setup" marker-end="url(#sysArrowTall)" />
          <path d="M 320 90 H 330 V 558" class="dg-line-setup" marker-end="url(#sysArrowTall)" />

          <text x="26" y="538" class="dg-sub">system account only: no tenant subjects</text>
          <text x="324" y="554" text-anchor="end" class="dg-sub">the site pulls its own creds, cert, and config</text>

          <rect x="4" y="562" width="316" height="70" rx="8" class="dg-box dg-box-platform" />
          <text x="16" y="588" class="dg-title">stone-age control plane</text>
          <text x="16" y="606" class="dg-sub">identity, inventory, provisioning</text>
          <text x="16" y="622" class="dg-sub">one binary, embedded console</text>
        </g>
      </svg>
    </div>

    <!--
      The caption carries what a highlight cannot, and carries it as text, so the
      diagram never makes a claim by color alone.

      It sits below the picture at every size, including phones. It was above on
      mobile for a while, so the words explaining the job would land next to the
      button that picked it, but that cost a fifth of the picture: with the
      caption below, the whole portrait diagram fits one phone screen under the
      pinned controls. The status line in those controls already reports the
      click, so the reader is not waiting on this paragraph to know it worked.
    -->
    <p
      class="text-sm sm:text-base leading-relaxed mt-5 text-center"
      :style="{ color: 'var(--color-content-secondary)' }"
      aria-live="polite"
    >
      <span
        v-for="(part, index) in captionParts"
        :key="`caption-${index}`"
        :class="{ 'font-mono text-xs sm:text-sm': part.mono }"
      >{{ part.text }}</span>
    </p>
  </div>
</template>

<script setup>
/**
 * SystemDiagram — one picture of the platform, with four paths through it.
 *
 * This is the map that the component cards below it detail. It exists because
 * the home page used to explain the whole architecture in prose cards: the two
 * audience pages each got a diagram for the one claim they had to prove, and
 * the system itself was never drawn anywhere.
 *
 * The lenses highlight paths, not parts. Highlighting a box teaches nothing its
 * label does not already say; highlighting a path shows the same system doing a
 * different job, which is what a reader means by "how does this work".
 *
 * The buttons are not here. They live in the section's sticky bar, because the
 * whole explorer is taller than a screen and controls that scroll away leave a
 * reader unable to tell what is applied or what changed. This component takes
 * the selected lens as a prop and draws it.
 *
 * The load-bearing pair is Provision against Publish: the control plane hands
 * out identities and is then absent from the data path. That is documented
 * behavior (platform-docs architecture.md, "the Control Plane is a narrow
 * administrative NATS client, not a tenant-data participant"), it is the
 * difference between this and an appliance with a vendor cloud behind it, and it
 * is nearly impossible to state in prose without sounding like a boast. Two
 * clicks show it instead.
 *
 * Keep this in agreement with platform-docs: architecture.md sections 1 and 2
 * for the plane split, leaf-nodes.md section 2 for why the edge pulls its
 * config rather than having it pushed.
 */
import { computed } from 'vue';
import { DEFAULT_CAPTION, LENSES } from './systemLenses';

const props = defineProps({
  /** Id of the selected lens, or null for the whole picture. */
  lens: {
    type: String,
    default: null,
  },
});

const diagramLabel =
  'A site with a door reader, a sensor, and a host agent publishing to a local NATS ' +
  'leaf node, which dials out to the central NATS bus. The bus feeds the console in the browser, ' +
  'Rule-Router, your own stream processors and services, and Telegraf with your time-series ' +
  'database. The stone-age control plane sits to one side: devices and sites pull their ' +
  'credentials and configuration from it over HTTPS, and it writes only to the NATS system ' +
  'account.';

/**
 * A lens dims every group it does not name. With no lens active the diagram
 * renders untouched, which is also what a reader with JavaScript off gets.
 */
const groupClass = (...ids) => {
  if (!props.lens) return 'dg-group';
  return ids.includes(props.lens) ? 'dg-group dg-hot' : 'dg-group dg-dim';
};

// Backticks in a caption render monospace, matching how the rest of the site
// writes subjects and commands.
const captionParts = computed(() => {
  const text = props.lens
    ? LENSES.find((lens) => lens.id === props.lens).caption
    : DEFAULT_CAPTION;

  return text
    .split(/(`[^`]+`)/)
    .filter(Boolean)
    .map((chunk) =>
      chunk.startsWith('`')
        ? { mono: true, text: chunk.slice(1, -1) }
        : { mono: false, text: chunk }
    );
});
</script>
