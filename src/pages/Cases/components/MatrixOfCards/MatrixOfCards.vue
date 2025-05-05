<template>
  <div class="matrix-of-cards" :style="cardWidthStyle">
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
          <slot name="card" :item="item" :index="index" />
        </div>
      </div>
    </OneColumnBlock>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle/AppTitle.vue";
import OneColumnBlock from "../layout/OneColumnBlock/OneColumnBlock.vue";

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
    cardMinWidth: {
      type: String,
      default: "300px",
    },
  },
  computed: {
    cardWidthStyle() {
      return {
        "--card-min-width": this.cardMinWidth,
      };
    },
  },
};
</script>
