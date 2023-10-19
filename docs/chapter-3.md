# Étape 3 - Ré-assemblage 🔧

🎯 L'objectif ici est de modifier notre projet pour qu'il utilise l'API de test de playwright.

## Configuration des tests

Il est maintenant tant que vous configuriez votre projet pour qu'il puisse lancer des tests automatisés.

Pour cela, Playwright met à disposition un package dédié `@playwright/test`.

- Ajoutez cette dépendance sur votre projet

```shell
pnpm install -D @playwright/test
# OR
npm install -D @playwright/test
# OR
yarn install -D @playwright/test
```

Ce package s'appuie sur un fichier de configuration `playwright.config.js` ou `playwright.config.ts`.

- Ouvrer le fichier de configuration `playwright.config.ts` situé à la racine du projet.

En vous appuyant sur [la documentation](https://playwright.dev/docs/test-configuration), configurez-le de la manière suivante :

- Définissez le dossier source des tests pour qu'il soit `./src`

<Solution>

```typescript
const config: PlaywrightTestConfig = {
  testDir: './src',
};
```

</Solution>

- Définissez le dossier de sortie pour qu'il soit `./test-results`

<Solution>

```typescript
const config: PlaywrightTestConfig = {
  outputDir: './test-results',
};
```

</Solution>

- Définissez le nombre de re-tentative pour qu'il soit de 1 si `process.env.CI` est défini et de 0 sinon

<Solution>

```typescript
const config: PlaywrightTestConfig = {
  retries: process.env.CI ? 1 : 0,
};
```

</Solution>

- Créer [un projet](https://playwright.dev/docs/test-configuration#multiple-browsers) pour chaque navigateur que l'on souhaite tester `chromium desktop`, `firefox desktop` et `Pixel 4`

<Solution>

```typescript
import type { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'Pixel 4',
      use: {
        ...devices['Pixel 4'],
      },
    },
  ],
};
```

</Solution>

::: tip INFO
ℹ️ Si vous devez démarrer un server local, playwright peut s'en occuper pour vous avec l'option [`webServer`](https://playwright.dev/docs/api/class-testconfig#test-config-web-server)

```ts
import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run start',
    port: 3000,
    timeout: 10000,
    reuseExistingServer: !process.env.CI,
  },
};
```

:::

## Premiers tests

Pour commencer, nous allons vérifier que le titre de la page est correct.

- Ouvrez le fichier de test `./src/chapter_3.spec.ts`

Editez le test nommé `it should have the correct title`:

- Naviguez sur `https://playwright-site-madd.vercel.app/`

<Solution>

```typescript
test('it should have the correct title', async ({ page }) => {
  await page.goto('https://playwright-site-madd.vercel.app/');
});
```

</Solution>

- Vérifiez que le titre est bien identique à `Welcome to the official website of Microsoft's Advanced Defense Division | Security X technology`, pour cela, vous pouvez utiliser la fonction [`expect`](https://playwright.dev/docs/test-assertions) exposée par `@playwright/test` qui étend directement de [jest](https://jestjs.io/)!

<Solution>

```typescript
expect(await page.title()).toEqual("Welcome to the official website of Microsoft's Advanced Defense Division | Security X technology");
// or shorten
await expect(page).toHaveTitle("Welcome to the official website of Microsoft's Advanced Defense Division | Security X technology");
```

</Solution>

- Lancez vos tests e2e via la CLI `playwright test` et vérifiez qu'ils passent correctement

```shell
pnpm playwright test
# OR
yarn playwright test
# OR
./node_modules/.bin/playwright test
```

## Visual testing

Playwright permet également de faire du [visual testing](https://playwright.dev/docs/test-snapshots).

- Dans chacun de ces 2 tests restants, naviguez vers `ttps://playwright-site-madd.vercel.app/`

<Solution>

```typescript
test('it should have the correct screenshot for light mode', async ({ page }) => {
  await page.goto('https://playwright-site-madd.vercel.app/');
});

test('it should have the correct screenshot for dark mode', async ({ page }) => {
  await page.goto('https://playwright-site-madd.vercel.app/');
});
```

</Solution>

- Émulez le bon `colorScheme` en fonction du test

<Solution>

```typescript
await page.emulateMedia({ colorScheme: 'dark' });
await page.emulateMedia({ colorScheme: 'light' });
```

</Solution>

- Utilisez `await expect(page).toHaveScreenshot( /* options */ );` pour faire un screenshot de la page entière.

<Solution>

```typescript
await expect(page).toHaveScreenshot({ fullPage: true });
```

</Solution>

- Pour générer la première fois vos images, lancez vos tests avec la commande `pnpm playwright test --update-snapshots` et vérifiez qu'ils sont correctement générés.
- Relancer vos tests normalement et vérifiez qu'ils passent avec la commande `pnpm playwright test`

Nos agents nous informent que la troisième phrase qui vous permettra de décoder les codes secrets de Microsoft est contenue dans votre screenshot du mode dark pour chromium desktop.
Il s'agit du paragraphe situé sous le titre `Commitment to Global Security`.

**Notez-la précieusement** dans `src/passphrases.txt` et vous pouvez passer à la phase 4 du plan !
