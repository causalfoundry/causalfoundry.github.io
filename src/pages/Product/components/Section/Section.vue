<template>
  <div class="section"></div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import "./Section.scss";

const props = defineProps<{
  title: string;
  description: string;
  item: {
    imageUrl: string;
    title: string;
    description: string;
  }[];
}>();
</script>
