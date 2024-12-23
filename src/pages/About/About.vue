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
      <template #title> <AppTitle>AI</AppTitle> for everyone </template>
    </PageHeader>

    <div class="our-story">
      <div class="our-story__title">
        Our Story:<br />Revolutionizing Industries with AI
      </div>
      <div class="our-story__content">
        <div class="our-story__section">
          The narrative of our company is linked to the partnership of our
          founders, África Perianez and Dexian Tang. Their journey began in
          Tokyo, where their collaboration set new benchmarks in AI for the
          video game industry. In Tokyo's vibrant tech hub, they engineered an
          advanced machine learning platform, designed to predict and shape
          video game player behavior, marking a significant milestone in the
          gaming world.
          <br /><br />
          Following their success in Tokyo, África and Dexian embarked on a new
          challenge at Inditex, the world's largest fashion retailing group and
          the parent company of Zara. Here, they spearheaded AI initiatives,
          blending their deep understanding of machine learning with the
          fast-paced world of fashion retail and supply chain.
          <br /><br />
          2020 marked a transformative year for África and Dexian. África and
          Dexian transitioned their focus to a domain with profound global
          impact – AI for global health. Since then, they have been relentless
          in pushing the boundaries of what AI can achieve, especially in
          addressing health.
          <br /><br />
          Our journey, from revolutionizing the gaming industry in Tokyo to
          pioneering AI-driven global health initiatives, reflects our
          commitment to harnessing AI for meaningful applications to create a
          better, healthier world.
        </div>
        <div class="our-story__section">
          <img src="../../assets/our_story.png" />
        </div>
      </div>
    </div>

    <div class="team">
      <div class="title">Our Executive Team</div>
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

import { ABOUT_DESCRIPTION } from "./constants";
import team from "@/data/team";

import "./About.scss";
import GetInTouch from "@/components/GetInTouch";
</script>
