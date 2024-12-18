<template>
  <div v-html="formatText(text)"></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();

function formatText(text: string): string {
  return text.replace(/\n\n/g, "<br /><br />");
}
</script>
