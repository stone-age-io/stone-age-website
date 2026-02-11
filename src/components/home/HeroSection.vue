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
          Your IoT Infrastructure <br class="hidden md:block" />
          Made Simple.
        </h1>
        
        <p class="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed max-w-3xl">
          Securely connect, manage, and automate your edge without the cloud lock-in.
	  Stone-Age.io orchestrates professional messaging, mesh networking, and identity management into a unified framework.
        </p>

        <div class="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
          <button 
            @click="scrollToSection('pricing')" 
            class="btn w-full sm:w-auto px-8 py-3.5 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5" 
            style="background-color: white; color: var(--color-primary);"
            aria-label="Get Started with Stone-Age.io"
          >
            Get Started
          </button>
          <a 
            href="https://github.com/stone-age-io/platform" 
            class="btn btn-outlined w-full sm:w-auto px-8 py-3.5 text-lg" 
            style="border-color: rgba(255,255,255,0.3); color: white; background-color: rgba(255,255,255,0.05);"
            aria-label="View Stone-Age.io on GitHub"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i class="pi pi-github mr-2 text-xl"></i>
            View on Github
          </a>
        </div>

        <!-- Tech Stack Validation (Social Proof of Architecture) -->
        <div class="border-t border-white/10 pt-8">
          <p class="text-xs text-gray-400 uppercase tracking-widest mb-4 font-semibold">
            Powered by Industry Standard Primitives
          </p>
          <div class="flex flex-wrap gap-x-8 gap-y-4 text-gray-300 font-mono text-sm opacity-80">
            <div class="flex items-center">
              <i class="pi pi-share-alt mr-2 text-green-400"></i> NATS.io Messaging
            </div>
            <div class="flex items-center">
              <i class="pi pi-shield mr-2 text-blue-400"></i> Nebula Mesh VPN
            </div>
            <div class="flex items-center">
              <i class="pi pi-database mr-2 text-amber-400"></i> PocketBase Backend
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Hero section component for the landing page
 * Emphasizes the platform as a "Control Plane" for MSPs and SIs
 * Highlights single-binary simplicity and the "Powered By" stack clearly
 */

/**
 * Scrolls to the specified section with smooth scrolling
 * @param {string} sectionId - The ID of the section to scroll to
 */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Add a small delay to ensure any UI updates finish first
    setTimeout(() => {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 100);
  }
};
</script>

<style scoped>
/* Optional: Add a subtle text shadow to improve readability against complex backgrounds */
h1, p {
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
</style>
