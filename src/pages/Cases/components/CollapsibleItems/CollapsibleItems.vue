<template>
  <div class="collapsible-list">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="collapsible-item"
      @click="toggleItem(index)"
    >
      <div class="title">{{ item.title }} <span>+</span></div>
      <div v-if="activeIndex === index" class="content">
        <ul>
          <li v-for="(text, textIndex) in item.text" :key="textIndex">
            {{ text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "./collapsible-items.scss";

export default {
  name: "CollapsibleItems",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: null,
    };
  },
  methods: {
    toggleItem(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>
