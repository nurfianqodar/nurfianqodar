<script setup lang="ts">
const { href, name } = defineProps({
  href: String,
  name: String,
});
const menuState = useMenu();
const { closeMenu } = menuState;
</script>

<template>
  <NuxtLink
    active-class="active"
    @click="closeMenu"
    :to="href"
    class="container"
  >
    <div class="label">{{ name }}</div>
    <div class="underline"></div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.container {
  padding: 0.3rem 0.7rem;
  margin: 0.4rem;
  display: flex;
  border-radius: 0.7rem;
  flex: 1;
}

.container.active {
  background-color: $accent;
  .label {
    color: $light;
  }
}
</style>
