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
- [`waitForNavigation`](https://playwright.dev/docs/api/class-page#page-wait-for-navigation)
- [`waitForRequest`](https://playwright.dev/docs/api/class-page#page-wait-for-request)
- [`waitForResponse`](https://playwright.dev/docs/api/class-page#page-wait-for-response)
- [`waitForSelector`](https://playwright.dev/docs/api/class-page#page-wait-for-selector)
- [`waitForTimeout`](https://playwright.dev/docs/api/class-page#page-wait-for-timeout)
- [`waitForURL`](https://playwright.dev/docs/api/class-page#page-wait-for-url)
  :::

<Solution>

```typescript
await Promise.all([page.goto('https://playwright.dev/'), page.waitForLoadState('networkidle')]);
```

</Solution>

- Cliquez sur le bouton contenant le texte `Getting started` et attendre qu'une navigation ait eu lieu, en même temps avec `Promise.all`.

::: tip INFO
ℹ️ Playwright dispose de [sélecteurs très puissants](https://playwright.dev/docs/locators)
:::

<Solution>

```typescript
await Promise.all([page.getByText('Get started').click(), page.waitForNavigation()]);
```

</Solution>

- Vérifiez avec `expect` que l'URL de la page soit égale à `https://playwright.dev/docs/intro`.

<Solution>

```typescript
await expect(page).toHaveURL('https://playwright.dev/docs/intro');
```

</Solution>

- Exécuter votre test uniquement sur chromium

```shell
pnpm test:e2e -- chapter_4 --project "chromium"
# OR
yarn test:e2e -- chapter_4 --project "chromium"
# OR
npm run test:e2e -- chapter_4 --project "chromium"
```

## La recherche

Nous allons maintenant vérifier que la recherche fonctionne correctement.

Editez le test intitulé `it should search for locators`:

- Naviguez vers `https://playwright.dev/`

<Solution>

```typescript
await Promise.all([page.goto('https://playwright.dev/'), page.waitForLoadState('networkidle')]);
```

</Solution>

- Depuis la page getting started, cliquez sur la barre de recherche qui possède le text `Search`

<Solution>

```typescript
await page.getByText('Search').click();
```

</Solution>

- Saisissez le texte `locators` dans le champ de recherche qui a le placeholder `Search docs`. Ce champ de recherche est présent dans une popup qui s'affichera après avoir cliqué sur la barre de recherche

::: tip INFO
ℹ️ Playwright propose deux façons de remplir un champ soit en utilisant l'event input avec la méthode [fill](https://playwright.dev/docs/api/class-page#page-fill) ou encore en simulant la saisie utilisateur avec la méthode [type](https://playwright.dev/docs/api/class-page#page-type)
:::

<Solution>

```typescript
await page.getByPlaceholder('Search docs').fill('locators');
```

</Solution>

- Attendez d'avoir une réponse d'Algolia, qui devrait répondre à la requête suivante `https://<some-dsn>.algolia.net/1/indexes/*/queries?<some-query-params>`
  ::: tip
  Si les expressions régulières ne sont pas votre force :wink:, les requêtes Algolia peuvent être identifiées par

```js
const alogoliaRequestRegex = /^https:\/\/.*.algolia.net\/1\/indexes\/\*\/queries\?/;
```

:::

<Solution>

```typescript
await Promise.all([
  page.getByPlaceholder('Search docs').fill('locators'),
  page.waitForResponse(/^https:\/\/.*.algolia.net\/1\/indexes\/\*\/queries\?/),
]);
```

</Solution>

- Appuyez sur la touche [entrer](https://playwright.dev/docs/api/class-keyboard#keyboard-press) et attendez qu'une navigation ait lieu

<Solution>

```typescript
await Promise.all([page.keyboard.press('Enter'), page.waitForNavigation()]);
```

</Solution>

- Vérifiez avec `expect` que l'URL de la page soit égale à `https://playwright.dev/docs/locators`.

<Solution>

```typescript
await expect(page).toHaveURL('https://playwright.dev/docs/locators');
```

</Solution>

Nos agents nous informent que la quatrième phrase qui vous permettra de décoder les codes secrets de Microsoft se trouve dans la page des `locators`.
Il s'agit de la dernière phrase située juste avant le titre `More Locators`.

**Notez-la précieusement** dans `src/passphrases.txt` et vous pouvez passer à la dernière phase du plan, la phase 5 !
