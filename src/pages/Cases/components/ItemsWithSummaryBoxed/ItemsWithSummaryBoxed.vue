<template>
  <div class="items-with-summary-boxed">
    <div class="items-with-summary-boxed__left">
      <div class="items-with-summary-boxed__title">
        {{ title || "" }}
      </div>

      <div class="items-with-summary-boxed__subtitle">
        {{ subtitle }}
      </div>

      <div class="items-with-summary-boxed__logo">
        <slot name="image" />
      </div>
    </div>

    <div class="items">
      <ul class="main-items-list">
        <li
          class="main-item-list"
          v-for="item in items"
          :key="item.title"
          @click="toggleItem(item)"
          :class="{ expanded: expandedItems.includes(item.title) }"
        >
          <div class="item-header">
            <img v-if="item.icon" :src="item.icon" alt="icon" />
            <strong>{{ item.title }}</strong>
            <span v-if="item.text" class="toggle-icon">{{
              expandedItems.includes(item.title) ? "−" : "+"
            }}</span>
          </div>
          <div class="item-text">
            <p v-if="!Array.isArray(item.text)">{{ item.text }}</p>
            <ul class="secondary-item-list" v-else>
              <li v-for="(textItem, index) in item.text" :key="index">
                {{ textItem }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useTranslations } from "@/composables/useTranslations";

import AppTitle from "@/components/AppTitle/AppTitle.vue";

import "./items-with-summary-boxed.scss";

interface Item {
  title: string;
  icon?: string;
  text: string | string[];
}

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  items: {
    type: Array as () => Item[],
    required: true,
  },
  borderColor: {
    type: String,
    required: false,
  },
});

const expandedItems = ref<string[]>([]);

const toggleItem = (item: Item) => {
  if (expandedItems.value.includes(item.title)) {
    expandedItems.value = expandedItems.value.filter(
      (title) => title !== item.title
    );
  } else {
    expandedItems.value.push(item.title);
  }
};

const { currentTranslations: messages } = useTranslations("cases/gaming");
</script>
