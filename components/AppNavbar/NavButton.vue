<script setup lang="ts">
const menuState = useMenu();
const { toggleMenu, isOpenMenu } = menuState;
</script>

<template>
  <button class="button" @click="toggleMenu">
    <!-- Menu icon -->
    <svg
      v-if="!isOpenMenu"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      class="icon-menu"
    >
      <path
        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
      />
    </svg>

    <!-- Close icon -->
    <svg
      v-if="isOpenMenu"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      class="icon-close"
    >
      <path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  </button>
</template>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon-close {
    fill: red;
  }
}
</style>
