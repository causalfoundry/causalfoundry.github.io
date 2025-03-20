<template>
  <div class="cases">
    <AppHeader current-page="cases">
      <AppMenu />
    </AppHeader>

    <PageHeader
      :description="messages?.cases?.descriptions?.government"
      :showButton="true"
      className="cases__government_header"
      image="/images/cases/header_government.png"
    >
      <template #title>
        <div>
          {{ messages?.cases?.titles?.government?.first }}

          <AppTitle>
            {{ messages?.cases?.titles?.government?.second }}
          </AppTitle>
        </div>
      </template>
    </PageHeader>

    <SuccessCase :title="messages?.cases?.rssb?.title" className="cases__rssb">
      <Logos>
        <template #first>
          <img :src="`/images/cases/cf-logo.png`" />
        </template>
        <template #second>
          <img :src="`/images/cases/rssb/logo.png`" />
        </template>
      </Logos>
      <TextImage
        :title="messages?.cases?.rssb?.firstSection?.title"
        :text="messages?.cases?.rssb?.firstSection?.text"
        primary
      >
        <template #image>
          <img :src="`/images/cases/rssb/social-icon.png`" />
        </template>
      </TextImage>

      <TextImage
        :title="messages?.cases?.rssb?.secondSection?.title"
        :text="messages?.cases?.rssb?.secondSection?.text"
        :reversed="true"
        className="rssb-text-image"
      >
        <template #image>
          <div class="">
            <img :src="`/images/cases/rssb/diagram_engagement.png`" />
          </div>
        </template>
      </TextImage>

      <div class="feature-items">
        <CultureItem
          v-for="(item, index) in messages?.cases?.rssb?.features"
          :key="index"
          :title="item.title"
          :text="item.text"
        />
      </div>
    </SuccessCase>

    <SuccessCase
      :title="messages?.cases?.rssb?.approach?.title"
      className="government-approach"
    >
      <div class="section-text">
        <div
          v-for="(text, index) in messages?.cases?.rssb?.approach?.texts"
          :key="index"
        >
          {{ text }}
        </div>
      </div>
    </SuccessCase>

    <div class="government-footer">
      <Quote
        :text="messages?.cases?.rssb?.quote?.text"
        :from="messages?.cases?.rssb?.quote?.from"
        customClass="colored-background"
      />
      <ShortDescriptionList
        :items="messages?.cases?.rssb?.items"
        :title="messages?.cases?.rssb?.itemsTitle"
      />
    </div>

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
import { useTranslations } from "@/composables/useTranslations";

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
import CultureItem from "@/pages/About/components/CultureItem/CultureItem";

import Logos from "./components/Logos";

import "./cases.scss";

const { currentTranslations: messages } = useTranslations("cases");
</script>
