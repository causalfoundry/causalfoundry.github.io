<template>
  <div class="success-case" :class="className">
    <header>{{ title }}</header>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import "./success-case.scss";

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
