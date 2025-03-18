<template>
  <div :class="['quote', customClass]">
    <div class="quote__text">
      <span class="quote-symbol">“</span>
      {{ text }}
    </div>

    <div class="quote__from">
      {{ from }}
    </div>
  </div>
</template>

<script setup lang="ts">
import "./quote.scss";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    required: false,
  },
});
</script>
