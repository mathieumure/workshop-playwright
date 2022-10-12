# Étape 2 - Désassemblage 💥

🎯 L'objectif ici est de découvrir l'API de playwright sans s'occuper des tests.

## Se rendre sur playwright dev

- Créez un fichier dans `src/chapter_2.ts`.

- Dans ce fichier, importez playwright et dans une fonction asynchrone, lancez un chromium et stockez l'instance dans une variable [`browser`](https://playwright.dev/docs/api/class-browser)

```typescript
const run = async () => {
  // TODO
};

run();
```

- À partir de ce `browser`, créez une nouvelle page et stockez-la dans une variable `page`.

- Faites naviguer votre page sur `https://playwright.dev/`.

- Affichez dans le terminal, la valeur du `title` de cette page.

- Exécutez votre script

```shell
pnpm ts-node src/chapter_2.ts
# OR
yarn ts-node src/chapter_2.ts
# OR
./node_modules/.bin/ts-node src/chapter_2.ts
```

Vous devriez obtenir

```
Fast and reliable end-to-end testing for modern web apps | Playwright
```

::: tip INFO
Pensez à fermer vos pages et vos navigateurs, pour que le programme se termine.
:::

- Modifiez votre script pour lancer le navigateur visuellement, c'est-à-dire sans mode headless.

## Screenshot

- Faites un [screenshot](https://playwright.dev/docs/screenshots) de la page entière dans `src/screenshots/homepage.png`.

Vous devriez obtenir ![resultat du screenshot](./assets/chapter2_screenshot.png)

- Configurez votre page pour avoir une préférence pour le dark mode grâce à l'API [`emulateMedia`](https://playwright.dev/docs/api/class-page#page-emulate-media) et refaites un screenshot dans `src/screenshots/homepage_dark.png`

Vous devriez obtenir ![resultat du screenshot en dark mode](./assets/chapter2_screenshot_dark.png)

## Multi-navigateur

Une des puissances de playwright réside dans son support de plusieurs navigateurs comme `chromium`, `firefox` et `webkit`.

::: tip INFO
Playwright possède également un support expérimental d'[Android](https://playwright.dev/docs/api/class-android/) et d'[Electron](https://playwright.dev/docs/api/class-electron).
:::

- Modifiez votre programme pour qu'il exécute ce code également avec firefox et/ou webkit. Vous pourriez par exemple passer un paramètre à la fonction `run`

```typescript
const run = async (browserType: 'firefox' | 'chromium' | 'webkit') => {};

Promise.all([run('chromium'), run('firefox'), run('webkit')]);
```

::: tip INFO
Vous pouvez récupérer le nom du navigateur avec la commande suivante, ce qui peut vous être utile pour avoir des screenshots par navigateur

```typescript
const _browserType = await browser.browserType();
console.log(_browserType.name()); // firefox, chromium or webkit
```

:::

- Modifier votre script pour que les tests des différents navigateurs soient fait avec une émulation d'un `Pixel 4`. Pas d'inquiètude, il est déjà préconfiguré grace à [`playwright.devices`](https://playwright.dev/docs/api/class-playwright#playwright-devices)

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

Nos agents nous informent que la seconde phrase qui vous permettra de décoder les codes secrets de Microsoft est le titre de la page que vous avez affiché dans votre terminal.

__Notez-la précieusement__ et vous pouvez passer à la phase 3 du plan !
