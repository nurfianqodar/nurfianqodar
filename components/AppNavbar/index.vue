<script setup lang="ts">
import NavButton from "./NavButton.vue";
import NavLogo from "./NavLogo.vue";
import NavMenu from "./NavMenu.vue";
import NavTheme from "./NavTheme.vue";
</script>

<template>
  <header class="container">
    <NavLogo />
    <NavMenu />
    <div class="buttons-container">
      <NavTheme />
      <NavButton />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.container {
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
  background-color: rgba($color: $light, $alpha: 0.6);
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  right: 0;

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
}
</style>
