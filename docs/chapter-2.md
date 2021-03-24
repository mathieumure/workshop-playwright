# Chapitre 2 - Les premiers pas

## Se rendre sur playwright dev

- Créer un fichier dans `src/index.js`.

- Dans ce fichier, importer playwright et dans une fonction auto-appelante (IIFE), lancer un chromium et stocker l'instance dans une variable `browser`

```javascript
(async () => {
  const browser = undefined; // TODO insert your code here
})();
```

- À partir de ce `browser`, créer une nouvelle page et la stocker dans une variable `page`.

- Faire naviguer votre page sur `https://playwright.dev/`.

- Afficher dans le terminal, la valeur du `title` de cette page.

> ⚠️ Pensez à fermer vos pages et vos navigateurs, pour que le programme se termine.

- **BONUS** : Lancer votre navigateur sans mode headless.

## Screenshot

- Faire un [screenshot](https://playwright.dev/docs/screenshots) de la page lorsqu'elle est chargée.

## Multi-navigateur

> La puissance de playwright réside dans le support de nombreux navigateurs.

- Modifier votre programme pour qu'il exécute ce code également avec firefox et/ou webkit.

- Émuler un navigateur mobile pré-configuré avec `playwright.devices`

```javascript
const { chromium, devices } = require('playwright');
const browser = await chromium.launch();

const pixel2 = devices['Pixel 2'];
const context = await browser.newContext({
  ...pixel2,
});
```

> ℹ️ Playwright vient d'annoncer le support d'[Android](https://playwright.dev/docs/api/class-android/) et d'[Electron](https://playwright.dev/docs/api/class-electron).

