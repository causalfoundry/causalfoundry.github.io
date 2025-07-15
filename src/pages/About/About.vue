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
      :description="messages?.about?.description"
      className="about__header"
      image="/images/about/top.png"
    >
      <template #title>
        <AppTitle>{{ messages?.about?.ai }}</AppTitle>
        {{ messages?.about?.everyone }}
      </template>
    </PageHeader>

    <Section
      :title="messages?.about?.missionTitle"
      description=""
      className="about-section"
    >
      <div>{{ messages?.about?.mission }}</div>
    </Section>

    <Section title="Our Culture" description="" className="about-section">
      <div class="values">
        <div
          v-for="value of messages?.about?.values"
          class="value"
          v-bind:key="value.title"
        >
          <div class="value__title">
            {{ value.title }}
          </div>
          <div class="value__subtitle">{{ value.text }}</div>
        </div>
      </div>
    </Section>

    <div class="team">
      <div class="title">{{ messages?.about?.team?.title }}</div>
      <div class="description">{{ messages?.about?.team?.description }}</div>
      <div class="members">
        <div
          v-for="member of messages?.about?.team?.members"
          class="member"
          :key="member.name"
        >
          <div class="avatar">
            <img :src="member.imageUrl" alt="" />
            <div class="description">{{ member.description }}</div>
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

    <div class="location">
      <div class="title">{{ messages?.about?.location?.title }}</div>
      <div class="places">
        <div
            v-for="member of messages?.about?.location?.places"
            class="place"
            :key="member.name"
        >
          <div class="landmark">
            <img :src="member.imageUrl" alt="" />
          </div>
          <div class="info">
            <div class="name">
              <span>{{ member.city }}</span><br/>
              <span>{{ member.country }}</span>
            </div>
            <div class="address">{{ member.address }}</div>
<!--            <div class="maps-link">-->
<!--              <a-->
<!--                  v-if="member.links.googleMaps"-->
<!--                  :href="member.links.googleMaps"-->
<!--                  target="_blank"-->
<!--                  rel="noopener noreferrer"-->
<!--                  class="google-maps-button"-->
<!--              >-->
<!--                {{ messages?.about?.location?.googleMapsButton }}-->
<!--                <img class="icon" src="/images/locations/maps_button_icon.svg" alt="Google Maps icon" width="18" height="18" />-->
<!--              </a>-->
<!--            </div>-->
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
import { useTranslations } from "@/composables/useTranslations";

import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import AppTitle from "@/components/AppTitle";

import PageHeader from "@/components/PageHeader";

import GetInTouch from "@/components/GetInTouch";
import Section from "@/components/Section/Section.vue";

import "./About.scss";

const { currentTranslations: messages } = useTranslations("about");
</script>
