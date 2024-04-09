import { readFile } from 'fs/promises';
import path from 'path';

const run = async () => {
  const response = await readFile(path.join('src', 'passphrases.txt'));
  const lines = response.toString().split('\n').filter(Boolean);
  const passphrases_words = lines
    .filter((line) => line.startsWith('Chapter_'))
    .map((line) => line.split('=')[1])
    .map((phrase) => phrase.split(' '));
  const key = lines.find((line) => line.startsWith('Key')).split('=')[1];
  const keysIndex = key
    .split(' ')
    .map((it) => (it.includes('+') ? it.split('+').map((number) => parseInt(number)) : [parseInt(it)]));

  const secretPhrase = passphrases_words.flatMap((words, index) => keysIndex[index].map((key) => words[key - 1]));

  console.log('Secret phrase decoded ! => ', secretPhrase.join(' '));
};

run().catch(() => console.error('Impossible de décoder la passphrase. Vérifiez le format'));
