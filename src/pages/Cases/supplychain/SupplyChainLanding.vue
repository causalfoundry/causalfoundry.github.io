<template>
  <div class="cases cases-landing supply-chain-landing">
    <AppHeader
      current-page="cases"
      class="cases-landing__header supplychain__header"
    >
      <AppMenu />
    </AppHeader>

    <div class="cases-landing__container">
      <PageHeader
        description=""
        :showButton="true"
        className="cases__supplychain_header"
        image="/images/cases/header_supply_chain.png"
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
            {{ messages?.header?.subtitle.split(" ").slice(3, 8).join(" ") }}
            <br />
            {{ messages?.header?.subtitle.split(" ").slice(8).join(" ") }}
          </div>
        </template>
      </PageHeader>

      <div class="cases-landing__content" id="content">
        <div class="cases-landing__section">
          <SideTextSection
            :title="messages?.sectionEcosystem?.title"
            :text="messages?.sectionEcosystem?.text"
            :highlightedIndices="[]"
          />
        </div>

        <div class="cases-landing__section">
          <LabelCard
            :text="messages?.cardForecast?.text"
            :startIndex="messages?.cardForecast?.startIndex"
            :endIndex="messages?.cardForecast?.endIndex"
          />
        </div>

        <div class="cases-landing__section">
          <TwoColumnBlock
            :title="messages?.sectionOptimizeDemand?.title"
            :showTopBorder="true"
            subtitle=""
          >
            <template #left>
              <div>
                {{ messages?.sectionOptimizeDemand?.subtitle }}
              </div>
            </template>
            <template #right>
              <img
                width="300px"
                src="/images/cases/supplychain/supply.png"
                alt="Demand"
              />
            </template>
          </TwoColumnBlock>
        </div>

        <div class="cases-landing__section supplychain-cards">
          <CultureItem
            v-for="(item, index) in messages?.sectionNumbered?.items"
            :key="index"
            :title="item.title"
            :text="item.text"
          >
          </CultureItem>
        </div>

        <div class="cases-landing__section">
          <LabelCard
            :text="messages?.cardDemand?.text"
            :startIndex="messages?.cardDemand?.startIndex"
            :endIndex="messages?.cardDemand?.endIndex"
          />
        </div>

        <div class="cases-landing__section">
          <ItemsWithSummaryBoxed
            :title="messages?.sectionAnticipateNeeds?.title"
            :subtitle="messages?.sectionAnticipateNeeds?.subtitle"
            :items="messages?.sectionAnticipateNeeds?.items"
          >
            <template #title>
              {{ messages?.sectionAnticipateNeeds?.title }}
            </template>
          </ItemsWithSummaryBoxed>
        </div>

        <div class="cases-landing__section">
          <SideTextSection
            :title="messages?.sectionOrchestration?.title"
            :text="messages?.sectionOrchestration?.text"
            :highlightedIndices="[]"
          />
        </div>

        <div class="cases-landing__section">
          <MatrixOfCards
            :items="messages?.sectionOptimizeFulfillment?.items"
            :title="messages?.sectionOptimizeFulfillment?.title"
            :subtitle="messages?.sectionOptimizeFulfillment?.subtitle"
          >
            <template #card="{ item }">
              <TitledCard :title="item.title" :text="item.text" />
            </template>
          </MatrixOfCards>
        </div>

        <div class="cases-landing__section">
          <LabelCard
            :text="messages?.cardOptimize?.text"
            :startIndex="messages?.cardOptimize?.startIndex"
            :endIndex="messages?.cardOptimize?.endIndex"
          />
        </div>

        <div class="cases-landing__section">
          <MatrixOfCards
            :items="messages?.sectionOptimizeWorkforce?.items"
            :title="messages?.sectionOptimizeWorkforce?.title"
            :subtitle="messages?.sectionOptimizeWorkforce?.subtitle"
            cardMinWidth="400px"
          >
            <template #card="{ item }">
              <ImageCard
                :title="item.title"
                :text="item.text"
                :icon="item.icon"
              />
            </template>
          </MatrixOfCards>
        </div>

        <div class="cases-landing__section">
          <CiteCard
            :text="messages?.cites?.[0]?.text"
            :who="messages?.cites?.[0]?.name"
            :org="messages?.cites?.[0]?.position"
            logo="/images/cases/swiperx/logo.png"
            backgroundColor="#0B196D"
            color="#fff"
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

import GetInTouch from "@/components/GetInTouch";
import PageHeader from "@/components/PageHeader";
import CultureItem from "@/components/CultureItem";
import UpButton from "@/components/UpButton";

import SideTextSection from "../components/SideTextSection";
import ItemsWithSummaryBoxed from "../components/ItemsWithSummaryBoxed";
import UseCases from "../components/UseCases";
import Button from "@/ui-components/button";

import LabelCard from "../components/LabelCard/LabelCard.vue";
import MatrixOfCards from "../components/MatrixOfCards/MatrixOfCards.vue";
import TitledCard from "../components/TitledCard/TitledCard.vue";
import ImageCard from "../components/ImageCard/ImageCard.vue";
import CiteCard from "../components/CiteCard/CiteCard.vue";
import TwoColumnBlock from "../components/layout/TwoColumnBlock/TwoColumnBlock.vue";

import "../cases.scss";
import "../cases-landing.scss";
import "./supply-chain-landing.scss";

const router = useRouter();

function handleButtonClick(event: MouseEvent) {
  document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
}

const { currentTranslations: messages } = useTranslations("cases/supplychain");
</script>
