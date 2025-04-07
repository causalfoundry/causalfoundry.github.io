<template>
  <div class="secondary-title">
    <AppTitle>
      {{ props.value }}
    </AppTitle>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import AppTitle from "@/components/AppTitle";

import "./secondary-title.scss";

const props = defineProps<{
  value: string;
}>();
</script>
