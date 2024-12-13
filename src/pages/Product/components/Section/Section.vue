<template>
  <div :class="['card', className]">
    <h1>{{ title }}</h1>
    <p class="description">{{ description }}</p>
    <div :class="['card-content', className]">
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
  },
};
</script>
