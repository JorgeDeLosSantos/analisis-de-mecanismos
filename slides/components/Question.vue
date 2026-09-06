<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="border-l-4 border-violet-500 bg-violet-50 rounded px-6 py-5 my-6">
    <div class="text-violet-900 font-semibold text-sm uppercase tracking-wide mb-2">
      {{ title }}
    </div>

    <div class="text-2xl font-semibold text-violet-950">
      <slot />
    </div>
  </div>
</template>