<template>
  <div class="cf-link">
    <router-link :to="to" class="cf-link">{{ text }}</router-link>
    <img :src="`/images/arrow_forward.png`" />
  </div>
</template>

<script setup lang="ts">
import "./link.scss";

const props = defineProps<{
  to: string;
  text: string;
}>();
</script>
