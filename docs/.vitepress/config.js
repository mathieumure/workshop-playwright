import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hands on playwright',
  description: "A la découverte de playwright, l'outil ultime pour le test e2e ?",
  lang: 'fr-FR',
  outDir: '../vitepress',
  base: '/handson-playwright/',
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/mathieumure/handson-playwright' }],
    editLink: {
      pattern: 'https://github.com/mathieumure/handson-playwright/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    sidebar: [
      {
        text: 'Hands-on',
        items: [
          { text: 'Chapitre 1 - Getting started', link: '/chapter-1' },
          { text: 'Chapitre 2 - Les premiers pas', link: '/chapter-2' },
          { text: 'Chapitre 3 - Les interactions', link: '/chapter-3' },
          { text: 'Chapitre 4 - Avec Jest', link: '/chapter-4' },
        ],
      },
    ],
  },
})
