# Chapitre 1 - Getting started

🎯 L'objectif ici est de vérifier que tout est correctement installé pour la suite du workshop.

## Pré-requis

Assurez-vous d'avoir [NodeJS](https://nodejs.org/en/) en version 12 ou supérieure

```shell
node -v # v12+
```

## Récupération du projet source

- Clonez le repository du codelab

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

- Vérifiez ensuite qu'il soit bien installé

```shell
pnpm playwright --version
# OR
yarn playwright --version
# OR
./node_modules/.bin/playwright --version
```

- Vous devriez obtenir un résultat équivalent

```shell
Version 1.25.0
```

Bravo 💪 ! Vous êtes maintenant prêt pour faire vos premiers pas avec playwright!
