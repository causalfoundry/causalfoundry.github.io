<template>
  <div class="collapsible-list">
    <div class="collapsible-list__title">
      <AppTitle
        ><span>{{ title }}</span></AppTitle
      >
    </div>

    <div class="collapsible-list__items">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="collapsible-item"
        @click="toggleItem(index)"
      >
        <div class="collapsible-list__items__title">
          {{ item.title }}
          <span class="collapsible-list__items__title__icon">{{
            activeIndex === index ? "-" : "+"
          }}</span>
        </div>
        <div v-if="activeIndex === index" class="content">
          <ul>
            <li v-for="(text, textIndex) in item.text" :key="textIndex">
              {{ text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "./collapsible-items.scss";

import AppTitle from "@/components/AppTitle";

const props = defineProps<{
  items: Array<{ title: string; text: string[] }>;
  title: string;
}>();

const activeIndex = ref<number | null>(null);

function toggleItem(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index;
}
</script>
