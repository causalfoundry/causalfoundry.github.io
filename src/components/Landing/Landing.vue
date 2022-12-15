<template>
  <main class="landing">
    <div>
      <transition name="fade" appear>
        <h1 class="landing__header">
          <app-title>Democratizing</app-title>
          Reinforcement Learning and Adaptive Experimentation
        </h1>
      </transition>
      <transition name="fade" appear>
        <p class="landing__desc">We focus on tracking and organizing users’ data, to use historical behavior and predictions to profile, design and implement adaptive interventions.</p>
      </transition>
    </div>

    <transition name="fade" appear>
      <div>
        <img src="../../assets/pattern-circle.png" class="landing__pattern-circle" />
        <img src="../../assets/gradient-right-yellow.svg" class="landing__gradient" />
      </div>
    </transition>
  </main>
</template>

<script lang="ts" setup>
import AppTitle from '@/components/AppTitle'
</script>