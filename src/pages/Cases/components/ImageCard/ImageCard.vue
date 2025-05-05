<template>
  <div class="image-card">
    <div class="image-card__image">
      <img :src="icon" alt="icon" />
    </div>
    <div class="image-card__text">
      <p v-if="text" class="image-card__text">{{ text }}</p>
      <slot v-else></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import "./image-card.scss";

defineOptions({
  name: "ImageCard",
});

interface Props {
  title?: string;
  text?: string;
  icon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  text: "",
});
</script>
