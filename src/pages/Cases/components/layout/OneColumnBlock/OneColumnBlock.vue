<template>
  <div class="one-column-block" :class="{ 'with-top-border': showTopBorder }">
    <h2 class="one-column-block__title">{{ title }}</h2>
    <p class="one-column-block__subtitle">{{ subtitle }}</p>
    <div class="one-column-block__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import "./one-column-block.scss";

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  showTopBorder: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
