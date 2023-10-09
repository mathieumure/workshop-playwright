# Étape 1 - Infiltration 🥷

🎯 L'objectif ici est de récupérer l'arme ultime de Microsoft et de vérifier que tout est correctement installé pour la suite de votre mission.

## Pré-requis

Assurez-vous d'avoir [NodeJS](https://nodejs.org/en/) en version 12 ou supérieure

```shell
node -v # v16+
```

## Récupération du projet source

- Clonez le code source du codelab

```shell
git clone https://github.com/mathieumure/workshop-playwright.git
```

- Puis installez les dépendances

```shell
pnpm install
# OR
yarn install
# OR
npm install
```

## Installation de playwright

- Installez playwright

```shell
pnpm add -D playwright
# OR
yarn add -D playwright
# OR
npm install -D playwright
```

Nous allons utiliser chromium & firefox pour ce workshop. Il faut donc demander à playwright de les installer

```shell
pnpm playwright install chromium firefox
# OR
yarn playwright install chromium firefox
# OR
./node_modules/.bin/playwright install chromium firefox
```

::: tip INFO
La force de Playwright est notamment de pouvoir supporter plusieurs navigateurs comme chromium, chrome, edge, firefox ou webkit. Si vous voulez tous les installer en une seule commande lancer uniquelement la commande install sans paramètre.

```
pnpm playwright install
```

:::

- Vérifiez ensuite qu'il soit bien installé

```shell
pnpm check
# OR
yarn check
# OR
npm run check
```

- Vous devriez constater que vous avez bien installé la dernière version de playwright (`v1.29.1`).

Le résultat de cette commande est la première phrase qui vous permettra de décoder les codes secrets de Microsoft. **Notez-la précieusement** dans `src/passphrases.txt`.

Bravo 💪 ! Avec cette première phrase, vous êtes maintenant prêt pour passer à la phase 2 du plan !
