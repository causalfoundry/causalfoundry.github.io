<template>
  <div class="cases gaming">
    <AppHeader current-page="cases">
      <AppMenu />
    </AppHeader>

    <PageHeader
      description=""
      :showButton="true"
      className="cases__gaming_header"
      image="/images/cases/gaming_header.jpg"
    >
      <template #title>
        <div>
          <AppTitle>
            {{ messages?.cases?.titles?.gaming?.first }}
          </AppTitle>
        </div>
      </template>

      <template #subtitle>
        <div class="gaming__subtitle">
          {{ messages?.cases?.descriptions?.gaming }}
        </div>
      </template>
    </PageHeader>

    <div class="gaming__content">
      <SideTextSection
        :title="messages?.cases?.gaming?.sectionExperiences?.title"
        :text="messages?.cases?.gaming?.sectionExperiences?.text"
      />

      <PrecisionPlayerTargeting />

      <SideTextSection
        :title="messages?.cases?.gaming?.adaptiveGaming?.title"
        :text="messages?.cases?.gaming?.adaptiveGaming?.text"
        :highlightedIndices="
          messages?.cases?.gaming?.adaptiveGaming?.highlightedTitleItems
        "
      />

      <div class="gaming__cards">
        <CultureItem
          v-for="(item, index) in messages?.cases?.gaming?.cards"
          :key="index"
          :title="item.title"
          :text="item.text"
          :icon="item.icon"
        />
      </div>

      <SideTextSection
        :title="messages?.cases?.gaming?.smartMonetization?.title"
        :text="messages?.cases?.gaming?.smartMonetization?.text"
        :highlightedIndices="
          messages?.cases?.gaming?.smartMonetization?.highlightedTitleItems
        "
      />

      <Matrix />

      <CollapsibleItems
        :items="messages?.cases?.gaming?.items.values"
        :title="messages?.cases?.gaming?.items.title"
      />

      <GameDistribution />

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
import CollapsibleItems from "./components/CollapsibleItems";
import GameDistribution from "./components/GameDistribution";

import "./cases.scss";
import "./gaming.scss";

const { currentTranslations: messages } = useTranslations("cases");
</script>
