<script setup>
import HeroSection from "../components/HeroSection.vue";
</script>

<template>
  <main>
    <HeroSection />
  </main>
</template>

<style scoped>
main {
  padding: 5rem 1.5rem;
}

@media (min-width: 720px) {
  main {
    padding: 5rem 3rem;
  }
}

@media (min-width: 1080px) {
  main {
    padding: 5rem 8rem;
  }
}
</style>
