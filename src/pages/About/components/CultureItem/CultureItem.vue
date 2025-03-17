<template>
  <div class="culture-item">
    <h3 class="culture-item__title">{{ title }}</h3>
    <p class="culture-item__text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import "./culture-item.scss";
interface Props {
  title: string;
  text: string;
}

defineProps<Props>();
</script>
