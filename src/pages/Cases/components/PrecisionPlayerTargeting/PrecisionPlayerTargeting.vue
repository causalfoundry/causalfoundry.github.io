<template>
  <div class="precision-player-targeting">
    <div class="precision-player-targeting__left">
      <AppTitle>
        <div class="precision-player-targeting__title">
          {{ messages?.cases?.gaming?.precisionPlayerTargeting?.title }}
        </div>
      </AppTitle>

      <div class="precision-player-targeting__subtitle">
        {{ messages?.cases?.gaming?.precisionPlayerTargeting?.subtitle }}
      </div>

      <div class="precision-player-targeting__logo">
        <img :src="`/images/cases/gaming/01_games.png`" alt="Causal Foundry" />
      </div>
    </div>

    <div class="items">
      <ul>
        <li
          v-for="item in messages?.cases?.gaming?.precisionPlayerTargeting
            ?.items"
          :key="item"
        >
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

import "./precision-player-targeting.scss";

const { currentTranslations: messages } = useTranslations("cases");
</script>
