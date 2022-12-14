<template>
  <main class="landing">
    <transition name="fade" appear>
      <h1 class="landing__header">
        <app-title>Democratizing</app-title>
        <br />Reinforcement Learning 
        <br />and Adaptive 
        <br />Experimentation
      </h1>
    </transition>
    <p class="landing__desc">We focus on tracking and organizing users’ data, to use historical behavior and predictions to profile, design and implement adaptive interventions.</p>
  </main>
</template>

<script lang="ts" setup>
import AppTitle from '@/components/AppTitle'
</script>