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
        className="cases__healthcare_header"
        image="/images/cases/header_healthcare.png"
      >
        <template #button>
          <Button :value="messages?.linkText" @click="handleButtonClick" />
        </template>
        <template #title>
          <div>
            <HealthcareTitle>
              {{ messages?.header?.title }}
            </HealthcareTitle>
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
            :title="messages?.sectionAdapts?.title"
            :text="messages?.sectionAdapts?.text"
            :highlightedIndices="[]"
          />
        </div>

        <ItemsWithSummary
          :title="messages?.sectionTransforming?.title"
          :subtitle="messages?.sectionTransforming?.subtitle"
          :items="messages?.sectionTransforming?.items"
          borderColor="#8cdfd9"
        >
          <template #title>
            <HealthcareTitle>
              {{ messages?.sectionTransforming?.title }}
            </HealthcareTitle>
          </template>

          <template #image>
            <img
              :src="`/images/cases/healthcare/healthcare-items.png`"
              alt="Causal Foundry"
            />
          </template>
        </ItemsWithSummary>

        <div class="cases-landing__section">
          <SideTextSection
            :title="messages?.sectionEmpowering?.title"
            :text="messages?.sectionEmpowering?.text"
            :highlightedIndices="[]"
          />
        </div>

        <Matrix
          :title="messages?.sectionEfficiency?.title || ''"
          :items="messages?.sectionEfficiency?.items || []"
          :subtitle="messages?.sectionEfficiency?.subtitle || ''"
        >
          <template #title>
            <HealthcareTitle>
              {{ messages?.sectionEfficiency?.title }}
            </HealthcareTitle>
          </template>
        </Matrix>

        <div class="cases-landing__section">
          <SideTextSection
            :title="messages?.sectionOptimizing?.title"
            :text="messages?.sectionOptimizing?.text"
            :highlightedIndices="[]"
          />
        </div>

        <div class="cases-landing__cards">
          <div class="cases-landing__cards__title">
            <HealthcareTitle>
              {{ messages?.sectionInsights?.title }}
            </HealthcareTitle>
            <div class="cases-landing__cards__subtitle">
              {{
                messages?.sectionInsights?.subtitle
                  .split(" ")
                  .slice(0, 5)
                  .join(" ")
              }}
              <br />
              {{
                messages?.sectionInsights?.subtitle
                  .split(" ")
                  .slice(5)
                  .join(" ")
              }}
            </div>
          </div>

          <div class="cases-landing__cards-items">
            <CultureItem
              v-for="(item, index) in messages?.sectionInsights?.items"
              :key="index"
              :title="item.title"
              :text="item.text"
            >
              <template #title>
                <HealthcareTitle>
                  {{ item.title }}
                </HealthcareTitle>
              </template>
            </CultureItem>
          </div>
        </div>

        <div class="cases-landing__section">
          <CiteCard
            :text="messages?.cites?.[0]?.text"
            :who="messages?.cites?.[0]?.name"
            :org="messages?.cites?.[0]?.position"
            logo="/images/cases/m2m/logo.png"
            borderColor="#8cdfd9"
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

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppMenu from "@/components/AppMenu";

import GetInTouch from "@/components/GetInTouch";
import PageHeader from "@/components/PageHeader";
//import CultureItem from "@/components/CultureItem/CultureItem";
import UpButton from "@/components/UpButton";

import SideTextSection from "../components/SideTextSection";
import Matrix from "../components/Matrix";
import ItemsWithSummary from "../components/ItemsWithSummary";
import CiteCard from "../components/CiteCard/CiteCard.vue";
import UseCases from "../components/UseCases";
import HealthcareTitle from "../components/HealthcareTitle";
import Button from "@/ui-components/button";

import CultureItem from "@/components/CultureItem";

import "../cases.scss";
import "../cases-landing.scss";

function handleButtonClick(event: MouseEvent) {
  document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
}

const { currentTranslations: messages } = useTranslations("cases/healthcare");
</script>
