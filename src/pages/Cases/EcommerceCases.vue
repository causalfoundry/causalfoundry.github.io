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
        <AppTitle>Built in Partnership</AppTitle>
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

    <SuccessCase title="CASE 2. Momentum">
      <Logos>
        <template #first>
          <img :src="`/images/cases/cf-logo.png`" />
        </template>
        <template #second>
          <img :src="`/images/cases/momentum/logo.png`" />
        </template>
      </Logos>
      <TextImage
          :title="MOMENTUM_FIRST_TITLE"
          :text="MOMENTUM_FIRST_TEXT"
          reversed
          primary
      >
        <template #image>
          <img :src="`/images/cases/momentum/aide-chemist.png`" />
        </template>
      </TextImage>

      <TextImage
          :title="MOMENTUM_SECOND_TITLE"
          :text="MOMENTUM_SECOND_TEXT"
          className="momentum-text-image"
      >
        <template #image>
          <div class="momentum-images">
            <img :src="`/images/cases/momentum/aide_phones.png`" />
          </div>
        </template>
      </TextImage>
      <div class="momentum-footer">
        <Quote :text="MOMENTUM_QUOTE_TEXT" :from="MOMENTUM_QUOTE_FROM" />
        <ShortDescriptionList :items="MOMENTUM_ITEMS" title="Key features" />
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
  ECOMMERCE_PAGE_DESCRIPTION,
  MOMENTUM_FIRST_TITLE,
  MOMENTUM_FIRST_TEXT,
  MOMENTUM_SECOND_TITLE,
  MOMENTUM_SECOND_TEXT,
  MOMENTUM_QUOTE_TEXT, MOMENTUM_QUOTE_FROM, MOMENTUM_ITEMS,
} from "./constants";

import "./cases.scss";
</script>
