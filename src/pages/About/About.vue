<template>
  <div class="about">
    <img
      src="../../assets/gradient-top-yellow.png"
      class="app__gradient-top-yellow"
    />
    <img
      src="../../assets/gradient-top-blue.png"
      class="app__gradient-top-blue"
    />
    <AppHeader current-page="about">
      <AppMenu />
    </AppHeader>

    <PageHeader
      :description="ABOUT_DESCRIPTION"
      className="about__header"
      image="/images/about/top.png"
    >
      <template #title>
        <AppTitle>{{ AI }}</AppTitle>
        {{ EVERYONE }}
      </template>
    </PageHeader>

    <Section title="Our Culture" description="" className="about-section">
      <div class="values">
        <div v-for="value of values" class="value" v-bind:key="value.title">
          <div class="value__title">
            {{ value.title }}
          </div>
          <div class="value__subtitle">{{ value.text }}</div>
        </div>
      </div>
    </Section>

    <div class="our-story">
      <div class="our-story__title">{{ MISSION_TITLE }}</div>
      <div class="our-story__content">
        <div class="our-story__section">
          {{ MISSION }}
        </div>
      </div>
    </div>

    <div class="team">
      <div class="title">{{ TEAM_TITLE }}</div>
      <div class="members">
        <div v-for="member of team" class="member">
          <div class="avatar">
            <img :src="member.imageUrl" alt="" />
            <div class="description">{{ member.descritpion }}</div>
          </div>
          <div class="info">
            <div class="name">{{ member.name }}</div>
            <div class="role">{{ member.role }}</div>
            <div class="links">
              <a
                v-if="member.links.linkedin"
                :href="member.links.linkedin"
                target="_blank"
              >
                <img
                  src="../../assets/linkedin-about.png"
                  class="link linkedin"
                />
              </a>
              <a
                v-if="member.links.twitter"
                :href="member.links.twitter"
                target="_blank"
              >
                <img
                  src="../../assets/twitter-about.png"
                  class="link twitter"
                />
              </a>
              <a
                v-if="member.links.github"
                :href="member.links.github"
                target="_blank"
              >
                <img src="../../assets/github-about.png" class="link twitter" />
              </a>
            </div>
          </div>
        </div>
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

<script setup lang="ts">
import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import AppTitle from "@/components/AppTitle";

import PageHeader from "@/components/PageHeader";

import {
  ABOUT_DESCRIPTION,
  values,
  MISSION,
  MISSION_TITLE,
  TEAM_TITLE,
  AI,
  EVERYONE,
} from "./constants";
import team from "@/data/team";

import "./About.scss";
import GetInTouch from "@/components/GetInTouch";
import Section from "@/pages/Product/components/Section/Section.vue";
</script>
