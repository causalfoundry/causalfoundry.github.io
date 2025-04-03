<template>
  <div class="cases gaming">
    <AppHeader current-page="cases">
      <AppMenu />
    </AppHeader>

    <PageHeader
      :description="messages?.cases?.descriptions?.gaming"
      :showButton="true"
      className="cases__gaming_header"
      image="/images/cases/header_gaming.png"
    >
      <template #title>
        <div>
          {{ messages?.cases?.titles?.gaming?.first }}

          <AppTitle>
            {{ messages?.cases?.titles?.gaming?.second }}
          </AppTitle>
        </div>
      </template>
    </PageHeader>

    <SideTextSection
      :title="messages?.cases?.gaming?.sectionExperiences?.title"
      :text="messages?.cases?.gaming?.sectionExperiences?.text"
    />

    <SideTextSection
      :title="messages?.cases?.gaming?.adaptiveGaming?.title"
      :text="messages?.cases?.gaming?.adaptiveGaming?.text"
      :highlightedIndices="
        messages?.cases?.gaming?.adaptiveGaming?.highlightedTitleItems
      "
    />

    <SideTextSection
      :title="messages?.cases?.gaming?.smartMonetization?.title"
      :text="messages?.cases?.gaming?.smartMonetization?.text"
      :highlightedIndices="
        messages?.cases?.gaming?.smartMonetization?.highlightedTitleItems
      "
    />

    <PrecisionPlayerTargeting />

    <Matrix />

    <div class="gaming__cards">
      <CultureItem
        v-for="(item, index) in messages?.cases?.gaming?.cards"
        :key="index"
        :title="item.title"
        :text="item.text"
        :icon="item.icon"
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
import CultureItem from "@/components/CultureItem/CultureItem";

import Logos from "./components/Logos";

import SideTextSection from "./components/SideTextSection";
import PrecisionPlayerTargeting from "./components/PrecisionPlayerTargeting";
import Matrix from "./components/Matrix";

import "./cases.scss";
import "./gaming.scss";

const { currentTranslations: messages } = useTranslations("cases");
</script>
