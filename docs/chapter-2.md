# Chapitre 2 - Les premiers pas

🎯 L'objectif ici est de découvrir l'API de playwright sans s'occuper des tests.

## Se rendre sur playwright dev

- Créez un fichier dans `src/chapitre_2.ts`.

- Dans ce fichier, importez playwright et dans une fonction asynchrone, lancer un chromium et stocker l'instance dans une variable [`browser`](https://playwright.dev/docs/api/class-browser)

```typescript
const run = async () => {
  // TODO
};

run();
```

- À partir de ce `browser`, créer une nouvelle page et la stocker dans une variable `page`.

- Faire naviguer votre page sur `https://playwright.dev/`.

- Afficher dans le terminal, la valeur du `title` de cette page. Vous devriez obtenir

```
Fast and reliable end-to-end testing for modern web apps | Playwright
```

::: tip INFO
Pensez à fermer vos pages et vos navigateurs, pour que le programme se termine.
:::

- Lancer votre script avec la commande suivante :

```shell
pnpm ts-node src/chapitre_2.ts
```

- Lancer maintenant le navigateur sans mode headless.

## Screenshot

- Faire un [screenshot](https://playwright.dev/docs/screenshots) de la page entière dans `src/screenshots/homepage.png`.

Vous devriez obtenir ![resultat du screenshot](./assets/chapter2_screenshot.png)

- Configurer votre page pour avoir une préférence pour le dark mode grace à l'API [`emulateMedia`](https://playwright.dev/docs/api/class-page#page-emulate-media) et refaite un screenshot dans `src/screenshots/homepage_dark.png`

Vous devriez obtenir ![resultat du screenshot en dark mode](./assets/chapter2_screenshot_dark.png)

## Multi-navigateur

Une des puissances de playwright réside dans son support de `chromium`, `firefox` et `webkit`.

::: tip INFO
Playwright possède également un support expérimental d'[Android](https://playwright.dev/docs/api/class-android/) et d'[Electron](https://playwright.dev/docs/api/class-electron).
:::

- Modifiez votre programme pour qu'il exécute ce code également avec firefox et/ou webkit. Vous pourriez par exemple passer un paramètre à la fonction `run`

```typescript
const run = async (browserType: 'firefox' | 'chromium' | 'webkit') => {};

Promise.all([run('chromium'), run('firefox'), run('webkit')]);
```

::: tip INFO
Vous pouvez récupérer le nom du navigateur avec la commande

```typescript
const _browserType = await browser.browserType();
console.log(_browserType.name()); // firefox, chromium or webkit
```

:::

- Émuler un navigateur `Pixel 4` préconfiguré grace à [`playwright.devices`](https://playwright.dev/docs/api/class-playwright#playwright-devices)

```typescript
import playwright from 'playwright';

const browser = await chromium.launch();

const contextOption: playwright.BrowserContextOptions = {
  ...playwright.devices['Pixel 4'],
};
if (browserTypeName === 'firefox') {
  contextOption.isMobile = false;
}
const mobileContext = await browser.newContext(contextOption);
const page = await mobileContext.newPage();
```

:::warning ATTENTION
Les `devices` définissent une propriété `isMobile` qui n'est pas compatible avec `firefox`.
:::
