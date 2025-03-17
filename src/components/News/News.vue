<template>
  <section class="news">
    <div class="news-header">
      <section-header>{{ messages?.news?.title }}</section-header>
      <div class="controls">
        <div
          class="arrow left"
          :class="{ disabled: sliderIndex === 0 }"
          @click="decrement"
        >
          <arrow />
        </div>
        <div
          class="arrow right"
          :class="{ disabled: sliderIndex === newsItems.length - 3 }"
          @click="increment"
        >
          <arrow />
        </div>
      </div>
    </div>
    <div class="news__items">
      <div
        v-for="(news_item, index) in newsItems"
        :key="index"
        :style="{
          transform: `translateX(calc((100% + 32px) * ${-sliderIndex}))`,
        }"
        class="news__content__item"
      >
        <div class="image">
          <a :href="news_item.link" target="_blank">
            <img :src="`${news_item.image}`" />
          </a>
          <div v-if="news_item.credits" class="credits">
            {{ news_item.credits }}
          </div>
        </div>
        <div class="date">
          {{ dayjs(news_item.date).format(messages.news.dateFormat) }}
        </div>
        <div class="description" v-html="news_item.text"></div>
        <div class="link">
          <a :href="news_item.link" target="_blank">
            {{ news_item.linkText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import dayjs from "dayjs";
import SectionHeader from "@/components/SectionHeader";
import Arrow from "@/assets/arrow.svg";
import { useTranslations } from "@/composables/useTranslations";

const sliderIndex = ref(0);

const { currentTranslations: messages } = useTranslations("news");

// Define newsItems as a computed property that gets data from translations
const newsItems = computed(() => {
  return messages.value?.news?.items || [];
});

const increment = () => {
  if (sliderIndex.value < newsItems.value.length - 3) {
    sliderIndex.value++;
  }
};

const decrement = () => {
  if (sliderIndex.value > 0) {
    sliderIndex.value--;
  }
};
</script>
