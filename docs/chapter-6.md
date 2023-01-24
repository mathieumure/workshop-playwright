# Étape 6 - Usage assisté 🦾

🎯 L'objectif ici est d'utiliser les outils d'aide à la création et au debug de playwright.

## Génération avec codegen

Cette fois ci nous allons utiliser le codegen de playwright pour nous aider à créer nos fichiers de test.

- Lancer le codegen avec la commande suivante :

```shell
pnpm dlx playwright codegen
# OR
npx playwright codegen
```

Effectuez les actions suivantes pour lancer l'auto génération de code

- Naviguez vers https://playwright.dev/
- Cliquez sur le bouton contenant le texte `Get started`.
- Cliquez la recherche
- Cherchez `locators` dans la pop-in qui vient de s'ouvrir et appuyer sur entrée
- Sur la page locators, cliquez sur le premier lien de la page avec le texte `Locators`
- Sur l'API de locators, cliquez dans le menu de droite sur le lien `clear`

<Solution>

```typescript
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search docs').fill('locators');
  await page.getByPlaceholder('Search docs').press('Enter');
  await page
    .getByRole('paragraph')
    .filter({ hasText: "Locators are the central piece of Playwright's auto-waiting and retry-ability. I" })
    .getByRole('link', { name: 'Locator' })
    .click();
  await page.getByRole('link', { name: 'clear' }).click();
});
```

</Solution>

- Copiez le code généré dans le fichier `chapter_6.spec.ts` et lancez les tests pour vérifier que cela fonctionne. N'oubliez pas d'ajouter les expect nécessaires et de nettoyer le code généré si besoin.

## Visualiser avec Trace Viewer

Nous allons maintenant utiliser les traces pour nous aider à debugger avec toute la puissance de playwright.

Pour cela, lancez les tests avec les traces activées,

```shell
pnpm test:e2e -- chapter_6 --trace on
# OR
yarn test:e2e -- chapter_6 --trace on
# OR
npm run test:e2e -- chapter_6 --trace on
```

- Ouvrez maintenant vos traces avec la commande suivante

```shell
pnpm playwright show-trace <PATH_TO_YOUR_ZIP_FILE>
# OR
yarn playwright show-trace <PATH_TO_YOUR_ZIP_FILE>
# OR
./node_modules/.bin/playwright show-trace <PATH_TO_YOUR_ZIP_FILE>
```

- Exécutez-les pas à pas dans l'interface qui vient de s'ouvrir
