<template>
  <section class="news">
    <section-header>News</section-header>
    <div class="news__items">
      <div
        v-for="(news_item, index) in news"
        :key="index"
        class="news__content__item"
      >
        <div class="image">
          <a :href="news_item.link">
            <img :src="`${news_item.image}`" />
          </a>
        </div>
        <div class="date">{{ news_item.date }}</div>
        <div class="description">{{ news_item.text }}</div>
        <div class="link">
          <a :href="news_item.link"> {{ news_item.linkText }} </a>
        </div>
      </div>
    </div>
    <img src="../../assets/pattern-wave.png" class="news__pattern-wave" />
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from "@/components/SectionHeader";

const news = [
  {
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7082414780497502209",
    linkText: "Read more on Linkedin",
    date: "2023-06-23",
    text: "some text here1 some text here1 some text here1 some text here1 some text here1 some text here1 some text here1 ",
    image: "src/assets/news/CFxAC1_1.png",
  },
  {
    link: "https://www.linkedin.com/posts/causal-foundry_we-are-thrilled-to-work-with-aide-chemists-activity-7082414780497502209-4-na?utm_source=share&utm_medium=member_desktop",
    linkText: "Read more on Linkedin",
    date: "2023-06-23",
    text: "some text here",
    image: "src/assets/news/UNGA_Causal Foundry_FeatureCard.jpg",
  },
  {
    link: "https://twitter.com/Causal_Foundry/status/1700848478895652960",
    linkText: "Read more on X",
    date: "2023-06-23",
    text: `Very proud that @galileoeni data scientist at @Causal_Foundry 
    has been awarded with the first prize at @instadeepai @DeepIndaba 
    hackathon competition! Congratulations 🎉`,
    image: "src/assets/news/eniola_square.png",
  },
];
</script>
