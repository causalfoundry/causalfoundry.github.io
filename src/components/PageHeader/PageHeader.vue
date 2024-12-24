<template>
  <div class="page-header" :class="[className ? className : '']">
    <div class="page-header__mobile-background">
      <img :src="image" />
    </div>
    <div class="page-header__title">
      <div class="mid-container"><slot name="title"></slot></div>
    </div>
    <div class="page-header__description">
      <div class="mid-container">
        <BreakableText :text="description" />
      </div>
      <div v-if="showButton" class="contact-button">
        <Button value="GET IN TOUCH" @click="handleButtonClick" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import BreakableText from "@/components/BreakableText";

import "./page-header.scss";
import Button from "@/ui-components/button";
import {useRouter} from "vue-router";

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
</script>
