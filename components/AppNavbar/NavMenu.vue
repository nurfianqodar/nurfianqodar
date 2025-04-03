<script setup lang="ts">
import NavLink from "./NavLink.vue";

const router = useRouter();
const routes = router.getRoutes();
const menuState = useMenu();
const { isOpenMenu } = menuState;
</script>

<template>
  <nav v-if="isOpenMenu" class="nav-container">
    <ul>
      <li v-for="route in routes">
        <NavLink :href="route.path" :name="route.name?.toString()" />
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-container {
  position: fixed;
  top: 6rem;
  right: 1rem;
  background-color: $light;
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
  border-radius: 1rem;
  gap: 1rem 0;
  box-shadow: 0 0 0.1rem black;
}
</style>
