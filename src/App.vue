<template>
    <img src="./assets/gradient-top-yellow.png" class="app__gradient-top-yellow" />
    <img src="./assets/gradient-top-blue.png" class="app__gradient-top-blue" />

    <app-header />
    <landing />
    
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
import AppHeader from '@/components/AppHeader'
import Landing from '@/components/Landing'
import Problem from '@/components/Problem'
import Applications from '@/components/Applications'
import Proposal from '@/components/Proposal'
import AppFooter from '@/components/AppFooter'
import IntersectionObserver from '@/components/IntersectionObserver'

enum Section {
  Problem = 'problem',
  Applications = 'applications',
  Proposal = 'proposal',
}

const handleIntersect = (section: Section, intersectEvent: IntersectionObserverEntry) => {  
  if (intersectEvent.isIntersecting) {
    document.querySelector(`.${section}`)?.classList.add('show')
    document.querySelector(`.${section}`)?.classList.remove('hide')
    return
  }

  document.querySelector(`.${section}`)?.classList.add('hide')
  document.querySelector(`.${section}`)?.classList.remove('show')
}
</script>