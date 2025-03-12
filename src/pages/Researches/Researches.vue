<template>
  <div class="research">
    <app-header current-page="research">
      <app-menu />
    </app-header>

    <PageHeader
      :description="messages?.research?.sectionDescription"
      className="research__header"
      image="/images/research/top.png"
    >
      <template #title>
        {{ messages?.research?.mainTitleFirst }}
        <AppTitle>{{ messages?.research?.mainTitleSecond }}</AppTitle>
      </template>
    </PageHeader>

    <div class="diagram">
      <div class="diagram__title">{{ messages?.research?.rlTitle }}</div>
      <div class="paragraph">
        {{ messages?.research?.rlDescription }}
      </div>

      <div class="diagram__image">
        <img src="../../assets/research_diagram.png" />
      </div>
      <div class="circle">
        <img src="../../assets/pattern-circle.png" alt="" />
      </div>
    </div>

    <div class="diagram">
      <div class="diagram__title">
        {{ messages?.research?.behavioralTitle }}
      </div>

      <div class="paragraph">
        {{ messages?.research?.behavioralDescription }}
      </div>
    </div>

    <div class="diagram">
      <div class="diagram__title">{{ messages?.research?.llmTitle }}</div>

      <div class="paragraph">
        {{ messages?.research?.llmDescription }}
      </div>

      <div class="diagram__image">
        <img src="../../assets/research_diagram_2.png" />
      </div>

      <div class="hex bottom">
        <img src="../../assets/pattern-hex.png" alt="" />
      </div>
    </div>

    <div class="diagram survival">
      <div class="diagram__title">{{ messages?.research?.survivalTitle }}</div>

      <div class="paragraph">
        {{ messages?.research?.survivalDescription }}
      </div>

      <div class="diagram__image">
        <img src="../../assets/research_diagram_3.png" />
      </div>
    </div>

    <GetInTouch highlighted />

    <div class="spacer"></div>
    <div class="pattern-wave">
      <img src="../../assets/pattern-wave.png" />
    </div>
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

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { useTranslations } from "@/composables/useTranslations";

import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import AppTitle from "@/components/AppTitle";
import GetInTouch from "@/components/GetInTouch";

import PageHeader from "@/components/PageHeader";

import "./Researches.scss";

const { currentTranslations: messages } = useTranslations(
  "../pages/Researches"
);
</script>
