<template>
  <div class="product-footer">
    <div class="product-footer__container">
      <header>
        <div class="title">End-to-End Products</div>
        <div class="subtitle">
          Need a tailored app or custom software? Our expert team is here to
          create the perfect solution for your unique needs
        </div>
      </header>

      <div class="product-footer__items">
        <div
          v-for="(item, index) in items"
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
import { items } from "./constants";
</script>
