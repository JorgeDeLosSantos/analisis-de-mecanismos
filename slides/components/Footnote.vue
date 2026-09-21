<script setup>
defineProps({
  align: {
    type: String,
    default: 'left',
  },
})
</script>

<template>
  <div
    class="absolute bottom-4 left-8 right-8 text-xs opacity-60 leading-snug"
    :class="{
      'text-left': align === 'left',
      'text-center': align === 'center',
      'text-right': align === 'right',
    }"
  >
    <slot />
  </div>
</template>