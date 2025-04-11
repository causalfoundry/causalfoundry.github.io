<template>
  <header class="header">
    <a :href="`/${currentLang}/`">
      <img src="../../assets/logo.png" class="header__logo" />
    </a>
    <div class="header__links">
      <router-link :to="`/${currentLang}/products`">
        <div :class="`header__item ${active === 'products' ? 'active' : ''}`">
          {{ messages?.common["products"] }}
        </div>
      </router-link>
      <!-- Dropdown menu for Cases -->
      <div
        class="header__item header__dropdown"
        :class="{ active: active === 'cases' }"
      >
        <div>{{ messages?.common?.cases }}</div>
        <div class="dropdown-menu">
          <router-link :to="`/${currentLang}/cases/healthcare`">
            <div class="dropdown-item">
              {{ messages?.common?.healthcare }}
            </div>
          </router-link>
          <router-link :to="`/${currentLang}/cases/e-commerce`">
            <div class="dropdown-item">
              {{ messages?.common?.["e-commerce"] }}
            </div>
          </router-link>
          <router-link :to="`/${currentLang}/cases/government`">
            <div class="dropdown-item">
              {{ messages?.common?.["government"] }}
            </div>
          </router-link>
          <router-link :to="`/${currentLang}/cases/gaming`">
            <div class="dropdown-item">
              {{ messages?.common?.["gaming"] }}
            </div>
          </router-link>
          <router-link :to="`/${currentLang}/cases/healthcare-landing`">
            <div class="dropdown-item">
              {{ messages?.common?.["healthcare-landing"] }}
            </div>
          </router-link>
          <router-link :to="`/${currentLang}/cases/ecommerce-landing`">
            <div class="dropdown-item">
              {{ messages?.common?.["ecommerce-landing"] }}
            </div>
          </router-link>
        </div>
      </div>
      <router-link :to="`/${currentLang}/research`">
        <div :class="`header__item ${active === 'research' ? 'active' : ''}`">
          {{ messages?.common["research"] }}
        </div>
      </router-link>
      <a target="_blank" href="https://docs.causalfoundry.ai/">
        <div class="header__item">{{ messages?.common?.["docs"] }}</div>
      </a>
      <router-link :to="`/${currentLang}/about`">
        <div :class="`header__item ${active === 'about' ? 'active' : ''}`">
          {{ messages?.common["about"] }}
        </div>
      </router-link>
      <router-link :to="`/${currentLang}/careers`">
        <div :class="`header__item ${active === 'careers' ? 'active' : ''}`">
          {{ messages?.common["careers"] }}
        </div>
      </router-link>

      <div class="header__item">
        <div class="header__lang">
          <a
            href="#"
            @click.prevent="changeLanguage('en')"
            :class="{ 'header__lang-selected': currentLang === 'en' }"
            >en</a
          >
          |
          <a
            href="#"
            @click.prevent="changeLanguage('jp')"
            :class="{ 'header__lang-selected': currentLang === 'jp' }"
            >日本語
          </a>
        </div>
      </div>
    </div>
    <div class="header__slot">
      <slot />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useTranslations } from "@/composables/useTranslations";

const { currentTranslations: messages } = useTranslations("");
const router = useRouter();

const props = defineProps<{
  currentPage:
    | "landing"
    | "careers"
    | "research"
    | "products"
    | "cases"
    | "privacy-policy"
    | "about"
    | "cookie-policy";
}>();

const active = props.currentPage;
const route = useRoute();

const currentLang = Array.isArray(route.params.lang)
  ? route.params.lang[0]
  : route.params.lang || "en"; // Default to 'en' if no lang is specified

// Function to handle language change
const changeLanguage = (lang: string) => {
  const newPath = `/${lang}${route.path.substring(3)}`;
  // Use window.location to force a full page refresh
  window.location.href = newPath;
};
</script>
