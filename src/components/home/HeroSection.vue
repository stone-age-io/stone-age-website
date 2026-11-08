<template>
  <section 
    class="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: 'url(/images/stone-field.jpg)' }"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>
    
    <div class="container relative z-10">
      <div class="max-w-4xl">
        <!-- "Simple." stays whole so it never splits off mid-word; the first
             sentence is too long to hold on one line on a phone, so it wraps
             normally. Keep the span on the same line as the text before it:
             Vue drops whitespace between tags when it holds a newline. -->
        <!-- Line height rides on each size (/tight): text-5xl and text-6xl set
             line-height 1 themselves, which overrode a separate leading-* and
             let the q of "equipment" touch the k of "talk". -->
        <h1 class="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight lg:text-6xl/tight font-bold mb-6 text-white text-balance">
          Make your equipment and your apps talk. <span class="whitespace-nowrap">Simple.</span>
        </h1>

        <p class="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed max-w-3xl text-pretty">
          One open-source platform for everything from the door controllers, sensors
          and machines on your sites to the cloud services you log into separately today. Nothing
          gets ripped out to make room for us.
        </p>

        <p class="text-xs text-gray-400 uppercase tracking-widest mb-4 font-semibold">
          Where do you fit?
        </p>
        <div class="flex flex-col sm:flex-row flex-wrap gap-4">
          <a
            href="/for-integrators"
            class="btn w-full sm:w-auto px-8 py-3.5 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            style="background-color: white; color: var(--color-primary);"
            aria-label="For security and technology integrators"
          >
            I run an integration business
          </a>
          <a
            href="/for-it-teams"
            class="btn btn-outlined w-full sm:w-auto px-8 py-3.5 text-lg"
            style="border-color: rgba(255,255,255,0.3); color: white; background-color: rgba(255,255,255,0.05);"
            aria-label="For IT and operations teams"
          >
            I run IT or operations for a facility
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Hero section.
 *
 * Leads with concrete nouns rather than "control plane" or "integration bus".
 * Several real prospects could not tell what the product was for when the
 * abstraction came first; the generality is something a buyer discovers after
 * the first concrete thing, not before it.
 *
 * The equipment list is deliberately an example rather than a definition. This
 * is the platform site, not the access-control site, so naming door controllers
 * first and machines and sensors alongside them keeps the range visible. Do not
 * narrow this to buildings.
 *
 * The headline says what the product does, with a verb, and names both halves:
 * the equipment, and the apps it talks to. That combination is the part nobody
 * else sells: an iPaaS cannot open a door and an access-control vendor cannot
 * read a telematics feed. Do not merge the two into one abstract noun
 * ("everything you run"); that is the abstraction problem above again. Keep the
 * second "your": "your equipment and apps" reads as the equipment's own
 * companion apps, not two separate camps.
 *
 * It replaced "Every site. Every vendor cloud. One screen." "One screen" sold a
 * dashboard, the oldest pitch in the category, when the difference is the
 * automation across the boundary; and "vendor cloud" was a term a buyer had to
 * translate.
 *
 * "Simple." is the pitch, in the grug-brained voice the Stone Age name points
 * at. No "finally": point-to-point integrations already exist, so claiming to
 * be first is false. What they lack is simplicity, so say that instead.
 * Imperative "Make", not "Making": the reader does the connecting.
 *
 * The subhead is a range ("everything from ... to ..."), not two lists. It used
 * to list five kinds of equipment and then fleet, drone and energy platforms,
 * and a list reads as the whole scope: three verticals under "every vendor
 * cloud" narrowed the headline it sat beneath. The equipment end keeps concrete
 * nouns, because that is where a first-time reader needs them; the cloud end is
 * described by the silo ("you log into separately today") rather than by
 * industry. The verticals live on the audience pages, which have room to say
 * what the automation layer does with them. A vendor name (Samsara, Victron,
 * Skydio) belongs on this site only once a recipe for it ships. The protocol
 * list moved out of this sentence; the "What it is" section below carries it.
 *
 * The subhead opens with "One open-source platform", not "One console and one
 * automation layer". Naming parts made the product sound smaller than it is:
 * it is a registry, a message bus and an overlay network as well, and a list of
 * those does not fit a sentence a first-time reader skims. "Platform" is broad
 * enough to stay true; "open-source" is the difference the hero otherwise never
 * mentions. The architecture belongs to "What it is" below.
 *
 * The two buttons are the audience split. Both revenue-bearing buyers have a
 * page written for them, and this is the only prominent route to either one.
 */
</script>

<style scoped>
/* Optional: Add a subtle text shadow to improve readability against complex backgrounds */
h1, p {
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
</style>
