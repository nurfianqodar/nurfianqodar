<script setup lang="ts">
import NavLink from "./NavLink.vue";

const router = useRouter();
const routes = router.getRoutes();
const menuState = useMenu();
const { isOpenMenu } = menuState;
const { innerWidth } = useScreenSize();
</script>

<template>
  <nav v-if="isOpenMenu || innerWidth >= 720" class="nav-container">
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
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.1rem var(--text-color);
  border-radius: 1rem;
  width: 50%;
  max-width: 15rem;
  padding: 0.5rem;

  ul {
    padding: 0.1rem;
    gap: 0.2rem 0.2rem;
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 720px) {
  .nav-container {
    position: static;
    flex-direction: row;
    background-color: transparent;
    box-shadow: none;
    width: max-content;
    max-width: none;

    ul {
      flex-direction: row;
      align-items: center;
    }
  }
}
</style>
