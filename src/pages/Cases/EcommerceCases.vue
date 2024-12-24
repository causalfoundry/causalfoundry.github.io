<template>
  <div class="cases">
    <AppHeader current-page="cases">
      <AppMenu />
    </AppHeader>

    <PageHeader
      :description="ECOMMERCE_PAGE_DESCRIPTION"
      :showButton="true"
      className="cases__ecommerce_header"
      image="/images/cases/header_ecommerce.png"
    >
      <template #title>
        <AppTitle>Build in Partnership</AppTitle>
        with Causal Foundry for E-Commerce
      </template>
    </PageHeader>

    <SuccessCase title="CASE 1. SwipeRX">
      <Logos>
        <template #first>
          <img :src="`/images/cases/cf-logo.png`" />
        </template>
        <template #second>
          <img :src="`/images/cases/swiperx/logo.png`" />
        </template>
      </Logos>
      <TextImage
        :title="SWIPERX_FIRST_TITLE"
        :text="SWIPERX_FIRST_TEXT"
        primary
      >
        <template #image>
          <img :src="`/images/cases/swiperx/first.png`" />
        </template>
      </TextImage>

      <TextImage
        :title="SWIPERX_SECOND_TITLE"
        :text="SWIPERX_SECOND_TEXT"
        reversed
      >
        <template #extra-image>
          <img :src="`/images/cases/swiperx/chart2.png`" />
        </template>

        <template #image>
          <div class="image-big-phones">
            <img :src="`/images/cases/swiperx/bigphones.png`" />
          </div>
        </template>
      </TextImage>

      <div>
        <Quote :text="SWIPERX_QUOTE_TEXT" :from="SWIPERX_QUOTE_FROM" />
        <ShortDescriptionList
          :items="SWIPERX_ITEMS"
          highlighted
          title="What we achieved"
          :description="SWIPERX_ACHIEVEMENTS"
        />
      </div>
    </SuccessCase>

    <GetInTouch />
    <img
      src="/src/assets/pattern-wave.png"
      class="cases__pattern-wave"
      alt="Wave Pattern"
    />
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
import Quote from "./components/Quote";
import SuccessCase from "./components/SuccessCase";
import TextImage from "./components/TextImage";
import Image from "./components/Image";

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppMenu from "@/components/AppMenu";

import AppTitle from "@/components/AppTitle";
import ShortDescriptionList from "@/components/ShortDescriptionList";

import GetInTouch from "@/components/GetInTouch";
import PageHeader from "@/components/PageHeader";

import Logos from "./components/Logos";

import {
  SWIPERX_QUOTE_TEXT,
  SWIPERX_QUOTE_FROM,
  SWIPERX_FIRST_TITLE,
  SWIPERX_FIRST_TEXT,
  SWIPERX_SECOND_TITLE,
  SWIPERX_SECOND_TEXT,
  SWIPERX_ITEMS,
  SWIPERX_ACHIEVEMENTS,
  M2M_FIRST_TITLE,
  M2M_FIRST_TEXT,
  M2M_SECOND_TITLE,
  M2M_SECOND_TEXT,
  M2M_QUOTE_TEXT,
  M2M_QUOTE_FROM,
  M2M_ITEMS,
  MOMENTUM_ITEMS,
  MOMENTUM_FIRST_TITLE,
  MOMENTUM_FIRST_TEXT,
  MOMENTUM_SECOND_TITLE,
  MOMENTUM_SECOND_TEXT,
  MOMENTUM_QUOTE_TEXT,
  MOMENTUM_QUOTE_FROM,
  PAGE_DESCRIPTION, ECOMMERCE_PAGE_DESCRIPTION,
} from "./constants";

import "./cases.scss";
</script>
