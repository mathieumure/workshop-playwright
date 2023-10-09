# Étape 4 - Usage simple 🔤

🎯 L'objectif ici est de commencer à interagir avec la page.

## Les boutons

Votre objectif va être de cliquer sur le bouton `Getting started` et vérifier que la navigation fonctionne correctement.

Ouvrez le fichier de test `src/chapter_4.spec.ts` et éditez le test intitulé `it should click on getting started`.

- Naviguez vers `https://playwright.dev/` et attendez que le réseau ait terminé de charger grâce à `page.waitForLoadState`.

::: tip INFO
ℹ️ Playwright a un système d'attente assez développé pour la [disponibilité d'un élement](https://playwright.dev/docs/actionability) mais il dispose également d'API pour attendre certains états :

- [`waitForFunction`](https://playwright.dev/docs/api/class-page#page-wait-for-function)
- [`waitForLoadState`](https://playwright.dev/docs/api/class-page#page-wait-for-load-state)
- [`waitForURL`](https://playwright.dev/docs/api/class-page#page-wait-for-url)
- [`waitForRequest`](https://playwright.dev/docs/api/class-page#page-wait-for-request)
- [`waitForResponse`](https://playwright.dev/docs/api/class-page#page-wait-for-response)
- [`waitForSelector`](https://playwright.dev/docs/api/class-page#page-wait-for-selector)
- [`waitForTimeout`](https://playwright.dev/docs/api/class-page#page-wait-for-timeout)
  :::

<Solution>

```typescript
await Promise.all([
  page.goto('https://playwright-site-madd.vercel.app/'),
  page.waitForLoadState('networkidle'),
]);
```

</Solution>

- Cliquez sur le bouton contenant le texte `Getting started` et attendre qu'une navigation ait eu lieu sur `https://playwright-site-madd.vercel.app/getting-started`, en même temps avec `Promise.all`.

::: tip INFO
ℹ️ Playwright dispose de [sélecteurs très puissants](https://playwright.dev/docs/locators)
:::

<Solution>

```typescript
await Promise.all([
  page.waitForURL('https://playwright-site-madd.vercel.app/getting-started'),
  page.getByText('Getting Started with Playwright').click(),
]);
```

</Solution>

- Vérifiez avec `expect` que le titre `h1` de la page soit égale à `Getting Started with the Playwright Advanced Military Division`.

<Solution>

```typescript
await expect(page.locator('h1')).toHaveText("Getting Started with the Playwright Advanced Military Division");
```

</Solution>

- Exécuter votre test uniquement sur chromium

```shell
pnpm playwright test chapter_4 --project "chromium"
# OR
yarn  playwright test chapter_4 --project "chromium"
# OR
./node_modules/.bin/playwright test chapter_4 --project "chromium"
```

## La recherche

Nous allons maintenant vérifier que la recherche fonctionne correctement.

Éditez le test intitulé `it should search for locators`:

- Naviguez vers `https://playwright-site-madd.vercel.app/`

<Solution>

```typescript
await Promise.all([
  page.goto('https://playwright-site-madd.vercel.app/'),
  page.waitForLoadState('networkidle'),
]);
```

</Solution>

- Cliquez sur la barre de recherche qui possède le libellé `Search`

<Solution>

```typescript
await page.getByLabel('Search').click();
```

</Solution>

- Saisissez le texte `agent pikachu` dans le champ de recherche qui a le placeholder `Search agents`. Ce champ de recherche est présent dans une popup qui s'affichera après avoir cliqué sur la barre de recherche

::: tip INFO
ℹ️ Playwright propose deux façons de remplir un champ soit en utilisant l'event input avec la méthode [fill](https://playwright.dev/docs/api/class-page#page-fill) ou encore en simulant la saisie utilisateur avec la méthode [pressSequentially](https://playwright.dev/docs/api/class-locator#locator-press-sequentially)
:::

<Solution>

```typescript
await page.getByPlaceholder('Search agents').fill('pikachu')
```

</Solution>

- Attendez d'avoir une réponse de l'API, qui devrait répondre à la requête suivante `https://playwright-site-madd.vercel.app/api/search?q=pikachu`

::: tip
  Si les expressions régulières ne sont pas votre force :wink:, les requêtes d'API peuvent être identifiées par

```js
const apiRequestRegex = /^https:\/\/playwright-site-madd\.vercel\.app\/api\/search\?q=/;
```

:::

<Solution>

```typescript
await Promise.all([
  page.waitForResponse(/^https:\/\/playwright-site-madd\.vercel\.app\/api\/search\?q=/),
  page.getByPlaceholder('Search agents').fill('pikachu'),
]);
```

</Solution>

- Appuyez sur la touche [entrer](https://playwright.dev/docs/api/class-keyboard#keyboard-press) et attendez qu'une navigation ait lieu sur `http://localhost:3000/agents/<AGENT_ID>`

<Solution>

```typescript
await Promise.all([
  page.waitForURL(/^https:\/\/playwright-site-madd\.vercel\.app\/agents/),
  page.keyboard.press('Enter'),
]);
```

</Solution>

- Vérifiez avec `expect` que le titre `h1` de la page soit égale à `Agent Pikachu`.

<Solution>

```typescript
await expect(page.locator('h1')).toHaveText('Agent Pikachu');
```

</Solution>

Nos agents nous informent que la quatrième phrase qui vous permettra de décoder les codes secrets de Microsoft se trouve dans la page de l'agent `Pikachu`.
Il s'agit de sa mission actuelle.

**Notez-la précieusement** dans `src/passphrases.txt` et vous pouvez passer à la dernière phase du plan, la phase 5 !
