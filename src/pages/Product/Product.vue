<template>
  <div class="products">
    <img
      src="../../assets/gradient-top-yellow.png"
      class="app__gradient-top-yellow"
    />
    <img
      src="../../assets/gradient-top-blue.png"
      class="app__gradient-top-blue"
    />
    <AppHeader current-page="products">
      <AppMenu />
    </AppHeader>

    <div class="jumbotron">
      <div class="title">
        <AppTitle>Reinforcement Learning<br /></AppTitle>
        As A Service
      </div>

      <div class="description">
        {{ PRODUCT_DESCRIPTION }}
      </div>

      <img :src="`/images/products/system.png`" class="desktop-image" />
      <img :src="`/images/products/system-mini.png`" class="mobile-image" />

      <div class="circle top">
        <img src="../../assets/pattern-circle.png" alt="" />
      </div>
    </div>

    <div class="product-image-header">
      <!-- <img :src="`/images/products/header.png`" alt="" /> -->
    </div>

    <Section
      title="An End-to-End Solution for AI-Driven Interventions"
      unlimited
    >
      <div class="product-card-matrix">
        <ProductCard
          title="Action-oriented monitoring"
          description="Easily visualize performance & inform decision-making"
        >
          <img
            :src="`/images/products/all-in-one/action-oriented-monitoring.png`"
            alt=""
            class="picture-action-oriented"
          />
        </ProductCard>

        <ProductCard
          title="Easy Integration"
          description="We seamlessly connect to your existing services"
        >
          <img
            :src="`/images/products/all-in-one/easy-integration.png`"
            alt=""
            class="picture-easy-integration"
          />
        </ProductCard>

        <ProductCard
          title="Personalized interventions at scale"
          description="Quickly put into production your ideas and reach your customers"
        >
          <img
            :src="`/images/products/all-in-one/notifications.png`"
            alt=""
            class="picture-notifications"
          />
        </ProductCard>

        <ProductCard
          title="Quick, accurate answers powered by LLMs"
          description="Get patient-specific and reliable insights to enhance healthcare delivery"
        >
          <img
            :src="`/images/products/all-in-one/llm.png`"
            alt=""
            class="picture-llm"
          />
        </ProductCard>
      </div>
    </Section>

    <Section
      title="Our AI platform in a nutshell"
      description=""
      className="section"
    >
      <div class="desktop-body">
        <div class="features">
          <div class="images">
            <img
              :src="`/images/products/features/product_preview_${activeFeatureIndex}.png`"
              alt=""
            />
          </div>

          <div class="list">
            <div
              v-for="(item, index) in state.features"
              :key="index"
              :class="[`item`, { active: index === activeFeatureIndex }]"
            >
              <div class="title" @click="handleItemClick(index)">
                {{ item.title }}
              </div>
              <div class="description" @click="handleItemClick(index)">
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-body">
        <div class="images">
          <div class="image">
            <img
              :src="`/images/products/features/product_preview_${activeFeatureIndex}.png`"
              alt=""
            />
          </div>
        </div>

        <div class="list">
          <Carousel :items-to-show="1">
            <Slide v-for="item of features" :key="item.title" class="slide">
              <div class="item active">
                <div class="title">{{ item.title }}</div>
                <div class="description">
                  {{ item.description }}
                </div>
              </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </Section>

    <Section
      v-for="(section, index) of sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      className="section"
    >
      <div class="desktop-body">
        <div class="images">
          <Carousel :items-to-show="1">
            <Slide
              v-for="feature of section.features.filter(
                (feat) => feat.imageUrl !== undefined
              )"
              :key="feature.imageUrl"
              class="slide"
            >
              <div class="image">
                <img :src="feature.imageUrl" alt="" />
              </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>

        <div class="features-list">
          <div v-for="feature of section.features" class="item">
            <img class="item-icon" :src="feature.icon" />
            <div class="title">{{ feature.title }}</div>
            <div class="description">
              {{ feature.description }}
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-body">
        <div class="features-list">
          <Carousel :items-to-show="1">
            <Slide
              v-for="feature of section.features"
              :key="feature.title"
              class="slide"
            >
              <div class="mobile-slide">
                <div class="image">
                  <img :src="feature.imageUrl" alt="" />
                </div>
                <div class="item">
                  <div class="title">{{ feature.title }}</div>
                  <div class="description">
                    {{ feature.description }}
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </Section>

    <ProductFooter />
    <GetInTouch />

    <!--
      <div class="demo">
        <div class="card">
          <div class="title">Request a Demo</div>
          <form ref="form" @submit.prevent="handleSendEmail">
            <div class="input">
              <input
                ref="email"
                type="email"
                name="user_email"
                placeholder="Your email"
                style="
                  font-family: Noto Sans, sans-serif;
                  text-decoration: none;
                "
              />
              <button class="button" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
-->
    <div class="hex">
      <img src="../../assets/pattern-hex.png" alt="" />
    </div>

    <div class="circle bottom">
      <img src="../../assets/pattern-circle.png" alt="" />
    </div>

    <AppFooter />

    <img
      src="../../assets/gradient-bottom-yellow.png"
      class="app__gradient-bottom-yellow"
    />
    <img
      src="../../assets/gradient-bottom-blue.png"
      class="app__gradient-bottom-blue"
    />
  </div>
</template>

<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";
import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import AppTitle from "@/components/AppTitle";
import GetInTouch from "@/components/GetInTouch";

import { features, sections } from "@/data/products";

import { onMounted, onUnmounted, reactive, ref } from "vue";
import emailjs from "@emailjs/browser";

import Section from "./components/Section/Section.vue";
import ProductCard from "./components/ProductCard";
import ProductFooter from "./components/ProductFooter";

import { PRODUCT_DESCRIPTION } from "./constants";

import "./Product.scss";

const FEATURE_INTERVAL = 10000;
const featuresRef = ref(features);
const form = ref(null);
const email = ref("");
const activeFeatureIndex = ref(0);

const state = reactive({
  features: [...features],
});

onMounted(() => {
  const intervalId = setInterval(() => {
    activeFeatureIndex.value =
      (activeFeatureIndex.value + 1) % state.features.length;
  }, FEATURE_INTERVAL);

  onUnmounted(() => {
    clearInterval(intervalId);
  });
});

const handleItemClick = (index: number) => {
  activeFeatureIndex.value = index;
  state.features.forEach((feature, i) => {
    feature.active = i === index;
  });
};

const handleSendEmail = () => {
  fetch(
    `https://hooks.slack.com/services/T04AWARHR1A/${
      import.meta.env.VITE_SLACK_WEBHOOK
    }`,
    {
      method: "POST",
      body: JSON.stringify({
        text: `New demo request from ${email.value.value}`,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>
