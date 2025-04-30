<template>
  <div class="label-card">
    <span v-if="beforeText">{{ beforeText }}</span>
    <br v-if="beforeText && highlightedText" />
    <AppTitle v-if="highlightedText" highlight>{{ highlightedText }}</AppTitle>
    <br v-if="highlightedText && afterText" />
    <span v-if="afterText">{{ afterText }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import AppTitle from "@/components/AppTitle";

import "./label-card.scss";

interface LabelCardProps {
  text: string;
  startIndex?: number;
  endIndex?: number;
}

const props = defineProps<LabelCardProps>();

const words = computed(() => (props.text || "").split(/\s+/));

const beforeText = computed(() => {
  const text = words.value.slice(0, props.startIndex).join(" ");
  return text || "";
});

const highlightedText = computed(() => {
  const text = words.value.slice(props.startIndex, props.endIndex).join(" ");
  return text || "";
});

const afterText = computed(() => {
  const text = words.value.slice(props.endIndex).join(" ");
  return text || "";
});
</script>
