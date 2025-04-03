// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/sass/root.scss"],

  sitemap: {},

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '~/assets/sass/_color.sass' as *;",
        },
      },
    },
  },

  app: {
    head: {
      title: "Nurfian Qodar - Software Developer & Researcher",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content:
            "Nurfian Qodar, Software Developer, Researcher, Portfolio, Full Stack Developer",
        },
        { name: "author", content: "Nurfian Qodar" },
        {
          name: "description",
          content:
            "Personal portfolio of Nurfian Qodar, a Software Developer and Researcher specializing in modern web development, AI, and software engineering.",
        },
        {
          property: "og:title",
          content: "Nurfian Qodar - Software Developer & Researcher",
        },
        {
          property: "og:description",
          content:
            "Discover the work and projects of Nurfian Qodar, a skilled software developer and researcher.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://codefyn.online" },
        // {
        //   property: "og:image",
        //   content: "https://yourwebsite.com/og-image.jpg",
        // },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Nurfian Qodar - Software Developer & Researcher",
        },
        {
          name: "twitter:description",
          content:
            "Explore the portfolio and research projects of Nurfian Qodar.",
        },
        // {
        //   name: "twitter:image",
        //   content: "https://yourwebsite.com/twitter-image.jpg",
        // },
      ],
      link: [
        // { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "canonical", href: "https://codefyn.online" },
      ],
    },
  },

  modules: ["@pinia/nuxt", "@nuxtjs/sitemap"],
});
