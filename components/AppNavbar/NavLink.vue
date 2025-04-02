<script setup lang="ts">
const { href, name } = defineProps({
  href: String,
  name: String,
});
</script>

<template>
  <NuxtLink :to="href">{{ name }}</NuxtLink>
</template>
