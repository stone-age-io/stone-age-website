<template>
  <section 
    class="py-16 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: 'url(/images/stone-field.jpg)' }"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>
    
    <div class="container relative z-10">
      <div class="max-w-4xl">
        <!-- Each beat is unbreakable, so a line can only end at a period. A
             fixed <br> stranded a single word once the headline grew. Keep the
             spans on one line: Vue drops whitespace between tags when it holds
             a newline, which leaves no space to break at. -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          <span class="whitespace-nowrap">Every site.</span> <span class="whitespace-nowrap">Every vendor cloud.</span> <span class="whitespace-nowrap">One screen.</span>
        </h1>

        <p class="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200 font-light leading-relaxed max-w-3xl text-pretty">
          One console and one automation layer for everything from the door controllers, sensors
          and machines on your sites to the cloud platforms you log into separately today. Nothing
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
 * The headline is three beats and names both halves: the sites, and the vendor
 * clouds the automation layer pulls in beside them. "One screen", not "one
 * place": a screen is a promise a reader can check by opening the console.
 * When it said only "every site you manage", the SaaS side read as an
 * afterthought in the subhead, and that combination is the part nobody else
 * sells: an iPaaS cannot open a door and an access-control vendor cannot read a
 * telematics feed. Do not merge the two into one abstract noun ("every system
 * you run"); that is the abstraction problem above again. "Vendor cloud" is the
 * IT page's term too ("Keep the vendor clouds. Lose the silos."), so the two
 * pages say it the same way.
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
