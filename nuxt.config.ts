// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  app: {
    head: {
      title: "Nurfian Qodar",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          charset: "utf-8",
          name: "keywords",
          content:
            "Nurfian Qodar, Nurfian, Profile Nufian, Fian, Portfolio Nurfian",
        },
        {
          name: "author",
          content: "Nurfian Qodar",
        },
      ],
    },
  },
});
