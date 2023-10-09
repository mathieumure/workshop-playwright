# Étape 6 - Usage assisté 🦾

🎯 L'objectif ici est d'utiliser les outils d'aide à la création et au debug de playwright.

## Génération avec codegen

Cette fois-ci nous allons utiliser le codegen de playwright pour nous aider à créer nos fichiers de test.

- Lancer le codegen avec la commande suivante :

```shell
pnpm playwright codegen
# OR
yarn playwright codegen
# OR
npx playwright codegen
```

Effectuez les actions suivantes pour lancer l'auto génération de code

- Naviguez vers https://playwright-site-madd.vercel.app/
- Cliquez sur le bouton contenant le texte `Getting started with Playwright`.
- Cliquez la recherche
- Cherchez `Agent Mario` dans la pop-in qui vient de s'ouvrir et appuyer sur entrée

<Solution>

```typescript
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://playwright-site-madd.vercel.app/');
    await page.getByRole('link', { name: 'Getting Started with Playwright' }).click();
    await page.getByLabel('Search').click();
    await page.getByPlaceholder('Search agents').fill('agent mario');
    await page.getByPlaceholder('Search agents').press('Enter');
});
```

</Solution>

- Copiez le code généré dans le fichier `chapter_6.spec.ts` et lancez les tests pour vérifier que cela fonctionne. N'oubliez pas d'ajouter les expect nécessaires et de nettoyer le code généré si besoin.

## Visualiser avec Trace Viewer

Nous allons maintenant utiliser les traces pour nous aider à debugger avec toute la puissance de playwright.

Pour cela, lancez les tests avec les traces activées,

```shell
pnpm playwright test chapter_6 --trace on
# OR
yarn playwright test chapter_6 --trace on
# OR
./node_modules/.bin/playwright test chapter_6 --trace on
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
