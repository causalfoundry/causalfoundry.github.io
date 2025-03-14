<template>
  <div class="cases">
    <AppHeader current-page="cases">
      <AppMenu />
    </AppHeader>

    <PageHeader
      :description="messages?.cases?.descriptions?.healthcare"
      :showButton="true"
      className="cases__healthcare_header"
      image="/images/cases/header_healthcare.png"
    >
      <template #title>
        <AppTitle>
          {{ messages?.cases?.titles?.healthcare?.first }}
        </AppTitle>
        {{ messages?.cases?.titles?.healthcare?.second }}
      </template>
    </PageHeader>

    <SuccessCase :title="messages?.cases?.m2m?.firstSection?.title">
      <Logos>
        <template #first>
          <img :src="`/images/cases/cf-logo.png`" />
        </template>
        <template #second>
          <img :src="`/images/cases/m2m/logo.png`" />
        </template>
      </Logos>
      <TextImage
        :title="messages?.cases?.m2m?.firstSection?.title"
        :text="messages?.cases?.m2m?.firstSection?.text"
        primary
      >
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
        :title="messages?.cases?.m2m?.secondSection?.title"
        :text="messages?.cases?.m2m?.secondSection?.text"
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
            <div
              class="key-app-features__item"
              v-for="(item, index) in messages?.cases?.m2m?.items"
              :key="index"
            >
              <img :src="`/images/cases/m2m/${item.icon}`" />
              <span> {{ item.text }} </span>
            </div>
          </div>
        </template>
      </TextImage>

      <div class="m2m-footer">
        <Quote
          :text="messages?.cases?.m2m?.quote?.text"
          :from="messages?.cases?.m2m?.quote?.from"
        />
        <ShortDescriptionList :items="messages?.cases?.m2m?.items" />
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

import Logos from "./components/Logos";

import "./cases.scss";

const { currentTranslations: messages } = useTranslations("cases");
</script>
