<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
  }>(),
  { title: 'Solution' },
);
</script>
<template>
  <details>
    <summary>{{ title }}</summary>
    <slot />
  </details>
</template>
