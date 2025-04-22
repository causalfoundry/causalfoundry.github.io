<template>
  <div class="side-text-section">
    <div class="side-text-section__title">
      <div>
        <template v-if="highlightedIndices && highlightedIndices.length >= 0">
          <AppTitle>
            {{
              titleWords
                .slice(highlightedIndices[0], highlightedIndices[1] + 1)
                .join(" ")
            }}
          </AppTitle>

          {{ titleWords.slice(highlightedIndices[1] + 1).join(" ") }}
        </template>
        <template v-else>
          <span v-for="(word, index) in titleWords" :key="`default-${index}`">
            {{ word }}
            <span v-if="index < titleWords.length - 1"> </span>
          </span>
        </template>
      </div>
    </div>
    <div class="side-text-section__text">
      <template v-if="Array.isArray(text)">
        <p v-for="(paragraph, index) in text" :key="`paragraph-${index}`">
          {{ paragraph }}
        </p>
      </template>
      <p v-else>{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import AppTitle from "@/components/AppTitle/AppTitle.vue";

import "./side-text-section.scss";

const props = defineProps({
  title: String,
  text: String,
  highlightedIndices: { type: Array, required: false },
});

const titleWords = computed(() => props.title?.split(" ") || []);
</script>
