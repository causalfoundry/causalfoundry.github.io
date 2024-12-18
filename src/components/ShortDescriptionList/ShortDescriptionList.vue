<template>
  <div class="short-description-list">
    <div class="short-description-list__container">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="short-description-list__container__item"
      >
        <div class="short-description-list__container__item__title">
          {{ item.title }}
        </div>
        <div class="short-description-list__container__item__text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "./short-description-list.scss";
import { onMounted } from "vue";

interface Item {
  title: string;
  text: string;
}

const props = defineProps<{
  items: Item[];
  title?: string;
  description?: string;
}>();

onMounted(() => {
  console.log("Items recibidos:", props.description);
});
</script>
