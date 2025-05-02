<template>
  <div class="matrix-of-cards">
    <OneColumnBlock
      v-if="title || subtitle"
      :title="title"
      :subtitle="subtitle"
      :showTopBorder="true"
    >
      <div class="cards-grid">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="cards-grid__card"
        >
          <div class="cards-grid__card__title">
            <AppTitle v-if="item.title">{{ item.title }}</AppTitle>
          </div>
          <div class="cards-grid__card__text">
            <p v-if="item.text" class="cards-grid__card__text">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </OneColumnBlock>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle/AppTitle.vue";
import OneColumnBlock from "../OneColumnBlock/OneColumnBlock.vue";

import "./matrix-of-cards.scss";

export default {
  name: "MatrixOfCards",
  components: {
    AppTitle,
    OneColumnBlock,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      default: () => [],
      validator: (value) => {
        return value.every(
          (item) =>
            typeof item === "object" && "title" in item && "text" in item
        );
      },
    },
  },
};
</script>
