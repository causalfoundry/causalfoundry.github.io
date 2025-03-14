<template>
  <div class="cases">
    <AppHeader current-page="cases">
      <AppMenu />
    </AppHeader>

    <PageHeader
      :description="messages?.cases?.descriptions?.ecommerce"
      :showButton="true"
      className="cases__ecommerce_header"
      image="/images/cases/header_ecommerce.png"
    >
      <template #title>
        <AppTitle>
          {{ messages?.cases?.titles?.ecommerce?.first }}
        </AppTitle>
        {{ messages?.cases?.titles?.ecommerce?.second }}
      </template>
    </PageHeader>

    <SuccessCase :title="messages?.cases?.swiperx?.title">
      <Logos>
        <template #first>
          <img :src="`/images/cases/cf-logo.png`" />
        </template>
        <template #second>
          <img :src="`/images/cases/swiperx/logo.png`" />
        </template>
      </Logos>
      <TextImage
        :title="messages?.cases?.swiperx?.firstSection?.title"
        :text="messages?.cases?.swiperx?.firstSection?.text"
        primary
      >
        <template #image>
          <img :src="`/images/cases/swiperx/first.png`" />
        </template>
      </TextImage>

      <TextImage
        :title="messages?.cases?.swiperx?.secondSection?.title"
        :text="messages?.cases?.swiperx?.secondSection?.text"
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
        <Quote
          :text="messages?.cases?.swiperx?.quote?.text"
          :from="messages?.cases?.swiperx?.quote?.from"
        />
        <ShortDescriptionList
          :items="messages?.cases?.swiperx?.items"
          highlighted
          title="What we achieved"
          :description="messages?.cases?.swiperx?.achievements"
        />
      </div>
    </SuccessCase>

    <SuccessCase :title="messages?.cases?.momentum?.title">
      <Logos>
        <template #first>
          <img :src="`/images/cases/cf-logo.png`" />
        </template>
        <template #second>
          <img :src="`/images/cases/momentum/logo.png`" />
        </template>
      </Logos>
      <TextImage
        :title="messages?.cases?.momentum?.firstSection?.title"
        :text="messages?.cases?.momentum?.firstSection?.text"
        reversed
        primary
      >
        <template #image>
          <img :src="`/images/cases/momentum/aide-chemist.png`" />
        </template>
      </TextImage>

      <TextImage
        :title="messages?.cases?.momentum?.secondSection?.title"
        :text="messages?.cases?.momentum?.secondSection?.text"
        className="momentum-text-image"
      >
        <template #image>
          <div class="momentum-images">
            <img :src="`/images/cases/momentum/aide_phones.png`" />
          </div>
        </template>
      </TextImage>
      <div class="momentum-footer">
        <Quote
          :text="messages?.cases?.momentum?.quote?.text"
          :from="messages?.cases?.momentum?.quote?.from"
        />
        <ShortDescriptionList
          :items="messages?.cases?.momentum?.items"
          title="Key features"
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
import { useTranslations } from "@/composables/useTranslations";

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

import "./cases.scss";

const { currentTranslations: messages } = useTranslations("cases");
</script>
