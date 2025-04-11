<template>
  <div class="use-cases">
    <div v-for="(item, index) in items" :key="index" class="use-cases__item">
      <img :src="item.image" alt="Use case image" class="use-cases__image" />
      <div class="use-cases__details">
        <span class="use-cases__category">{{ item.category }}</span>
        <span class="use-cases__company">{{ item.company }}</span>
        <p class="use-cases__text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import "./use-cases.scss";

interface UseCaseItem {
  image: string;
  category: string;
  company: string;
  text: string;
}

const props = defineProps<{
  items: UseCaseItem[];
}>();
</script>
