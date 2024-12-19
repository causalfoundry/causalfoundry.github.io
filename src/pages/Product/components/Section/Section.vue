<template>
  <div :class="['section', { unlimited: unlimited }, className]">
    <div class="section__header">
      <h1>{{ title }}</h1>
      <p class="description">{{ description }}</p>
    </div>
    <div :class="['card-content']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import "./section.scss";

export default {
  name: "Section",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    unlimited: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
