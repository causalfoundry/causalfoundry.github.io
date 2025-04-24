<template>
  <div class="matrix">
    <div class="matrix__header">
      <slot name="title">
        <AppTitle>
          <span class="matrix__title">
            {{ title }}
          </span>
        </AppTitle>
      </slot>

      <div class="matrix__subtitle">
        {{ subtitle.split(" ").slice(0, 3).join(" ") }}
        <br />
        {{ subtitle.split(" ").slice(3).join(" ") }}
      </div>
    </div>

    <ul>
      <li v-for="item in items" :key="item">
        <div class="matrix__item">{{ item }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useTranslations } from "@/composables/useTranslations";

import AppTitle from "@/components/AppTitle/AppTitle.vue";

import "./matrix.scss";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
});
</script>
