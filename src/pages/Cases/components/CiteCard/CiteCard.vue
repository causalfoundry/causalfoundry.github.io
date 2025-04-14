<template>
  <div
    class="cite-card"
    :style="{ backgroundColor: backgroundColor, color: color }"
  >
    <div class="cite-card__header">
      <img :src="logo" />
    </div>

    <div class="cite-card__text">
      {{ text }}
    </div>

    <div class="cite-card__info">
      <div>
        {{ who }}
      </div>
      <div>
        {{ org }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "./cite-card.scss";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  who: {
    type: String,
    required: true,
  },
  org: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>
