# Étape 5 - Usage avancé 🚀

🎯 L'objectif ici est de simuler la connexion en oauth2 d'un formulaire.

## Simulation d'un formulaire

Nos agents nous informent que la dernière pass-phrase et le code de décryptage sont protégés derrière un formulaire de login.

Nous n'avons pas réussi à obtenir un login et un password, mais ils ont trouvé un jeton magique.

Afin d'éviter tout soupçon de la part de leur système, vous devez être invisibles et renseigner ces champs.

- Créez un nouveau fichier de test `src/chapter_4.spec.ts` et ajouter un nouveau test.
- Ajoutez une fonction qui sera exécutée avant chaque test avec `test.beforeEach`
- Ajoutez une [route](https://playwright.dev/docs/api/class-route) playwright sur `https://accounts.google.com/ServiceLogin/webreauth`. Elle devra faire une redirection 302 qui ajoutera le query param `token=<3WindowsVista<3`
- Naviguez vers `https://workshop-playwright-server.vercel.app/`
- Remplissez les champs Login et Password avec des valeurs aléatoires
- Cliquer sur le bouton de login
- Attendez qu'une navigation est lieu sur `https://workshop-playwright-server.vercel.app/` pour attendre la réponse du service tiers
- Vérifier que le titre la page rendu est bien `You're in Microsoft deep secrets page`
- Faites ensuite un screenshot pour observer le contenue de la page

Bravo ! Vous avez réussi à récupérer l'ensemble des passphrases et des codes ! Il est maintenant tant de déchiffrer tout cela

## Décoder le tout

La clé que vous avez récupérée correspond à la position de chaque mot dans chacun des phrases.

Par exemple, si la clé est `3 4 1 3 2`, alors la phrase secrète sera :

`<le 3ème mot de la phrase de la phase 1> <le 4ème mot de la phrase de la phase 2> <le 1er mot de la phrase de la phase 3> <le 3ème mot de la phrase de la phase 4> <le 2nd mot de la phrase de la phase 5>`
