<template>
  <div class="case-logos">
    <slot name="first"></slot>
    <span>&</span>
    <slot name="second"></slot>
  </div>
</template>

<script setup lang="ts">
import "./logos.scss";
</script>
