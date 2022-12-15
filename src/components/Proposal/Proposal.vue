<template>
  <section class="proposal">
    <section-header>Proposal</section-header>
    <div class="proposal__content">
      <p>We propose a data-centric AI-driven platform to predict user behavior, generate individual recommendations, and experiment at scale to nudge behavior and deliver on the promise of personalization in digital health through:</p>
    </div>
    <div class="proposal__methods">
      <ul v-for="method in methods" :key="method">
        <li>{{ method }}</li>
      </ul>
    </div>
    <img src="../../assets/pattern-wave.png" class="proposal__pattern-wave" />
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from '@/components/SectionHeader'

const methods = ['Development of data-centric mobile health apps and companion apps for clinical trials', 'Server-side experimentation', 'SDK and API integration']
</script>