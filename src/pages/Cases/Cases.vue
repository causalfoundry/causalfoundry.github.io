<template>
  <div class="cases">
    <AppHeader current-page="cases">
      <AppMenu />
    </AppHeader>

    <PageHeader
      :description="PAGE_DESCRIPTION"
      className="cases__header"
      image="/images/cases/top-hospital.png"
    >
      <template #title>
        <AppTitle>Build in Partnership</AppTitle>
        with Causal Foundry for Healthcare
      </template>
    </PageHeader>

    <SuccessCase title="CASE 1. mothers2mothers">
      <Logos>
        <template #first>
          <img :src="`/images/cases/cf-logo.png`" />
        </template>
        <template #second>
          <img :src="`/images/cases/m2m/logo.png`" />
        </template>
      </Logos>
      <TextImage :title="M2M_FIRST_TITLE" :text="M2M_FIRST_TEXT" primary>
        <template #image>
          <img :src="`/images/cases/m2m/first.png`" />
        </template>
      </TextImage>

      <Image>
        <template #image>
          <div class="m2m-dashboard">
            <img :src="`/images/cases/m2m/dashboard.png`" />
          </div>
        </template>
      </Image>

      <TextImage
        :title="M2M_SECOND_TITLE"
        :text="M2M_SECOND_TEXT"
        :reversed="true"
        className="charm-text-image"
      >
        <template #image>
          <div class="images-phones">
            <img :src="`/images/cases/m2m/phones.png`" />
          </div>
        </template>

        <template #extra-image>
          <div class="key-app-features-title">Key App Features</div>

          <div class="key-app-features">
            <div class="key-app-features__item">
              <img :src="`/images/cases/m2m/calendar_month.png`" />
              <span> Create, Track and Manage Appointments </span>
            </div>
            <div class="key-app-features__item">
              <img :src="`/images/cases/m2m/bar_chart_4_bars.png`" />
              <span> Track Personal Progress and KPI </span>
            </div>

            <div class="key-app-features__item">
              <img :src="`/images/cases/m2m/ecg_heart.png`" />
              <span> Manage Clients In a Few Taps </span>
            </div>

            <div class="key-app-features__item">
              <img :src="`/images/cases/m2m/bid_landscape.png`" />
              <span> Track and Manage Peer Mentor Performance </span>
            </div>
          </div>
        </template>
      </TextImage>

      <div class="m2m-footer">
        <Quote :text="M2M_QUOTE_TEXT" :from="M2M_QUOTE_FROM" />
        <ShortDescriptionList :items="M2M_ITEMS" />
      </div>
    </SuccessCase>

    <SuccessCase title="CASE 2. SwipeRX">
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
          <img :src="`/images/cases/swiperx/chart.png`" />
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

    <SuccessCase title="CASE 3. Momentum">
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
  PAGE_DESCRIPTION,
} from "./constants";

import "./cases.scss";
</script>
