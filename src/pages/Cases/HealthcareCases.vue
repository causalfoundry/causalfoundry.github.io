<template>
  <div class="cases">
    <AppHeader current-page="cases">
      <AppMenu />
    </AppHeader>

    <PageHeader
      :description="HEALTHCARE_PAGE_DESCRIPTION"
      :showButton="true"
      className="cases__healthcare_header"
      image="/images/cases/header_healthcare.png"
    >
      <template #title>
        <AppTitle>Built in Partnership</AppTitle>
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
  HEALTHCARE_PAGE_DESCRIPTION,
} from "./constants";

import "./cases.scss";
</script>
