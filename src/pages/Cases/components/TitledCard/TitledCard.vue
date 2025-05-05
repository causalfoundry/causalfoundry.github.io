<template>
  <div class="titled-card">
    <div class="titled-card__title" v-if="title">
      <AppTitle>{{ title }}</AppTitle>
    </div>
    <div class="titled-card__text">
      <p v-if="text" class="titled-card__text">{{ text }}</p>
      <slot v-else></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppTitle from "@/components/AppTitle/AppTitle.vue";
import "./title-card.scss";

defineOptions({
  name: "TitledCard",
});

interface Props {
  title?: string;
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  text: "",
});
</script>
