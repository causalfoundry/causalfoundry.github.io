<template>
  <div class="cases cases-landing">
    <AppHeader
      current-page="cases"
      class="cases-landing__header ecommerce__header"
    >
      <AppMenu />
    </AppHeader>

    <div class="cases-landing__container">
      <PageHeader
        description=""
        :showButton="true"
        className="cases__ecommerce_header"
        image="/images/cases/header_ecommerce.png"
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
            {{ messages?.header?.subtitle }}
          </div>
        </template>
      </PageHeader>

      <div class="cases-landing__content" id="content">
        <div class="cases-landing__section">
          <SideTextSection
            :title="messages?.sectionDrivesCustomer?.title"
            :text="messages?.sectionDrivesCustomer?.text"
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
              :src="`/images/cases/ecommerce/e-commerce-items.png`"
              alt="Causal Foundry"
            />
          </template>
        </ItemsWithSummary>

        <div class="cases-landing__section">
          <SideTextSection
            :title="messages?.sectionTeamFocus?.title"
            :text="messages?.sectionTeamFocus?.text"
            :highlightedIndices="[]"
          />
        </div>

        <Matrix
          :title="messages?.sectionMarketing?.title || ''"
          :items="messages?.sectionMarketing?.items || []"
          :subtitle="messages?.sectionMarketing?.subtitle || ''"
        />

        <div class="cases-landing__section">
          <SideTextSection
            :title="messages?.sectionForecasting?.title"
            :text="messages?.sectionForecasting?.text"
            :highlightedIndices="[]"
          />
        </div>

        <Matrix
          :title="messages?.sectionInsights?.title || ''"
          :items="messages?.sectionInsights?.items || []"
          :subtitle="messages?.sectionInsights?.subtitle || ''"
        />

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

import SideTextSection from "../components/SideTextSection";
import Matrix from "../components/Matrix";
import UpButton from "@/components/UpButton";
import ItemsWithSummary from "../components/ItemsWithSummary";
import CiteCard from "../components/CiteCard/CiteCard.vue";
import UseCases from "../components/UseCases";
import Button from "@/ui-components/button";
import "../cases.scss";
import "../cases-landing.scss";

const { currentTranslations: messages } = useTranslations("cases/ecommerce");

const router = useRouter();

function handleButtonClick(event: MouseEvent) {
  document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
}
</script>
