<template>
  <div class="slidev-layout grid grid-cols-2 gap-10 h-full">
    <div class="pr-4">
      <slot />
    </div>

    <div class="pl-4 border-l-4 border-gray-300">
      <slot name="right" />
    </div>
  </div>
</template>