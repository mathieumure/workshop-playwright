import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Operation : Playwright 🎭',
  description: "A la découverte de playwright, l'outil ultime pour le test e2e ?",
  lang: 'fr-FR',
  outDir: '../vitepress',
  base: '/workshop-playwright/',
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/mathieumure/workshop-playwright' }],
    editLink: {
      pattern: 'https://github.com/mathieumure/workshop-playwright/edit/main/docs/:path',
      text: 'Editer cette page sur GitHub',
    },
    nav: [{ text: 'Workshop', link: '/chapter-1', activeMatch: 'chapter-.*' }],
    sidebar: [
      {
        text: 'Workshop playwright 🎭',
        items: [
          { text: 'Étape 1 - Infiltration 🥷', link: '/chapter-1' },
          { text: 'Étape 2 - Désassemblage 💥', link: '/chapter-2' },
          { text: 'Étape 3 - Ré-assemblage 🔧', link: '/chapter-3' },
          { text: 'Étape 4 - Usage simple 🔤', link: '/chapter-4' },
          { text: 'Étape 5 - Usage avancé 🚀', link: '/chapter-5' },
        ],
      },
    ],
  },
});
