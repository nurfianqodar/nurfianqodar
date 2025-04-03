<script setup lang="ts"></script>

<template>
  <section class="hero-container">
    <div class="title-container">
      <h1 class="title">Nurifan Qodar</h1>
      <h2 class="subtitle">Agriculture student and web developer</h2>
    </div>
    <p class="description">
      Cultivating creativity in fields and code. Explore my portfolio, a fusion
      of love for farming and passion for programming.
    </p>

    <div class="links-container">
      <NuxtLink class="link link-resume"> My Resume </NuxtLink>
      <NuxtLink to="#contacts" class="link link-contact">
        Let&apos;s Connect
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-container {
  padding: 8rem 2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1080px;

  .title-container {
    .title {
      font-size: 4rem;
      font-weight: 600;
      color: var(--accent-color);
      line-height: 3.1rem;
    }

    .subtitle {
      font-weight: 200;
      font-size: 2rem;
    }
  }

  .description {
    font-size: 1.5rem;
  }

  .links-container {
    display: flex;
    gap: 2rem;

    .link {
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      font-weight: 600;
      border: 1px solid var(--accent-color);
      color: var(--text-color);
    }

    .link-contact {
      background-color: var(--accent-color);
    }
  }
}

@media (min-width: 720px) {
  .hero-container {
    padding: 8rem 5rem 5rem;
  }
}
</style>
