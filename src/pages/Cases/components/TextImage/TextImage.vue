<template>
  <div class="text-image" :class="className">
    <div class="body" :class="{ reversed: reversed }">
      <div class="body__title" :class="{ primary: primary }">
        {{ title }}
      </div>
      <div class="body__text">
        <BreakableText :text="text" />
      </div>

      <slot name="extra-image"></slot>
    </div>
    <slot name="image"></slot>
  </div>
</template>

<script setup lang="ts">
import "./text-image.scss";
import BreakableText from "@/components/BreakableText";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: false,
    default: "",
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
console.log("[aec] ", props.className);
</script>
