<template>
  <div>
    <!-- Project hero -->
    <section class="py-16 sm:py-20 md:py-24" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div class="max-w-3xl">
          <a href="/built-on" class="inline-flex items-center text-sm mb-6 opacity-70 hover:opacity-100 transition-opacity" :style="{ color: 'var(--color-content-secondary)' }">
            <i class="pi pi-arrow-left mr-2 text-xs"></i>
            Built on Stone-Age
          </a>

          <div class="flex flex-wrap items-center gap-3 mb-4">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold" :style="{ color: 'var(--color-content-primary)' }">
              {{ project.name }}
            </h1>
            <span class="status-badge" :style="{ backgroundColor: project.status.color + '20', color: project.status.color }">
              {{ project.status.label }}
            </span>
          </div>

          <p class="text-lg sm:text-xl mb-8 leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
            {{ project.tagline }}
          </p>

          <div class="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              :href="project.github"
              class="btn btn-primary w-full sm:w-auto px-6 py-3"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`View ${project.name} on GitHub`"
            >
              <i class="pi pi-github mr-2"></i>
              View on GitHub
            </a>
            <a
              v-if="project.docs"
              :href="project.docs"
              class="btn btn-outlined w-full sm:w-auto px-6 py-3"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Read ${project.name} documentation`"
            >
              <i class="pi pi-file mr-2"></i>
              Documentation
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- What it is -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div class="max-w-3xl">
          <p
            v-for="(paragraph, index) in project.description"
            :key="`desc-${index}`"
            class="text-base sm:text-lg leading-relaxed mb-4"
            :style="{ color: 'var(--color-content-secondary)' }"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section pt-0" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(feature, index) in project.features" :key="`feature-${index}`" class="tech-card">
            <div class="tech-card-body">
              <div class="flex items-center mb-3">
                <i :class="`pi ${feature.icon}`" class="text-xl mr-3" :style="{ color: feature.color || 'var(--color-primary)' }"></i>
                <h3 class="text-lg font-semibold" :style="{ color: 'var(--color-content-primary)' }">{{ feature.title }}</h3>
              </div>
              <p class="text-sm leading-relaxed" :style="{ color: 'var(--color-content-secondary)' }">
                {{ feature.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Optional code example -->
    <section v-if="project.codeExample" class="section pt-0" :style="{ backgroundColor: 'var(--color-background)' }">
      <div class="container">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl font-bold mb-4 text-center" :style="{ color: 'var(--color-content-primary)' }">
            {{ project.codeExample.title }}
          </h2>
          <pre class="code-block"><code>{{ project.codeExample.code }}</code></pre>
        </div>
      </div>
    </section>

    <!-- How it uses Stone-Age -->
    <section class="section" :style="{ backgroundColor: 'var(--color-background-alt)' }">
      <div class="container">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-center" :style="{ color: 'var(--color-content-primary)' }">
            {{ project.stoneAge.title }}
          </h2>
          <ul class="space-y-4">
            <li
              v-for="(point, index) in project.stoneAge.points"
              :key="`sa-${index}`"
              class="flex items-start"
            >
              <i class="pi pi-check-circle text-green-500 mr-3 mt-1 flex-shrink-0"></i>
              <span :style="{ color: 'var(--color-content-secondary)' }">{{ point }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
/**
 * ProjectPage — shared layout for "Built on Stone-Age" project pages.
 * Data-driven: each page passes a `project` object (same spirit as the
 * EntitySpec pattern in stone-cli — one shape, many instances).
 */
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.status-badge {
  @apply text-xs font-semibold px-3 py-1 rounded-full inline-block uppercase tracking-wide;
}

.code-block {
  @apply rounded-lg p-5 overflow-x-auto text-sm leading-relaxed font-mono;
  background-color: #1a1a2e;
  color: #d4d4e4;
  border: 1px solid var(--color-border-primary);
}
</style>
