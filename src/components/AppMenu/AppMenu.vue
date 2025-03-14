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
          <li
            v-for="item in MENU_ITEMS"
            :key="item.titleKey"
            class="app-menu__item"
          >
            <div v-if="item.submenu" class="app-menu__dropdown">
              <button
                class="app-menu__dropdown-button"
                @click="toggleDropdown(item.titleKey)"
              >
                <span>{{ messages?.common[item.titleKey] }}</span>
                <span
                  :class="[
                    'app-menu__arrow',
                    { 'app-menu__arrow--open': dropdownOpen === item.titleKey },
                  ]"
                >
                  ▼
                </span>
              </button>
              <ul
                v-if="dropdownOpen === item.titleKey"
                class="app-menu__submenu"
              >
                <li
                  v-for="subItem in item.submenu"
                  :key="subItem.titleKey"
                  class="app-menu__submenu-item"
                >
                  <a
                    :href="subItem.href"
                    :target="subItem.target"
                    @click="open = false"
                  >
                    {{ messages?.common[subItem.titleKey] }}
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
              {{ messages?.common[item.titleKey] }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import HamburgerMenuIcon from "@/assets/hamburger-menu.svg";
import CrossIcon from "@/assets/cross.svg";
import { useTranslations } from "@/composables/useTranslations";

const MENU_ITEMS = [
  { titleKey: "home", href: `/` },
  { titleKey: "products", href: "/products" },
  {
    titleKey: "cases",
    submenu: [
      { titleKey: "healthcare", href: "/cases/healthcare" },
      { titleKey: "e-commerce", href: "/cases/e-commerce" },
    ],
  },
  { titleKey: "research", href: "/research" },
  {
    titleKey: "docs",
    href: "https://docs.causalfoundry.ai/",
    target: "_blank",
  },
  { titleKey: "about", href: "/about" },
  { titleKey: "careers", href: "/careers" },
  { titleKey: "contact", href: `/contact` },
];

const open = ref(false);
const dropdownOpen = ref<string | null>(null);

const { currentTranslations: messages } = useTranslations("");

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

console.log("[aec] [messages] ", messages?.common);
</script>
