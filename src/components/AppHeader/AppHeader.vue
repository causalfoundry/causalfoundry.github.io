<template>
  <header class="header">
    <a href="/">
      <img src="../../assets/logo.png" class="header__logo" />
    </a>
    <div class="header__links">
      <router-link to="/products"
        ><div :class="`header__item ${active === 'products' ? 'active' : ''}`">
          Products
        </div></router-link
      >
      <!-- Dropdown menu for Cases -->
      <div
          class="header__item header__dropdown"
          :class="{ active: active === 'cases' }"
      >
        <div>Cases</div>
        <div class="dropdown-menu">
          <router-link to="/cases/healthcare">
            <div class="dropdown-item">Healthcare</div>
          </router-link>
          <router-link to="/cases/e-commerce">
            <div class="dropdown-item">E-Commerce</div>
          </router-link>
        </div>
      </div>
      <router-link to="/research"
        ><div :class="`header__item ${active === 'research' ? 'active' : ''}`">
          Research
        </div></router-link
      >
      <a target="_blank" href="https://docs.causalfoundry.ai/"
        ><div class="header__item">Docs</div></a
      >
      <router-link to="/about"
        ><div :class="`header__item ${active === 'about' ? 'active' : ''}`">
          About
        </div></router-link
      >
      <router-link to="/careers"
        ><div :class="`header__item ${active === 'careers' ? 'active' : ''}`">
          Careers
        </div></router-link
      >
    </div>
    <div class="header__slot">
      <slot />
    </div>
  </header>
</template>

<script setup lang="ts">
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
</script>
