# Étape 3 - Ré-assemblage 🔧

🎯 L'objectif ici est de modifier notre projet pour qu'il utilise l'API de test de playwright.

## Configuration des tests

Il est maintenant tant que vous configuriez votre projet pour qu'il puisse lancer des tests automatisés.

Pour cela, Playwright met à disposition un package dédié `@playwright/test`.

- Ajoutez cette dépendance sur votre projet

```shell
pnpm install @playwright/test
# OR
npm install @playwright/test
# OR
yarn install @playwright/test
```

Ce package s'appuie sur un fichier de configuration `playwright.config.js` ou `playwright.config.ts`.

- Créer le fichier de configuration `playwright.config.ts` avec le contenu suivant :

```ts
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {};

export default config;
```

- En vous appuyant sur [la documentation](https://playwright.dev/docs/test-configuration), configurez-le de la manière suivante :
  - Définissez le dossier source des tests pour qu'il soit `./src`
  - Définissez le dossier de sortie pour qu'il soit `./test-results`
  - Définissez le nombre de re-tentative pour qu'il soit de 1 si `process.env.CI` est défini et de 0 sinon
  - Créer [un projet](https://playwright.dev/docs/test-configuration#multiple-browsers) pour chaque navigateur que l'on souhaite tester `chromium desktop`, `firefox desktop`, `webkit desktop` et `Pixel 4`

::: tip INFO
ℹ️ Si vous devez démarrer un server local, playwright peut s'en occuper pour vous avec l'option [`webServer`](https://playwright.dev/docs/api/class-testconfig#test-config-web-server)

```ts
import type { PlaywrightTestConfig } from '@playwright/test';
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

Pour commencer, nous allons vérifier le titre de la page.

- Créez un fichier de test `./src/chapter_3.spec.ts`
- Ajouter un nouveau test et nommez-le `it should have the correct title`

```typescript
import { test, expect } from '@playwright/test';

test('TODO', async ({ page, browser }) => {
  // TODO
});
```

- Naviguez sur `https://playwright.dev/`
- Vérifiez que le titre est bien identique à `Fast and reliable end-to-end testing for modern web apps | Playwright`, pour cela vous pouvez utiliser la fonction [`expect`](https://playwright.dev/docs/test-assertions) exposée par `@playwright/test` qui étend directement de [jest](https://jestjs.io/)!

```ts
expect().toEqual();
```

- Lancez vos tests avec la commande `npm run test:e2e` et vérifiez qu'ils passent correctement

## Visual testing

Playwright permet également de faire du [visual testing](https://playwright.dev/docs/test-snapshots).

- Ajouter dans votre fichier `src/chapter_3.spec.ts`, 2 nouveaux tests `it should have the correct screenshot for light mode` et `it should have the correct screenshot for dark mode`
- Dans chacun de ces 2 tests, naviguez vers `https://playwright.dev/`
- Émulez le bon `colorScheme` en fonction du test
- Utilisez `await expect(page).toHaveScreenshot( /* options */ );` pour faire un screenshot de la page entière.
- Pour générer la première fois vos images, lancez vos tests avec la commande `npm run test:e2e -- --update-snapshots` et vérifiez qu'ils sont correctement générés.
- Relancer vos tests normalement et vérifiez qu'ils passent avec la commande `npm run test:e2e`

Nos agents nous informent que la troisième phrase qui vous permettra de décoder les codes secrets de Microsoft est contenue dans votre screenshot du mode dark pour chromium desktop.
Il s'agit de la seconde phrase du premier paragraphe situé sous le titre `No trade-offs • No limits`.

__Notez-la précieusement__ et vous pouvez passer à la phase 4 du plan !
