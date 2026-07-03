<template>
  <a :href="item.href" class="project-card tech-card block" :aria-label="`Learn more about ${item.name}`">
    <div class="tech-card-body">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center">
          <div class="rounded-full p-3 mr-3 flex items-center justify-center" :style="{ backgroundColor: item.color + '18' }">
            <i :class="`pi ${item.icon}`" class="text-xl" :style="{ color: item.color }"></i>
          </div>
          <h3 class="text-xl font-semibold" :style="{ color: 'var(--color-content-primary)' }">{{ item.name }}</h3>
        </div>
        <span class="status-pill" :style="{ backgroundColor: item.color + '18', color: item.color }">
          {{ item.status }}
        </span>
      </div>
      <p class="text-sm leading-relaxed mb-4" :style="{ color: 'var(--color-content-secondary)' }">
        {{ item.blurb }}
      </p>
      <span class="inline-flex items-center text-sm font-medium" :style="{ color: item.color }">
        Learn more
        <i class="pi pi-arrow-right ml-2 text-xs"></i>
      </span>
    </div>
  </a>
</template>

<script setup>
/**
 * ProjectCard — card linking to a "Built on Stone-Age" project page.
 */
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.project-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.status-pill {
  @apply text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap;
}
</style>
