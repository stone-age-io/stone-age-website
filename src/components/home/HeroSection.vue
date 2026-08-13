<template>
  <section 
    class="py-16 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: 'url(/images/stone-field.jpg)' }"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>
    
    <div class="container relative z-10">
      <div class="max-w-4xl">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Every site you manage, <br class="hidden md:block" />
          on one screen.
        </h1>

        <p class="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200 font-light leading-relaxed max-w-3xl">
          One console and one automation layer across the equipment your sites already run: door
          controllers, cameras, kiosks, sensors, machines, and anything else that speaks HTTP,
          MQTT, or NATS. Nothing gets ripped out to make room for us.
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
