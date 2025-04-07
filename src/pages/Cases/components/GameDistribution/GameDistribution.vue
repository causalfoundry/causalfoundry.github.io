<template>
  <div class="game-distribution">
    <SecondaryTitle :value="messages.cases.gaming.distribution.title" />

    <img
      src="/images/cases/gaming/game-distribution.png"
      alt="Game Distribution"
    />
  </div>
</template>

<script setup lang="ts">
import { useTranslations } from "@/composables/useTranslations";
import SecondaryTitle from "@/components/SecondaryTitle";

import "./game-distribution.scss";
const { currentTranslations: messages } = useTranslations("cases");
</script>
