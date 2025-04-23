<template>
  <div class="cases gaming">
    <AppHeader current-page="cases" class="gaming__header">
      <AppMenu />
    </AppHeader>

    <div class="gaming__container">
      <PageHeader
        description=""
        :showButton="true"
        className="cases__gaming_header"
        image="/images/cases/gaming/game-header-mobile.jpg"
      >
        <template #title>
          <div>
            <AppTitle>
              {{ messages?.mainTitles?.first }}
            </AppTitle>
          </div>
        </template>

        <template #subtitle>
          <div class="gaming__subtitle">
            {{ messages?.description?.split(" ").slice(0, 3).join(" ") }}
            <br />
            {{ messages?.description?.split(" ").slice(3).join(" ") }}
          </div>
        </template>
      </PageHeader>

      <div class="gaming__content">
        <SideTextSection
          :title="messages?.sectionExperiences?.title"
          :text="messages?.sectionExperiences?.text"
        />

        <ItemsWithSummary
          :title="messages?.precisionPlayerTargeting?.title"
          :subtitle="messages?.precisionPlayerTargeting?.subtitle"
          :items="messages?.precisionPlayerTargeting?.items"
        />

        <SideTextSection
          :title="messages?.adaptiveGaming?.title"
          :text="messages?.adaptiveGaming?.text"
          :highlightedIndices="messages?.adaptiveGaming?.highlightedTitleItems"
        />

        <div class="gaming__cards">
          <CultureItem
            v-for="(item, index) in messages?.cards"
            :key="index"
            :title="item.title"
            :text="item.text"
            :icon="item.icon"
          />
        </div>

        <SideTextSection
          :title="messages?.smartMonetization?.title"
          :text="messages?.smartMonetization?.text"
          :highlightedIndices="
            messages?.smartMonetization?.highlightedTitleItems
          "
        />

        <Matrix
          :title="messages?.personalizedContent?.title || ''"
          :items="messages?.personalizedContent?.items || []"
        />

        <CollapsibleItems
          :items="messages?.items?.values || []"
          :title="messages?.items?.title || ''"
        />

        <GameDistribution />

        <UpButton />

        <GetInTouch />
        <img
          src="/src/assets/pattern-wave.png"
          class="cases__pattern-wave"
          alt="Wave Pattern"
        />
        <AppFooter />

        <img
          src="/src/assets/gradient-bottom-yellow.png"
          class="app__gradient-bottom-yellow"
        />
        <img
          src="/src/assets/gradient-bottom-blue.png"
          class="app__gradient-bottom-blue"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTranslations } from "@/composables/useTranslations";

import Quote from "../components/Quote";
import SuccessCase from "../components/SuccessCase";
import TextImage from "../components/TextImage";
import Image from "../components/Image";

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppMenu from "@/components/AppMenu";

import AppTitle from "@/components/AppTitle";
import ShortDescriptionList from "@/components/ShortDescriptionList";

import GetInTouch from "@/components/GetInTouch";
import PageHeader from "@/components/PageHeader";
import CultureItem from "@/components/CultureItem/CultureItem";

import Logos from "../components/Logos";

import SideTextSection from "../components/SideTextSection";
import Matrix from "../components/Matrix";
import CollapsibleItems from "../components/CollapsibleItems";
import GameDistribution from "../components/GameDistribution";
import UpButton from "@/components/UpButton";
import ItemsWithSummary from "../components/ItemsWithSummary";

import "../cases.scss";
import "./gaming.scss";

const { currentTranslations: messages } = useTranslations("cases/gaming");
</script>
