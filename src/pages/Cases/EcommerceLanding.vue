<template>
  <div class="cases ecommerce-landing">
    <AppHeader
      current-page="cases"
      class="ecommerce-landing__header ecommerce__header"
    >
      <AppMenu />
    </AppHeader>

    <div class="ecommerce-landing__container">
      <PageHeader
        description=""
        :showButton="true"
        className="cases__ecommerce_header"
        image="/images/cases/header_ecommerce.png"
      >
        <template #title>
          <div>
            <AppTitle>
              {{ messages?.header?.title }}
            </AppTitle>
          </div>
        </template>

        <template #subtitle>
          <div class="ecommerce-landing__subtitle">
            {{ messages?.header?.subtitle }}
          </div>
        </template>
      </PageHeader>

      <div class="ecommerce-landing__content">
        <SideTextSection
          :title="messages?.sectionDrivesCustomer?.title"
          :text="messages?.sectionDrivesCustomer?.text"
          :highlightedIndices="[]"
        />

        <ItemsWithSummary
          :title="messages?.sectionTransforming?.title"
          :subtitle="messages?.sectionTransforming?.subtitle"
          :items="messages?.sectionTransforming?.items"
        />

        <SideTextSection
          :title="messages?.sectionTeamFocus?.title"
          :text="messages?.sectionTeamFocus?.text"
          :highlightedIndices="[]"
        />

        <Matrix
          :title="messages?.sectionMarketing?.title || ''"
          :items="messages?.sectionMarketing?.items || []"
          :subtitle="messages?.sectionMarketing?.subtitle || ''"
        />

        <SideTextSection
          :title="messages?.sectionForecasting?.title"
          :text="messages?.sectionForecasting?.text"
          :highlightedIndices="[]"
        />

        <Matrix
          :title="messages?.sectionInsights?.title || ''"
          :items="messages?.sectionInsights?.items || []"
          :subtitle="messages?.sectionInsights?.subtitle || ''"
        />

        <div class="ecommerce-landing__section">
          <CiteCard
            :text="messages?.cites?.[0]?.text"
            :who="messages?.cites?.[0]?.name"
            :org="messages?.cites?.[0]?.position"
          />
        </div>

        <div class="ecommerce-landing__section">
          <UseCases :items="messages?.common?.useCases" />
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
import CiteCard from "./components/CiteCard/CiteCard.vue";
import UseCases from "./components/UseCases";

import "./cases.scss";
import "./ecommerce-landing.scss";

const { currentTranslations: messages } = useTranslations("cases/ecommerce");
</script>
