<template>
  <main class="landing">
    <div>
      <transition name="fade" appear>
        <h1 class="landing__header">
          <app-title>Personalization DEV</app-title>
          to solve the greatest <br />challenges in healthcare
        </h1>
      </transition>
      <transition name="fade" appear>
        <p class="landing__desc">Democratizing reinforcement learning and adaptive interventions to personalize medicine, healthcare delivery, and patient support for improved health outcomes</p>
      </transition>
    </div>

    <transition name="fade" appear>
      <div>
        <img src="../../assets/pattern-circle.png" class="landing__pattern-circle parallax parallax--landing" />
      </div>
    </transition>
  </main>
</template>

<script lang="ts" setup>
import AppTitle from '@/components/AppTitle'
</script>
