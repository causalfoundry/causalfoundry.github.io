<template>
  <div class="text-image">
    <div class="body" :class="{ reversed: reversed }">
      <div class="body__title" :class="{ primary: primary }">
        {{ title }}
      </div>
      <div class="body__text">
        {{ text }}
      </div>

      <slot name="extra-image"></slot>
    </div>
    <slot name="image"></slot>
  </div>
</template>

<script setup lang="ts">
import "./text-image.scss";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  reversed: {
    type: Boolean,
    required: false,
    default: false,
  },
  primary: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
