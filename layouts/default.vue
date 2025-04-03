<!-- ~/layouts/default.vue -->

<script setup lang="ts">
import useThemeStore from "~/stores/useTheme";

const themeStore = useThemeStore();
</script>

<template>
  <div class="container-layout" :class="themeStore.theme">
    <AppNavbar />
    <slot />
    <AppFooter />
  </div>
</template>

<style lang="scss">
.container-layout.dark {
  background: $dark0;
  color: $light;
}

.container-layout.light {
  background: $light;
  color: $dark0;
}
</style>
