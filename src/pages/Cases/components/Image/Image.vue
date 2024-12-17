<template>
  <div class="standalone-image">
    <slot name="image"></slot>
  </div>
</template>

<script setup lang="ts">
import "./image.scss";

const props = defineProps({});
</script>
