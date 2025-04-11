<template>
  <div class="cite-card">
    <div class="cite-card__header">
      <img :src="`/images/cases/m2m/logo.png`" />
    </div>

    <div class="cite-card__info">
      <div>
        {{ who }}
      </div>
      <div>
        {{ org }}
      </div>
    </div>

    <div class="cite-card__text">
      {{ text }}
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
});
</script>
