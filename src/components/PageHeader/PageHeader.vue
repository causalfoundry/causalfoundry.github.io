<template>
  <div class="page-header" :class="[className ? className : '']">
    <div class="page-header__title">
      <div class="mid-container"><slot name="title"></slot></div>
    </div>

    <div class="page-header__subtitle">
      <div class="mid-container"><slot name="subtitle"></slot></div>
    </div>

    <div class="page-header__description">
      <div class="mid-container">
        <BreakableText :text="description" />
      </div>
      <div v-if="showButton" class="contact-button">
        <slot name="button">
          <Button
            :value="messages?.common?.getInTouch"
            @click="handleButtonClick"
          />
        </slot>
      </div>
    </div>

    <div v-if="image" class="page-header__mobile-background">
      <img :src="image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import Button from "@/ui-components/button";

import BreakableText from "@/components/BreakableText";
import { useTranslations } from "@/composables/useTranslations";

import "./page-header.scss";

const router = useRouter();

function handleButtonClick(event: MouseEvent) {
  router.push("/contact");
}

const props = defineProps({
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  className: {
    type: String,
    required: false,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
});

const { currentTranslations: messages } = useTranslations("");
</script>
