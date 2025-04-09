<template>
  <div class="cases healthcare-landing">
    <AppHeader current-page="cases" class="healthcare-landing__header">
      <AppMenu />
    </AppHeader>

    <div class="healthcare-landing__container">
      <PageHeader
        description=""
        :showButton="true"
        className="cases__healthcare-landing_header"
        image="/images/cases/header_healthcare.png"
      >
        <template #title>
          <div>
            <AppTitle>
              {{ messages?.header?.title }}
            </AppTitle>
          </div>
        </template>

        <template #subtitle>
          <div class="healthcare-landing__subtitle">
            {{ messages?.header?.subtitle }}
          </div>
        </template>
      </PageHeader>

      <div class="healthcare-landing__content">
        <SideTextSection
          :title="messages?.sectionAdapts?.title"
          :text="messages?.sectionAdapts?.text"
          :highlightedIndices="[]"
        />

        <ItemsWithSummary
          :title="messages?.sectionTransforming?.title"
          :subtitle="messages?.sectionTransforming?.subtitle"
          :items="messages?.sectionTransforming?.items"
        />

        <SideTextSection
          :title="messages?.sectionEmpowering?.title"
          :text="messages?.sectionEmpowering?.text"
          :highlightedIndices="[]"
        />

        <Matrix
          :title="messages?.sectionEfficiency?.title || ''"
          :items="messages?.sectionEfficiency?.items || []"
          :subtitle="messages?.sectionEfficiency?.subtitle || ''"
        />

        <SideTextSection
          :title="messages?.sectionOptimizing?.title"
          :text="messages?.sectionOptimizing?.text"
          :highlightedIndices="[]"
        />

        <div class="healthcare-landing__cards">
          <AppTitle>
            {{ messages?.sectionInsights?.title }}
          </AppTitle>

          <div class="healthcare-landing__cards-items">
            <CultureItem
              v-for="(item, index) in messages?.sectionInsights?.items"
              :key="index"
              :title="item.title"
              :text="item.text"
            />
          </div>
        </div>

        <UpButton />

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
import UpButton from "@/components/UpButton";
import ItemsWithSummary from "./components/ItemsWithSummary";

import "./cases.scss";
import "./healthcare-landing.scss";

const { currentTranslations: messages } = useTranslations("cases/healthcare");
</script>
