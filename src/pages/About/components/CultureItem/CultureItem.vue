<template>
  <div class="culture-item">
    <h3 class="culture-item__title">{{ title }}</h3>
    <ul>
      <li
        class="culture-item__text"
        v-for="(item, index) in text"
        :key="index"
        :class="{ 'single-item': text.length === 1 }"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import "./culture-item.scss";
interface Props {
  title: string;
  text: string[];
}
defineProps<Props>();
</script>
