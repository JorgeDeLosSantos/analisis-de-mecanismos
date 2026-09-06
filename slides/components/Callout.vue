<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'note',
  },
  title: {
    type: String,
    default: '',
  },
})

const config = computed(() => {
  const variants = {
    note: {
      icon: 'ℹ️',
      border: 'border-blue-500',
      bg: 'bg-blue-50',
      text: 'text-blue-900',
      defaultTitle: 'Nota',
    },
    tip: {
      icon: '💡',
      border: 'border-green-500',
      bg: 'bg-green-50',
      text: 'text-green-900',
      defaultTitle: 'Idea clave',
    },
    warning: {
      icon: '⚠️',
      border: 'border-orange-500',
      bg: 'bg-orange-50',
      text: 'text-orange-900',
      defaultTitle: 'Advertencia',
    },
    important: {
      icon: '❗',
      border: 'border-red-500',
      bg: 'bg-red-50',
      text: 'text-red-900',
      defaultTitle: 'Importante',
    },
  }

  return variants[props.type] ?? variants.note
})
</script>

<template>
  <div
    class="border-l-4 rounded px-5 py-4 my-4"
    :class="[config.border, config.bg, config.text]"
  >
    <div class="font-bold mb-2">
      <span class="mr-2">{{ config.icon }}</span>
      {{ title || config.defaultTitle }}
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>