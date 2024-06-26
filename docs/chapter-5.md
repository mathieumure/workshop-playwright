# Étape 5 - Usage avancé 🚀

🎯 L'objectif ici est de simuler la connexion en oauth2 d'un formulaire.

## Simulation d'un formulaire

Nos agents nous informent que la dernière pass-phrase et le code de décryptage sont protégés derrière un formulaire caché accessible via l'URL [https://playwright-site-madd.vercel.app/_wpftw_/bluescreenofthedeath](https://playwright-site-madd.vercel.app/_wpftw_/bluescreenofthedeath).

Malheureusement, nous avons dû exfiltrer l'agent qui n'a pas réussi à obtenir un login et un password, mais a obtenu un jeton magique.

Afin d'éviter tout soupçon de la part de leur système, vous devez être invisibles ! Pour cela, vous allez utiliser les [route](https://playwright.dev/docs/api/class-route) playwright.

Éditez le fichier de test `src/chapter_5.spec.ts`:

- Dans le hook `test.beforeEach`, qui est exécuté avant chaque test, ajoutez une [route](https://playwright.dev/docs/api/class-route) playwright sur `https://accounts.google.com/ServiceLogin/webreauth`. Elle devra faire une redirection 302 qui ajoutera le query param `token=<3WindowsVista<3`

<Solution>

```typescript
test.beforeEach(async ({ page }) => {
  await page.route('https://accounts.google.com/ServiceLogin/webreauth', (route) => {
    route.fulfill({
      status: 302,
      headers: {
        Location: 'https://playwright-site-madd.vercel.app/_wpftw_/bluescreenofthedeath?token=<3WindowsVista<3',
      },
    });
  });
});
```

</Solution>

- Dans le test nommé `it should get the last secret phrase`, naviguez vers `https://playwright-site-madd.vercel.app/_wpftw_/bluescreenofthedeath`

<Solution>

```typescript
await page.goto('https://playwright-site-madd.vercel.app/_wpftw_/bluescreenofthedeath');
```

</Solution>

- Remplissez les champs Login et Password avec des valeurs de votre choix.

<Solution>

```typescript
await page.getByLabel('Login').fill('your.name');
await page.getByLabel('Password').fill('pwd1');
```

</Solution>

- Cliquez sur le bouton de login

<Solution>

```typescript
await page.getByText('Connect').click();
```

</Solution>

- Attendez qu'une navigation ait lieu sur `https://playwright-site-madd.vercel.app/_wpftw_/bluescreenofthedeath`

<Solution>

```typescript
await page.waitForURL(/^https:\/\/playwright-site-madd.vercel.app\/_wpftw_\/bluescreenofthedeath/);
```

</Solution>

- Vérifiez que le titre sur la page rendue est bien `Your agent page is now unlocked`

<Solution>

```typescript
await expect(page.getByRole('heading')).toHaveText('Your agent page is now unlocked');
```

</Solution>

- Faites ensuite un screenshot pour observer le contenu de la page

<Solution>

```typescript
await expect(page).toHaveScreenshot();
```

</Solution>

**Notez précieusement** dans `src/passphrases.txt` le titre de la page ainsi que le key code.

Bravo ! Vous avez réussi à récupérer l'ensemble des passphrases et des codes ! Il est maintenant tant de déchiffrer tout cela

## Décoder le tout

La clé que vous avez récupérée correspond à la position de chaque mot dans chacun des phrases.

Par exemple, si la clé est `3 4 1+2 3 2`, alors la phrase secrète sera :

`<le 3ème mot de la phrase de la phase 1> <le 4ème mot de la phrase de la phase 2> <le 1er et le 2nd mot de la phrase de la phase 3> <le 3ème mot de la phrase de la phase 4> <le 2nd mot de la phrase de la phase 5>`

Décoder le tout à main pour trouver les codes secrets de Microsoft!... ou lancer simplement le script `npm run decode`

Vous avez maintenant accès à toute la puissance de playwright et c'est ce que nous allons faire dans la dernière phase du plan, la phase 6!
