<template>
  <div class="case-logos">
    <div class="clogos">
      <slot name="first"></slot>
    </div>
    <span>&</span>
    <div class="clogos">
      <slot name="second"></slot>
    </div>

  </div>
</template>

<script setup lang="ts">
import "./logos.scss";
</script>
