<script setup>
import useScreenSize from "../hooks/useScreenSize";
import { useMenuStore } from "../stores/menuStore";
import { routes } from "../router";
import NavLink from "./NavLink.vue";

const { width } = useScreenSize();
const menu = useMenuStore();
</script>

<template>
  <nav class="menu-container" :class="{ active: menu.isOpen || width >= 720 }">
    <NavLink
      v-for="({ name, path }, index) in routes"
      :key="index"
      :name="name"
      :path="path"
    />
  </nav>
</template>

<style scoped>
.menu-container {
  position: fixed;
  top: 5.5rem;
  right: 0.5rem;
  padding: 2rem 4rem 2rem 2rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px rgba(var(--primary), 0.2);
  visibility: hidden;
  transition: visibility 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  background-color: rgba(var(--background), 0.5);
  backdrop-filter: blur(5px);
  gap: 2rem 0;
}

.menu-container.active {
  visibility: visible;
}

@media (min-width: 720px) {
  .menu-container {
    position: static;
    box-shadow: none;
    flex-direction: row;
    gap: 0 2rem;
    padding: 0;
  }
}
</style>
