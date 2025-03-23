<script setup lang="ts">
import NavButton from "./NavButton.vue";
import NavLogo from "./NavLogo.vue";
import NavMenu from "./NavMenu.vue";
</script>

<template>
  <header class="navbar-container">
    <NavLogo />
    <NavButton />
    <NavMenu />
  </header>
</template>

<style scoped>
.navbar-container {
  position: fixed;
  background-color: rgba(var(--background), 0.5);
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  box-shadow: 0px 0px 5px rgba(var(--primary), 0.2);
  padding: 0 1.5rem;
}
</style>
