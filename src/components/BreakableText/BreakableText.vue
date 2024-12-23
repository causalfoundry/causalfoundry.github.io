<template>
  <div v-html="formatText(text)"></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();

console.log("[aec] breakable text: ", props.text);
function formatText(text: string): string {
  return (text || "").replace(/\n\n/g, "<br /><br />");
}
</script>
