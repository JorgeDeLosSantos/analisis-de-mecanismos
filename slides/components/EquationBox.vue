<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="my-1 rounded-md border px-1 py-1 text-center bg-gray-100 shadow-sm">
    <slot />
  </div>
</template>