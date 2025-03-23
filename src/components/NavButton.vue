<script setup>
import useScreenSize from "../hooks/useScreenSize";
import { useMenuStore } from "../stores/menuStore";

const menu = useMenuStore();
const { width } = useScreenSize();
</script>

<template>
  <button
    v-if="width < 720"
    class="button"
    :class="{ active: menu.isOpen }"
    title="Menu"
    type="button"
    @click="menu.toggle()"
  >
    <div class="burger-line"></div>
    <div class="burger-line"></div>
    <div class="burger-line"></div>
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  gap: 4px 0;
}

.burger-line {
  width: 18px;
  height: 2px;
  border-radius: 1px;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.button.active > .burger-line {
  background-color: rgb(var(--red)) !important;
}

.button > .burger-line:nth-child(1) {
  background-color: rgb(var(--blue));
  transform-origin: top left;
}
.button.active > .burger-line:nth-child(1) {
  transform: rotate(45deg);
  transform-origin: top left;
}

.button > .burger-line:nth-child(2) {
  background-color: rgb(var(--yellow));
  transform-origin: middle left;
}
.button.active > .burger-line:nth-child(2) {
  transform: scaleX(0);
}

.button > .burger-line:nth-child(3) {
  background-color: rgb(var(--green));
  transform-origin: bottom left;
}

.button.active > .burger-line:nth-child(3) {
  transform: rotate(-45deg);
}
</style>
