<template>
  <div class="cases">
    <AppHeader current-page="cases">
      <AppMenu />
    </AppHeader>

    <SuccessCase title="CASE 1. mothers2mothers">
      <TextImage :title="M2M_FIRST_TITLE" :text="M2M_FIRST_TEXT" primary>
        <template #image>
          <img :src="`/images/cases/m2m/first.png`" />
        </template>
      </TextImage>

      <Image>
        <template #image>
          <img :src="`/images/cases/m2m/dashboard.png`" />
        </template>
      </Image>

      <TextImage
        :title="M2M_SECOND_TITLE"
        :text="M2M_SECOND_TEXT"
        :reversed="true"
      >
        <template #image>
          <div class="images_phones">
            <img :src="`/images/cases/m2m/phones.png`" />
          </div>
        </template>
      </TextImage>

      <div>
        <Quote :text="M2M_QUOTE_TEXT" :from="M2M_QUOTE_FROM" />
        <ShortDescriptionList :items="M2M_ITEMS" />
      </div>
    </SuccessCase>

    <SuccessCase title="CASE 2. SwipeRX">
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
          <img :src="`/images/cases/swiperx/chart.png`" />
        </template>

        <template #image>
          <div class="image-big-phones">
            <img :src="`/images/cases/swiperx/bigphones.png`" />
          </div>
        </template>
      </TextImage>

      <Quote :text="SWIPERX_QUOTE_TEXT" :from="SWIPERX_QUOTE_FROM" />
    </SuccessCase>

    <SuccessCase title="CASE 3. Momentum">
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

      <TextImage :title="MOMENTUM_SECOND_TITLE" :text="MOMENTUM_SECOND_TEXT">
        <template #image>
          <div class="">
            <img :src="`/images/cases/momentum/aide_phones.png`" />
          </div>
        </template>
      </TextImage>
      <div>
        <Quote :text="MOMENTUM_QUOTE_TEXT" :from="MOMENTUM_QUOTE_FROM" />
        <ShortDescriptionList :items="MOMENTUM_ITEMS" />
      </div>
    </SuccessCase>
  </div>
</template>

<script setup lang="ts">
import Quote from "./components/Quote";
import SuccessCase from "./components/SuccessCase";
import TextImage from "./components/TextImage";
import Image from "./components/Image";

import AppHeader from "@/components/AppHeader";

import ShortDescriptionList from "@/components/ShortDescriptionList";

import {
  SWIPERX_QUOTE_TEXT,
  SWIPERX_QUOTE_FROM,
  SWIPERX_FIRST_TITLE,
  SWIPERX_FIRST_TEXT,
  SWIPERX_SECOND_TITLE,
  SWIPERX_SECOND_TEXT,
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
} from "./constants";

import "./cases.scss";
</script>
