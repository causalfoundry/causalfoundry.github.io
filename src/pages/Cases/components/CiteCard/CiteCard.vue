<template>
  <div class="cite-card" :style="{ color: color, background: borderColor }">
    <div class="cite-card__container">
      <div class="cite-card__container__header">
        <img :src="logo" />
      </div>

      <div class="cite-card__container__text">
        {{ text }}
      </div>

      <div class="cite-card__container__info">
        <div>
          {{ who }}
        </div>
        <div>
          {{ org }}
        </div>
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
  borderColor: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>
