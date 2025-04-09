<template>
  <div class="items-with-summary">
    <div class="items-with-summary__left">
      <AppTitle>
        <div class="items-with-summary__title">
          {{ title || "" }}
        </div>
      </AppTitle>

      <div class="items-with-summary__subtitle">
        {{ subtitle }}
      </div>

      <div class="items-with-summary__logo">
        <img :src="`/images/cases/gaming/01_games.png`" alt="Causal Foundry" />
      </div>
    </div>

    <div class="items">
      <ul>
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useTranslations } from "@/composables/useTranslations";

import AppTitle from "@/components/AppTitle/AppTitle.vue";

import "./items-with-summary.scss";

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
    type: Array,
    required: true,
  },
});

const { currentTranslations: messages } = useTranslations("cases/gaming");
</script>
