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
        <AppTitle>
          {{ messages?.cases?.titles?.government?.first }}
        </AppTitle>

        <div class="cases__government_header__subtitle">
          {{ messages?.cases?.titles?.government?.second?.split(" ")[0] }}
          <br />
          {{
            messages?.cases?.titles?.government?.second
              .split(" ")
              .slice(1, 3)
              .join(" ")
          }}
          <br />
          {{
            messages?.cases?.titles?.government?.second
              .split(" ")
              .slice(3)
              .join(" ")
          }}
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

        <template #extra-image>
          <div class="key-app-items">
            <div
              class="key-app-items__item"
              v-for="(item, index) in messages?.cases?.rssb?.features"
              :key="index"
            >
              <ul>
                <li>{{ item }}</li>
              </ul>
            </div>
          </div>
        </template>
      </TextImage>

      <div class="m2m-footer">
        <Quote
          :text="messages?.cases?.rssb?.quote?.text"
          :from="messages?.cases?.rssb?.quote?.from"
        />
        <ShortDescriptionList
          :items="messages?.cases?.rssb?.items"
          :title="messages?.cases?.rssb?.itemsTitle"
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
