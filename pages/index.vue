<script setup lang="ts">
import useThemeStore from "~/stores/useTheme";

definePageMeta({
  name: "Home",
});

useHead({
  title: "Home | Nurfian Qodar",
});

const { theme } = useThemeStore();
</script>

<template>
  <main class="container" :class="theme">
    <SectionHero />
    <SectionAbout />
    <SectionContact />
  </main>
</template>
