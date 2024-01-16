<template>
  <header class="header">
    <a href="/">
      <img src="../../assets/logo.png" class="header__logo" />
    </a>
    <router-link to="/careers"><div class="header__item">Careers</div></router-link>
    <div class="header__slot">
      <slot />
    </div>
  </header>
</template>
