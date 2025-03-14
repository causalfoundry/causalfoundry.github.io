<template>
  <div class="product-footer">
    <div class="product-footer__container">
      <header>
        <div class="title">{{ messages?.product?.footer?.title }}</div>
        <div class="subtitle">
          {{ messages?.product?.footer?.description }}
        </div>
      </header>

      <div class="product-footer__items">
        <div
          v-for="(item, index) in messages?.product?.footer?.items"
          :key="index"
          class="[`item`, { active: index === activeFeatureIndex }]"
        >
          <img :src="item.icon" />
          <div class="title">{{ item.title }}</div>
          <div class="subtitle">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <img
      src="../../../../assets/pattern-wave.png"
      class="product-footer__pattern-wave"
      alt="Wave Pattern"
    />
  </div>
</template>

<script setup lang="ts">
import "./product-footer.scss";
import { useTranslations } from "@/composables/useTranslations";

const { currentTranslations: messages } = useTranslations("product");
</script>
