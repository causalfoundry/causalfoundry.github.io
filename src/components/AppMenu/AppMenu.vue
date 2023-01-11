<template>
  <button v-if="!open" class="app-menu__button" @click="open = true">
    <hamburger-menu-icon />
  </button>
  
  <div :class="['app-menu__content', { 'app-menu__content--open': open }]">
    <button class="app-menu__close app-menu__button" @click="open = false">
      <cross-icon />
    </button>
    <nav class="app-menu__nav">
      <ul v-for="item in MENU_ITEMS" :key="item.title">
        <li>
          <a :href="item.href" @click="open = false">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HamburgerMenuIcon from '@/assets/hamburger-menu.svg'
import CrossIcon from '@/assets/cross.svg'
import { Section } from '@/typings/section'
import { EMAIL } from '@/data'

const MENU_ITEMS = [
  { title: 'Mission', href: `#${Section.Problem}` }, 
  { title: 'Personalized Interventions', href: `#${Section.Applications}` }, 
  { title: 'Personalized Medicine', href: `#${Section.Proposal}` }, 
  { title: 'Contact', href: `mailto:${EMAIL}` }
]

const open = ref(false)
</script>