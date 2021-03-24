# Chapitre 1 - Getting started

## Pré-requis

Vous devez avoir [NodeJS](https://nodejs.org/en/) en version 10 ou supérieure, d'installé sur votre poste

```shell
node -v
```

## Récupération du projet source

- Cloner le repository du handson 

```shell
git clone https://github.com/mathieumure/handson-playwright
```

- Puis installer les dépendances

```shell
yarn install
# OR
npm install
```

## Installation de playwright

- Installer playwright

```shell
yarn add -D playwright
# OR
npm install --save-dev playwright
```

- Vérifier ensuite qu'il soit bien installé
```shell
yarn playwright --version
# OR
./node_modules/.bin/playwright --version
```

- Vous devriez obtenir le résultat suivant
```shell
Version 1.9.2
```

Bravo 💪 ! Vous êtes maintenant prêt pour faire vos premiers pas avec playwright!

