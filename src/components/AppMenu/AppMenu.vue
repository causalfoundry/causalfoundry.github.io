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
        <ul>
          <li v-for="item in MENU_ITEMS" :key="item.title" class="app-menu__item">
            <div v-if="item.submenu" class="app-menu__dropdown">
              <button
                  class="app-menu__dropdown-button"
                  @click="toggleDropdown(item.title)"
              >
                <span>{{ item.title }}</span>
                <span
                    :class="['app-menu__arrow', { 'app-menu__arrow--open': dropdownOpen === item.title }]"
                >
                  ▼
                </span>
              </button>
              <ul
                  v-if="dropdownOpen === item.title"
                  class="app-menu__submenu"
              >
                <li
                    v-for="subItem in item.submenu"
                    :key="subItem.title"
                    class="app-menu__submenu-item"
                >
                  <a
                      :href="subItem.href"
                      :target="subItem.target"
                      @click="open = false"
                  >
                    {{ subItem.title }}
                  </a>
                </li>
              </ul>
            </div>
            <a
                v-else
                :href="item.href"
                :target="item.target"
                @click="open = false"
            >
              {{ item.title }}
            </a>
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

const MENU_ITEMS = [
  { title: "Home", href: `/` },
  { title: "Products", href: "/products" },
  {
    title: "Cases",
    submenu: [
      { title: "Healthcare", href: "/cases/healthcare" },
      { title: "E-Commerce", href: "/cases/e-commerce" },
    ],
  },
  { title: "Research", href: "/research" },
  { title: "Docs", href: "https://docs.causalfoundry.ai/", target: "_blank" },
  { title: "About", href: "/about" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: `/contact` },
];

const open = ref(false);
const dropdownOpen = ref<string | null>(null);

function handleClick(e: MouseEvent) {
  const asDiv = e.target as HTMLDivElement;

  if (asDiv.classList?.contains("app-menu__wrapper")) {
    open.value = false;
    dropdownOpen.value = null;
  }
}

function toggleDropdown(title: string) {
  dropdownOpen.value = dropdownOpen.value === title ? null : title;
}
</script>
