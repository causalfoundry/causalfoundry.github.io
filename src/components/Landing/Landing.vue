<template>
  <main class="landing">
    <div>
      <transition name="fade" appear>
        <h1 class="landing__header">
          <app-title>Personalization</app-title>
          to solve some of the greatest challenges in healthcare
        </h1>
      </transition>
      <transition name="fade" appear>
        <p class="landing__desc">We focus on tracking and organizing users’ data, to use historical behavior and predictions to profile, design and implement adaptive interventions.</p>
      </transition>
    </div>

    <transition name="fade" appear>
      <div>
        <img src="../../assets/pattern-circle.png" class="landing__pattern-circle" ref="floater" />
        <img src="../../assets/gradient-right-yellow.png" class="landing__gradient" />
      </div>
    </transition>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AppTitle from '@/components/AppTitle'

const floater = ref()

const parallax = () => {
  if (floater.value) {
    const yPos = 0 - window.scrollY / 80
    console.log('before the top?', floater.value)
    floater.value.style.top = `${yPos}%`
  }
}

onMounted(() => {
  window.addEventListener('scroll', parallax)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', parallax)
})
</script>