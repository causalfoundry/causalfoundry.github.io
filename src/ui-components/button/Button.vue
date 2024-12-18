<template>
  <button class="cf-button" @click="handleClick" :value="value">
    <slot>{{ value }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps<{
  highlight?: boolean;
  onClick?: Function;
  value: string;
}>();

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
  props.onClick?.();
};
</script>

<style scoped lang="scss">
@import "./button.scss";
</style>
