# Chapitre 4 - Avec Jest

## Des vrais tests

- Installer jest pour exécuter nos tests et [jest-playwright](https://github.com/playwright-community/jest-playwright), qui permet d'ajouter des utilitaires à jest

```shell
yarn add -D jest jest-playwright-preset
# OR
npm install --save-dev jest jest-playwright-preset
```

- Créer un fichier `jest.config.js` à la racine du projet et ajouter la config suivante :

```js
module.exports = {
  preset: "jest-playwright-preset",
  testTimeout: 35000, // Because playwright timeout is 30 seconds
}
```

- Créer un fichier de test `my-test.spec.js`
- Ajouter un script test dans package.json pour lancer les tests
- Implémenter les tests pour chaque section de la partie précédente

## Lancer pour tous les navigateurs

- Dans la config de jest, ajouter l'option pour lancer les 3 navigateurs

```javascript
module.exports = {
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: [], // TODO
    },
  }
}
```

- Ajouter une option pour lancer sans headless.

## Un système de screenshots automatiques

- ajouter une config `testEnvironment` pour jest `./scripts/testEnvironment.js` et créer le fichier avec le contenu suivant :
```javascript
const PlaywrightEnvironment = require('jest-playwright-preset/lib/PlaywrightEnvironment').default;
const fs = require('fs/promises');
const path = require('path');

const screenshotsPath = path.join(__dirname, 'screenshots');

class PlaywrightEnv extends PlaywrightEnvironment {
  async handleTestEvent(event) {
    if (event.name === 'test_done' && event.test.errors.length > 0) {
      const parentName = event.test.parent.name.replace(/\W/g, '-');
      const specName = event.test.name.replace(/\W/g, '-');
      const { browserName } = this._config;

      await this.global.page.screenshot({
        path: path.join(screenshotsPath, `${browserName}_${parentName}_${specName}.png`),
      });
    }
  }
}

module.exports = PlaywrightEnv;
```

- Faire en sorte que vos tests échouent et vérifier l'apparition d'un screenshot.
