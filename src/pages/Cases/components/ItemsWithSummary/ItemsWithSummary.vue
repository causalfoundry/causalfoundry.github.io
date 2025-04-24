<template>
  <div class="items-with-summary">
    <div class="items-with-summary__left">
      <div class="items-with-summary__title">
        <slot name="title">
          <AppTitle>
            {{ title || "" }}
          </AppTitle>
        </slot>
      </div>

      <div class="items-with-summary__subtitle">
        {{ subtitle }}
      </div>

      <div class="items-with-summary__logo">
        <img :src="`/images/cases/gaming/01_games.png`" alt="Causal Foundry" />
      </div>
    </div>

    <div class="items">
      <ul>
        <li
          v-for="item in items"
          :key="item.title"
          @click="toggleItem(item)"
          :class="{ expanded: expandedItems.includes(item.title) }"
        >
          <div class="item-header">
            <strong>{{ item.title }}</strong>
            <span v-if="item.text" class="toggle-icon">{{
              expandedItems.includes(item.title) ? "−" : "+"
            }}</span>
          </div>
          <p class="item-text">
            {{ item.text }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useTranslations } from "@/composables/useTranslations";

import AppTitle from "@/components/AppTitle/AppTitle.vue";

import "./items-with-summary.scss";

interface Item {
  title: string;
  text: string;
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
