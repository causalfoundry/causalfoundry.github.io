<template>
  <div class="short-description-list">
    <div class="short-description-list__container">
      <div class="short-description-list__container__title">
        {{ title }}
        <div class="short-description-list__container__description">
          {{ description }}
        </div>
      </div>

      <div class="short-description-list__container__list">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="short-description-list__container__list__item"
        >
          <div
            class="short-description-list__container__list__item__title"
            :class="{ highlighted: highlighted }"
          >
            {{ item.title }}
          </div>
          <div class="short-description-list__container__list__item__text">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "./short-description-list.scss";
import { onMounted } from "vue";

interface Item {
  title: string;
  text: string;
}

const props = defineProps<{
  items: Item[];
  title?: string;
  description?: string;
  highlighted?: boolean;
}>();
</script>
