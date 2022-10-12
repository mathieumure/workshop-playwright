# Étape 1 - Infiltration 🥷

🎯 L'objectif ici est de récupérer l'arme ultime de Microsoft et de vérifier que tout est correctement installé pour la suite de votre mission.

## Pré-requis

Assurez-vous d'avoir [NodeJS](https://nodejs.org/en/) en version 12 ou supérieure

```shell
node -v # v12+
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

- Vérifiez ensuite qu'il soit bien installé

```shell
pnpm check
# OR
yarn check
# OR
npm run check
```

- Vous devriez constater que vous avez bien installé la dernière version de playwright (`v1.27.1`).

Le résultat de cette commande est la première phrase qui vous permettra de décoder les codes secrets de Microsoft. __Notez-la précieusement__.

Bravo 💪 ! Avec cette première phrase, vous êtes maintenant prêt pour passer à la phase 2 du plan !
