<template>
  <div class="culture-item">
    <div class="culture-item__title">
      <slot name="title">
        <AppTitle>
          {{ title }}
        </AppTitle>
      </slot>
    </div>
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
    <img v-if="icon" :src="icon" alt="icon" class="culture-item__icon" />
  </div>
</template>

<script setup lang="ts">
import "./culture-item.scss";

import AppTitle from "@/components/AppTitle";
interface Props {
  title: string;
  text: string[];
  icon?: string;
}
defineProps<Props>();
</script>
