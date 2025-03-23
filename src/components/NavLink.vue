<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps({
  name: String,
  path: String,
});
</script>

<template>
  <RouterLink class="nav-link" :to="props.path">{{ props.name }}</RouterLink>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: rgb(var(--primary));
}
</style>
