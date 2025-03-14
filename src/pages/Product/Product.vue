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
        <AppTitle>{{ messages?.product?.title_first }}<br /></AppTitle>
        {{ messages?.product?.title_second }}
      </div>

      <div class="description">
        {{ messages?.product?.description }}
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

    <Section :title="messages?.product?.matrix?.title" unlimited>
      <div class="product-card-matrix">
        <ProductCard
          :title="messages?.product?.matrix?.cards?.monitoring?.title"
          :description="
            messages?.product?.matrix?.cards?.monitoring?.description
          "
        >
          <img
            :src="`/images/products/all-in-one/action-oriented-monitoring.png`"
            alt=""
            class="picture-action-oriented"
          />
        </ProductCard>

        <ProductCard
          :title="messages?.product?.matrix?.cards?.integration?.title"
          :description="
            messages?.product?.matrix?.cards?.integration?.description
          "
        >
          <img
            :src="`/images/products/all-in-one/easy-integration.png`"
            alt=""
            class="picture-easy-integration"
          />
        </ProductCard>

        <ProductCard
          :title="messages?.product?.matrix?.cards?.notifications?.title"
          :description="
            messages?.product?.matrix?.cards?.notifications?.description
          "
        >
          <img
            :src="`/images/products/all-in-one/notifications.png`"
            alt=""
            class="picture-notifications"
          />
        </ProductCard>

        <ProductCard
          :title="messages?.product?.matrix?.cards?.llm?.title"
          :description="messages?.product?.matrix?.cards?.llm?.description"
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
      :title="messages?.product?.features?.title"
      :description="messages?.product?.features?.description"
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
      v-for="(section, index) of messages?.product?.sections"
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
import {
  computed,
  ref,
  watchEffect,
  onMounted,
  onUnmounted,
  reactive,
} from "vue";
import {} from "vue";
import { useI18n } from "vue-i18n";

import { Carousel, Pagination, Slide } from "vue3-carousel";

import emailjs from "@emailjs/browser";
import { useTranslations } from "@/composables/useTranslations";

import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import AppTitle from "@/components/AppTitle";
import GetInTouch from "@/components/GetInTouch";

import { features, sections } from "@/data/products";

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

const { currentTranslations: messages } = useTranslations("product");

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
