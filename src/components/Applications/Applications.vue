<template>
  <section class="applications">
    <section-header>Applications</section-header>
    <div class="applications__wrapper">
      <img src="../../assets/pattern-hex.png" class="applications__pattern-hex" />
      <img src="../../assets/gradient-left-blue.png" class="applications__gradient" />
      <div class="applications__content">
        <div v-for="(application, index) in applications" :key="index">
          <h3 class="applications__title"><app-title>{{ application.title.toUpperCase() }}</app-title></h3>
          <p class="applications__desc">{{ application.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from '@/components/SectionHeader'
import AppTitle from '@/components/AppTitle'

const applications = [
  {
    title: 'Clinical trial',
    description: 'Clinical studies that engage patients and put their needs first will see meaningful participation and improved retention rates reducing significantly trials costs and the robustness of the study.'
  },
  {
    title: 'MHealth and wellness',
    description: 'Mobile health technology can be used to assist physicians in diagnosis, decision-making, and treatment personalization, as well as help individuals, make informed decisions and stick to their plans.'
  },
  {
    title: 'Global health',
    description: 'Given both the immense disease burdens borne by low- and middle- income countries and the increasing smartphone penetration in those regions, the use of adaptive interventions to improve health outcomes for globally under-served communities is highly promising.'
  }
]
</script>