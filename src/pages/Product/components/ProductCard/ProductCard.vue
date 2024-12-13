<template>
  <div :class="['product-card', className]">
    <h1 :style="{ 'padding-left': `${shift}px` }">{{ title }}</h1>
    <p class="description" :style="{ 'padding-left': `${shift}px` }">
      {{ description }}
    </p>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import "./product-card.scss";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shift: {
    type: Number,
    required: false,
    default: 0,
  },
  className: {
    type: String,
    required: true,
  },
});
</script>
