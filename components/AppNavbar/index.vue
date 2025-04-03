<script setup lang="ts">
import NavButton from "./NavButton.vue";
import NavLogo from "./NavLogo.vue";
import NavMenu from "./NavMenu.vue";
import NavTheme from "./NavTheme.vue";
</script>

<template>
  <header class="container">
    <NavLogo />
    <div class="right-part">
      <NavMenu />
      <div class="buttons-container">
        <NavTheme />
        <NavButton />
      </div>
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
  background-color: rgba($color: var(--bg-color), $alpha: 0.6);
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 0.1rem var(--text-color);
  .right-part {
    justify-content: space-between;
    display: flex;
    width: max-content;
    .buttons-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    }
  }
}
</style>
