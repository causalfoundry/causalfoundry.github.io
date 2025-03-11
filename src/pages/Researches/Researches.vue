<template>
  <div class="research">
    <app-header current-page="research">
      <app-menu />
    </app-header>

    <PageHeader
      :description="SECTION_DESCRIPTION"
      className="research__header"
      image="/images/research/top.png"
    >
      <template #title>
        {{ MAIN_TITLE_FIRST }}
        <AppTitle>{{ MAIN_TITLE_SECOND }}</AppTitle>
      </template>
    </PageHeader>

    <div class="diagram">
      <div class="diagram__title">{{ RL_TITLE }}</div>
      <div class="paragraph">
        {{ RL_DESCRIPTION }}
      </div>

      <div class="diagram__image">
        <img src="../../assets/research_diagram.png" />
      </div>
      <div class="circle">
        <img src="../../assets/pattern-circle.png" alt="" />
      </div>
    </div>

    <div class="diagram">
      <div class="diagram__title">{{ BEHAVIORAL_TITLE }}</div>

      <div class="paragraph">
        {{ BEHAVIORAL_DESCRIPTION }}
      </div>
    </div>

    <div class="diagram">
      <div class="diagram__title">{{ LLM_TITLE }}</div>

      <div class="paragraph">
        {{ LLM_DESCRIPTION }}
      </div>

      <div class="diagram__image">
        <img src="../../assets/research_diagram_2.png" />
      </div>

      <div class="hex bottom">
        <img src="../../assets/pattern-hex.png" alt="" />
      </div>
    </div>

    <div class="diagram survival">
      <div class="diagram__title">{{ SURVIVAL_TITLE }}</div>

      <div class="paragraph">
        {{ SURVIVAL_DESCRIPTION }}
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
// import { computed, ref, watch } from 'vue';

import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import AppTitle from "@/components/AppTitle";
import GetInTouch from "@/components/GetInTouch";

import PageHeader from "@/components/PageHeader";

import {
  SECTION_DESCRIPTION,
  RL_TITLE,
  RL_DESCRIPTION,
  BEHAVIORAL_TITLE,
  BEHAVIORAL_DESCRIPTION,
  LLM_TITLE,
  LLM_DESCRIPTION,
  SURVIVAL_TITLE,
  SURVIVAL_DESCRIPTION,
  MAIN_TITLE_FIRST,
  MAIN_TITLE_SECOND,
} from "./constants";
import "./Researches.scss";
</script>
