<template>
  <button v-if="!open" class="app-menu__button" @click="open = true">
    <hamburger-menu-icon />
  </button>

  <div
    :class="['app-menu__wrapper', { 'app-menu__wrapper--open': open }]"
    @click="handleClick"
  >
    <div class="app-menu__content">
      <button class="app-menu__close app-menu__button" @click="open = false">
        <cross-icon />
      </button>
      <nav class="app-menu__nav">
        <ul v-for="item in MENU_ITEMS" :key="item.title">
          <li>
            <a :target="item.target" :href="item.href" @click="open = false">{{
              item.title
            }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HamburgerMenuIcon from "@/assets/hamburger-menu.svg";
import CrossIcon from "@/assets/cross.svg";
import { EMAIL } from "@/data";

const MENU_ITEMS = [
  { title: "Home", href: `/` },
  { title: "Products", href: "/products" },
  { title: "Cases", href: "/cases" },
  { title: "Research", href: "/research" },
  { title: "Docs", href: "https://docs.causalfoundry.ai/", target: "_blank" },
  { title: "About", href: "/about" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: `mailto:${EMAIL}` },
];

const open = ref(false);

function handleClick(e: MouseEvent) {
  const asDiv = e.target as HTMLDivElement;

  if (asDiv.classList?.contains("app-menu__wrapper")) {
    open.value = false;
  }
}
</script>
