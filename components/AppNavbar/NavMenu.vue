<script setup lang="ts">
import NavLink from "./NavLink.vue";

const router = useRouter();
const routes = router.getRoutes();
</script>

<template>
  <nav>
    <ul>
      <li v-for="route in routes">
        <NavLink :href="route.path" :name="route.name?.toString()" />
      </li>
    </ul>
  </nav>
</template>
