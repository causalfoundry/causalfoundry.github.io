<template>
  <div class="cases">
    <AppHeader current-page="cases">
      <AppMenu />
    </AppHeader>

    <SuccessCase title="CASE 1. mothers2mothers">
      <TextImage :title="M2M_FIRST_TITLE" :text="M2M_FIRST_TEXT">
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

      <Quote :text="M2M_QUOTE_TEXT" :from="M2M_QUOTE_FROM" />

      <ShortDescriptionList :items="M2M_ITEMS" />
    </SuccessCase>

    <SuccessCase title="CASE 2. SwipeRX">
      <TextImage :title="SWIPERX_FIRST_TITLE" :text="SWIPERX_FIRST_TEXT">
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
} from "./constants";

import "./cases.scss";
</script>
