# Chapitre 4 - Les interactions

🎯 L'objectif ici est de commencer à interagir avec la page.

## Les boutons

Nous allons cliquer sur le bouton `Getting started` et vérifier que la navigation fonctionne correctement.

- Créez un nouveau fichier de test `src/chapter_4.spec.ts` et ajouter un nouveau test.
- Naviguez vers `https://playwright.dev/`
- Attendez que le réseau ait terminé de charger grâce à `page.waitForLoadState`.

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

- Cliquez sur le bouton contenant le texte `Getting started` et attendre qu'une navigation ait eu lieu, en même temps avec `Promise.all`.

::: tip INFO
ℹ️ Playwright dispose de [sélecteurs très puissants](https://playwright.dev/docs/selectors)
:::

- Vérifiez avec `expect` que l'URL de la page soit égale à `https://playwright.dev/docs/intro`.

## La recherche

Nous allons maintenant vérifier que la recherche fonctionne correctement.

- Ajouter un nouveau test
- Naviguez vers `https://playwright.dev/`
- Depuis la page getting started, cliquez sur la barre de recherche
- Saisissez le texte `selectors` dans le champ de recherche avec le placeholder `Search docs`. De la popup qui vient de s'afficher.

::: tip INFO
ℹ️ Playwright propose deux façons de remplir un champ soit en utilisant l'event input avec la méthode [fill](https://playwright.dev/docs/api/class-page#page-fill) ou encore en simulant la saisie utilisateur avec la méthode [type](https://playwright.dev/docs/api/class-page#page-type)
:::

- Attendez que la response d'Algolia, qui devrait répondre à la requête suivante `https://<some-dsn>.algolia.net/1/indexes/*/queries?<some-query-params>`
::: tip
Si les expressions régulières ne sont pas votre force :wink:, les requêtes Algolia peuvent être identifiées par
```js
const alogoliaRequestRegex = /^https:\/\/.*.algolia.net\/1\/indexes\/\*\/queries\?/
```
:::

- Appuyez sur la touche [entrer](https://playwright.dev/docs/api/class-page#page-press).
- Attendez qu'une navigation ait lieu.
- Vérifiez avec `expect` que l'URL de la page soit égale à `https://playwright.dev/docs/selectors`.

