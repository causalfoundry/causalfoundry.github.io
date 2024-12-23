<template>
  <div class="research">
    <app-header current-page="research">
      <app-menu />
    </app-header>

    <PageHeader :description="SECTION_DESCRIPTION" className="research__header">
      <template #title>
        We research to<AppTitle> build and deploy reliable AI</AppTitle>
      </template>
    </PageHeader>

    <div class="hex">
      <img src="../../assets/pattern-hex.png" alt="" />
    </div>
    <div class="diagram">
      <div class="diagram__title">Reinforcement Learning</div>
      <div class="paragraph">
        Reinforcement learning is a computational approach to understanding and
        automating goal-directed learning and decision-making without requiring
        exemplary supervision or complete models of an environment in order to
        achieve long-term goals.
        <br /><br />
        The principal direction of our research focuses on designing methods and
        mechanisms for optimizing digital products experience and user outcomes.
        This includes approaches from reinforcement learning with emphasis on
        sample efficiency, and explainable AI including causal inference.
        Examples include feature space pruning for linear and deep contextual
        bandits, and restless bandits for outcome optimization in applications
        with strong budget constraints. This allows us to develop practical
        solutions that make optimizing choices in dynamic complex scenarios,
        based on feedback, select contextual data and forecasts of alternative
        outcomes.
      </div>
      <div class="diagram__image">
        <img src="../../assets/research_diagram.png" />
      </div>
      <div class="circle">
        <img src="../../assets/pattern-circle.png" alt="" />
      </div>
    </div>

    <div class="diagram">
      <div class="diagram__title">Behavioral and Clinical Embeddings</div>

      <div class="paragraph">
        Embeddings are numerical representations of items, users, or behaviors
        in a high-dimensional space. These representations capture the essential
        characteristics and relationships of the data.
        <br /><br />
        Our second research direction aims at leveraging the data curated on our
        platform to learn rich representations that encapsulate the key patterns
        useful for profiling clinical and behavioral dimensions of users, and
        personalized recommendations and predictions. Specifically, we use
        semi-supervised methods to map entities such as products, clinical and
        user's behavior into numerical vectors in a high-dimensional space, that
        retain semantic relations and bring utility to downstream tasks.
      </div>
    </div>

    <div class="diagram">
      <div class="diagram__title">Large Language Models</div>

      <div class="paragraph">
        This research direction examines the use of Large Language Models (LLMs)
        to streamline access to pertinent analytical information on our
        platform. We experiment with the reasoning and tool use capabilities of
        generalist LLMs endowed with curated data access in order to improve
        experience for uses on both ends: better personalized recommendations
        for the application user, and enhanced discovery of deeper insights into
        the data for the analyst.
      </div>

      <div class="diagram__image">
        <img src="../../assets/research_diagram_2.png" />
      </div>

      <div class="hex bottom">
        <img src="../../assets/pattern-hex.png" alt="" />
      </div>
    </div>

    <div class="diagram survival">
      <div class="diagram__title">Survival Analysis</div>

      <div class="paragraph">
        Survival analysis, often referred to as time-to-event analysis, is
        dedicated to studying the time period leading up to the occurrence of
        certain events and event-risk factor identification. Our research is
        centered on merging individual-level survival analysis predictions with
        reinforcement learning algorithms as contextual information, including
        the uncertainty associated with these survival predictions.
        <br /><br />
        The findings are integrated into our platform in both behavioral and
        clinical embedding training and design of timely and adaptive
        decision-making system. Furthermore, risk-based early-warning signals
        and continuous cross-validation enable efficient data collection,
        increased responsiveness and richer feature representation.
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
    <app-footer />
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

import { SECTION_DESCRIPTION } from "./constants";
import "./Researches.scss";
</script>
