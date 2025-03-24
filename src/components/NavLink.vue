<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useMenuStore } from "../stores/menuStore";
const props = defineProps({
  name: String,
  path: String,
});

const menu = useMenuStore();
</script>

<template>
  <RouterLink
    @click="menu.close()"
    exactActiveClass="active"
    class="nav-link"
    :to="props.path"
    >{{ props.name }}</RouterLink
  >
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: rgb(var(--primary));
}

.active {
  color: rgb(var(--blue));
}
</style>
