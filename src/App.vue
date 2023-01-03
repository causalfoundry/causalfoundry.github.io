<template>
    <img src="./assets/gradient-top-yellow.png" class="app__gradient-top-yellow" />
    <img src="./assets/gradient-top-blue.png" class="app__gradient-top-blue" />

    <app-header />
    <intersection-observer @intersect="handleIntersect(Section.Landing, $event)">
      <landing />
    </intersection-observer>
    
    <intersection-observer @intersect="handleIntersect(Section.Problem, $event)">
      <problem />
    </intersection-observer>

    <intersection-observer @intersect="handleIntersect(Section.Applications, $event)">
      <applications />
    </intersection-observer>

    <intersection-observer @intersect="handleIntersect(Section.Proposal, $event)">
      <proposal />
    </intersection-observer>

    <app-footer />

    <img src="./assets/gradient-bottom-yellow.png" class="app__gradient-bottom-yellow" />
    <img src="./assets/gradient-bottom-blue.png" class="app__gradient-bottom-blue" />
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

import AppHeader from '@/components/AppHeader'
import Landing from '@/components/Landing'
import Problem from '@/components/Problem'
import Applications from '@/components/Applications'
import Proposal from '@/components/Proposal'
import AppFooter from '@/components/AppFooter'
import IntersectionObserver from '@/components/IntersectionObserver'

enum Section {
  Landing = 'landing',
  Problem = 'problem',
  Applications = 'applications',
  Proposal = 'proposal',
}

const isSectionVisible = ref({
  [Section.Landing]: true,
  [Section.Problem]: false,
  [Section.Applications]: false,
  [Section.Proposal]: false
})

const handleIntersect = (section: Section, intersectEvent: IntersectionObserverEntry) => {  
  if (intersectEvent.isIntersecting) {
    document.querySelector(`.${section}`)?.classList.add('show')
    document.querySelector(`.${section}`)?.classList.remove('hide')

    isSectionVisible.value[section] = true
    return
  }

  document.querySelector(`.${section}`)?.classList.add('hide')
  document.querySelector(`.${section}`)?.classList.remove('show')

  isSectionVisible.value[section] = false
}

// const parallaxEls = ref([])
const parallax = () => {
  const els = document.querySelectorAll('.parallax')

  for (let i = 0; i < els.length; i++) {
    const matchedParallaxSection = els[i].classList.value.match(/parallax--(.*)/g)?.[0].split('--')[1] as Section
    const currentElScrollHeight = document.querySelector(`.${matchedParallaxSection}`)?.scrollHeight || 0

    if (matchedParallaxSection === Section.Landing) {
      const yPos = 0 - window.scrollY / 120
      els[i].style.top = `${yPos}%`
    }

    if (isSectionVisible.value[matchedParallaxSection] && currentElScrollHeight <= window.scrollY) {
      const root =  window.scrollY - currentElScrollHeight
      const yPos = 0 - root / 120
      els[i].style.top = `${yPos}%`
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', parallax)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', parallax)
})
</script>