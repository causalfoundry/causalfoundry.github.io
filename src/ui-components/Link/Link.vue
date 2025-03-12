<template>
  <div class="cf-link">
    <router-link :to="localizedPath" class="cf-link">
      {{ text }}
    </router-link>
    <img :src="`/images/arrow_forward.png`" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

import "./link.scss";

const props = defineProps<{
  to: string;
  text?: string;
}>();

const route = useRoute();
const currentLang = Array.isArray(route.params.lang)
  ? route.params.lang[0]
  : route.params.lang || "en"; // Default to 'en' if no lang is specified

const localizedPath = computed(() => `/${currentLang}${props.to}`);
</script>
