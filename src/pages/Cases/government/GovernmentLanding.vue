<template>
  <div class="cases cases-landing">
    <AppHeader
      current-page="cases"
      class="cases-landing__header healtchare__header"
    >
      <AppMenu />
    </AppHeader>

    <div class="cases-landing__container">
      <PageHeader
        description=""
        :showButton="true"
        className="cases__government_header"
        image="/images/cases/header_government_landing-colors.png"
      >
        <template #button>
          <Button :value="messages?.linkText" @click="handleButtonClick" />
        </template>

        <template #title>
          <div>
            <AppTitle>
              {{ messages?.header?.title }}
            </AppTitle>
          </div>
        </template>

        <template #subtitle>
          <div class="cases-landing__subtitle">
            {{ messages?.header?.subtitle.split(" ").slice(0, 3).join(" ") }}
            <br />
            {{ messages?.header?.subtitle.split(" ").slice(3).join(" ") }}
          </div>
        </template>
      </PageHeader>

      <div class="cases-landing__content" id="content">
        <div class="cases-landing__section">
          <SideTextSection
            :title="messages?.sectionLearns?.title"
            :text="messages?.sectionLearns?.text.join('\n')"
            :highlightedIndices="[]"
          />
        </div>

        <ItemsWithSummary
          :title="messages?.sectionTransforming?.title"
          :subtitle="messages?.sectionTransforming?.subtitle"
          :items="messages?.sectionTransforming?.items"
        >
          <template #image>
            <img
              :src="`/images/cases/governments/governments-items.png`"
              alt="Causal Foundry"
            />
          </template>
        </ItemsWithSummary>

        <div class="cases-landing__section">
          <SideTextSection
            :title="messages?.sectionDataDriven?.title"
            :text="messages?.sectionDataDriven?.text"
            :highlightedIndices="[]"
          />
        </div>

        <div class="cases-landing__cards">
          <div class="cases-landing__cards__title">
            <AppTitle>
              {{ messages?.sectionSupport?.title }}
            </AppTitle>
          </div>

          <div class="cases-landing__cards-items">
            <CultureItem
              v-for="(item, index) in messages?.sectionSupport?.items"
              :key="index"
              :title="item.title"
              :text="item.text"
            />
          </div>
        </div>

        <div class="cases-landing__section">
          <CiteCard
            :text="messages?.cites?.[0]?.text"
            :who="messages?.cites?.[0]?.name"
            :org="messages?.cites?.[0]?.position"
            logo="/images/cases/rssb/logo.png"
          />
        </div>

        <div class="cases-landing__section">
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
import { useRouter } from "vue-router";

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppMenu from "@/components/AppMenu";

import AppTitle from "@/components/AppTitle";
import ShortDescriptionList from "@/components/ShortDescriptionList";

import GetInTouch from "@/components/GetInTouch";
import PageHeader from "@/components/PageHeader";
import CultureItem from "@/components/CultureItem/CultureItem";
import UpButton from "@/components/UpButton";

import Logos from "../components/Logos";

import SideTextSection from "../components/SideTextSection";
import Matrix from "../components/Matrix";
import CollapsibleItems from "../components/CollapsibleItems";
import GameDistribution from "../components/GameDistribution";
import ItemsWithSummary from "../components/ItemsWithSummary";
import CiteCard from "../components/CiteCard/CiteCard.vue";
import UseCases from "../components/UseCases";
import Quote from "../components/Quote";
import SuccessCase from "../components/SuccessCase";
import TextImage from "../components/TextImage";
import Image from "../components/Image";
import Button from "@/ui-components/button";

import "../cases.scss";
import "../cases-landing.scss";

const router = useRouter();

function handleButtonClick(event: MouseEvent) {
  document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
}

const { currentTranslations: messages } = useTranslations("cases/government");
</script>
