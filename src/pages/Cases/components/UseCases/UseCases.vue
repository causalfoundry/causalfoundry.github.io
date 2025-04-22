<template>
  <div class="use-cases-container">
    <div class="use-cases-container__title">Our use cases</div>

    <div class="use-cases">
      <div v-for="(item, index) in items" :key="index" class="use-cases__item">
        <a :href="item.link" class="use-cases__link">
          <img
            :src="item.image"
            alt="Use case image"
            class="use-cases__image"
          />
        </a>

        <div class="use-cases__details">
          <span class="use-cases__category">{{ item.category }}</span>
          <span class="use-cases__company">{{ item.company }}</span>
          <p class="use-cases__text">{{ item.text }}</p>
        </div>
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
  link: string;
}

const props = defineProps<{
  items: UseCaseItem[];
}>();
</script>
