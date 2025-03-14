<template>
  <div class="get-in-touch" :class="{ highlighted: highlighted }">
    <div>{{ currentTranslations?.common?.wantToKnowMore }}</div>
    <div>
      {{ currentTranslations?.common?.wantToKnowMoreDescription }}
    </div>
    <Button
      :value="currentTranslations?.common?.getInTouch"
      @click="handleButtonClick"
    />
  </div>
</template>

<script setup lang="ts">
import "./get-in-touch.scss";

import { useRouter } from "vue-router";
import Button from "@/ui-components/button";
import { useTranslations } from "@/composables/useTranslations";

const router = useRouter();

const { currentTranslations } = useTranslations("");

function handleButtonClick(event: MouseEvent) {
  router.push("/contact");
}

const props = defineProps<{
  highlighted?: boolean;
}>();
</script>
