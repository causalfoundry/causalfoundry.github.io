<template>
  <div class="matrix">
    <div class="matrix__header">
      <AppTitle>
        <span class="matrix__title">
          {{ messages?.cases?.gaming?.personalizedContent?.title }}
        </span>
      </AppTitle>
    </div>

    <ul>
      <li
        v-for="item in messages?.cases?.gaming?.personalizedContent?.items"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useTranslations } from "@/composables/useTranslations";

import AppTitle from "@/components/AppTitle/AppTitle.vue";

import "./matrix.scss";

const { currentTranslations: messages } = useTranslations("cases");
</script>
