<template>
  <main class="landing">
    <div>
      <transition name="fade" appear>
        <h1 class="landing__header">
          <app-title>Personalization</app-title>
          to solve the greatest challenges in healthcare
        </h1>
      </transition>
      <transition name="fade" appear>
        <p class="landing__desc">Democratizing reinforcement learning, machine learning, and adaptive experimentation to personalize medicine and improve health outcomes.</p>
      </transition>
    </div>

    <transition name="fade" appear>
      <div>
        <img src="../../assets/pattern-circle.png" class="landing__pattern-circle parallax parallax--landing" />
        <img src="../../assets/gradient-right-yellow.png" class="landing__gradient" />
      </div>
    </transition>
  </main>
</template>

<script lang="ts" setup>
import AppTitle from '@/components/AppTitle'
</script>