// https://nuxt.com/docs/api/configuration/nuxt-config

import path from "node:path";

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      title: "Slava-test",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1.0",
        },
      ],
      link: [
        {
          rel: "preload",
          as: "font",
          type: "font/woff",
          href: "/nissan-brand-light.woff",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff",
          href: "/nissan-brand-bold.woff",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff",
          href: "/nissan-brand-regular.woff",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "/nissan-brand-light.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "/nissan-brand-bold.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "/nissan-brand-regular.woff2",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  postcss: {
    // Add plugin names as key and arguments as value
    // Install them before as dependencies with npm or yarn
    plugins: {
      "postcss-nested-ancestors": {},
      "postcss-nested": {},
      "postcss-inline-svg": {
        paths: [path.join(__dirname, "./assets/images/")],
        removeFill: true,
      },
      cssnano: {
        preset: "default",
      },
    },
  },
});
