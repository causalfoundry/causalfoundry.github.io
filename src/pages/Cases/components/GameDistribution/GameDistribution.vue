<template>
  <div class="game-distribution">
    <SecondaryTitle :value="messages?.distribution?.title" />

    <img
      src="/images/cases/gaming/game-distribution.png"
      alt="Game Distribution"
      class="game-distribution__image"
    />

    <img
      src="/images/cases/gaming/game-distribution-mobile.png"
      alt="Game Distribution"
      class="game-distribution__image-mobile"
    />
  </div>
</template>

<script setup lang="ts">
import { useTranslations } from "@/composables/useTranslations";
import SecondaryTitle from "@/components/SecondaryTitle";

import "./game-distribution.scss";

const { currentTranslations: messages } = useTranslations("cases/gaming");
</script>
