<template>
  <section class="news">
    <div class="news-header">
      <section-header>Latest News</section-header>
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
          :class="{ disabled: sliderIndex === news.length - 3 }"
          @click="increment"
        >
          <arrow />
        </div>
      </div>
    </div>
    <div class="news__items">
      <div
        v-for="(news_item, index) in news"
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
        <div class="date">{{ news_item.date }}</div>
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
import { ref } from "vue";
import dayjs from "dayjs";
import SectionHeader from "@/components/SectionHeader";
import Arrow from "@/assets/arrow.svg";

const sliderIndex = ref(0);

const news = [
  {
    link: "https://www.gavi.org/vaccineswork/multi-armed-bandits-cooking-ai-storm",
    linkText: "Click here to dive into the story",
    date: dayjs("2024-11-05").format("DD MMM YYYY"),
    text: "Gavi, the Vaccine Alliance, Highlights Causal Foundry’s Impact. Read the feature article, “Multi-Armed Bandits Cooking Up an AI Storm,” which showcases how Causal Foundry is harnessing AI to tackle healthcare challenges in low-resource regions..",
    image: "/images/news/gavi_resize.png",
  },
  {
    link: "https://www.gavi.org/news/media-room/gavi-harnesses-innovation-mitigate-effects-climate-change-global-health",
    linkText: "Read more on GAVI",
    date: dayjs("2024-10-10").format("DD MMM YYYY"),
    text: "Causal Foundry selected as one of the Gavi, the vaccine alliance INFUSE 2024 Pacesetters cohort to deliver AI-powered innovations that tackle critical global health and immunization challenges",
    image: "/images/news/gavi.jpg",
  },
  {
    link: "https://www.idmod.org/symposium/current-symposium/",
    linkText: "More information on IDM web",
    date: dayjs("2024-10-02").format("DD MMM YYYY"),
    text: 'Dexian Tang, our CTO, presented our work titled "Adaptive behavioral AI: Reinforcement learning to enhance healthcare services" at the 2024 IDM Annual Symposium at the Bill & Melinda Gates Foundation Conference Center in Seattle',
    image: "/images/news/idm.jpg",
  },
  {
    link: "https://symposium-2024-webpage.my.canva.site/",
    linkText: "Read more on symposium web",
    date: dayjs("2024-09-30").format("DD MMM YYYY"),
    text: "Our CEO was speaking at Penn Medicine on September 26 in the Nudges in Health Care Symposium",
    image: "/images/news/nudges_square.png",
  },
  {
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7234966631154606080",
    linkText: "Read more on LinkedIn",
    date: dayjs("2024-09-06").format("DD MMM YYYY"),
    text: `Our team contributed three papers to this year’s conference, and the experience has been nothing short of inspiring. The week was filled with opportunities to learn, grow, and innovate, from engaging in deep scientific discussions to forging new connections.`,
    image: "/images/news/kdd.jpg",
  },
  {
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7120780440478584834/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7120780440478584834%29",
    linkText: "Read more on LinkedIn",
    date: dayjs("2023-10-12").format("DD MMM YYYY"),
    text: `Africa Perianez, co-founder and CEO of Causal Foundry, Inc delivered the keynote at the 40th Takemi Symposium in International Health in Harvard on October 21, on “Digital Health: Opportunities and Challenges for Global Health.`,
    image: "/images/news/how-ai.png",
  },
  {
    link: "https://twitter.com/Causal_Foundry/status/1701606748568822099?s=20",
    linkText: "Read more on X",
    date: dayjs("2023-09-12").format("DD MMM YYYY"),
    text: `We're excited to be a recipient of the <a href="http://Google.org" target="_blank">Google.org</a> AI for the Global Goals Grant Portfolio.
           Causal Foundry will build an AI-enabled patient care application to support frontline workers
           in Africa. Learn more about the other recipients  <a href="http://g.co/ai/globalgoals">here</a>`,
    image: "/images/news/google.png",
    credits: "Photo by E. Nsapu",
  },
  {
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7082414780497502209",
    linkText: "Read more on LinkedIn",
    date: dayjs("2023-08-04").format("DD MMM YYYY"),
    text: `We are thrilled to work with
    <a href="https://www.linkedin.com/company/aide-chemists-ltd/" target="_blank">AIDE CHEMISTS LTD</a>
     to build together an AI-native e-pharmacy application
      to revolutionize access to medications and medical advice.`,
    image: "/images/news/aidechemist.png",
  },
  {
    link: "https://www.linkedin.com/posts/medtronic-labs_medtronic-labs-causal-foundry-revolutionizing-activity-7052612498365038592-stCO",
    linkText: "Read more on LinkedIn",
    date: dayjs("2023-04-15").format("DD MMM YYYY"),
    text: `Excited to announce our partnership with <a href="https://www.medtroniclabs.org/" target="_blank">Medtronic Labs</a>.
           Our goal is to work together to revolutionize healthcare delivery
           models in low and middle-income countries through AI and data-driven insights`,
    image: "/images/news/medtronics.png",
  },
];

const increment = () => {
  if (sliderIndex.value < news.length - 3) {
    sliderIndex.value++;
  }
};

const decrement = () => {
  if (sliderIndex.value > 0) {
    sliderIndex.value--;
  }
};
</script>
