<template>
  <div class="two-column-block" :class="{ 'with-top-border': showTopBorder }">
    <h2 class="two-column-block__title">{{ title }}</h2>
    <p class="two-column-block__subtitle">{{ subtitle }}</p>
    <div class="two-column-block__content">
      <slot name="left" />
      <slot name="right" />
    </div>
  </div>
</template>

<script setup>
import "./two-column-block.scss";

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
