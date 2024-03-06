/**
 * Check if a character code is a number or a letter;
 * WARN: This function considers only non-negative numbers and lowercase letters.
 */
export function isAlphanumeric(code: number) {
  return (code > 47 && code < 58) || (code > 96 && code < 123);
}

function generateWords(text: string) {
  const words = new Set<string>();

  let start = 0,
    end = 0;

  for (let i = 0; i < text.length; i++) {
    if (i === text.length - 1) {
      words.add(text.slice(start, end + 1));
      return words;
    }

    if (!isAlphanumeric(text.charCodeAt(i))) {
      words.add(text.slice(start, end));
      start = end + 1;
    }

    end++;
  }

  return words;
}

function filterLetters(word: string) {
  return word.split("");
}

export function trigram(text: string) {
  const words = generateWords(text.toLocaleLowerCase());

  if (words.size === 0) return [];

  const trigrams = new Set();

  const prefix_len = 2;
  const suffix_len = 1;

  for (const word of words) {
    const letters = filterLetters(word);
    if (letters.length === 0) {
      continue;
    }

    for (let i = -prefix_len; i < letters.length - suffix_len; i++) {
      const len = word.length;
      const trigram =
        (i < 0 || i >= len ? " " : word[i]) +
        (i + 1 < 0 || i + 1 >= len ? " " : word[i + 1]) +
        (i + 2 < 0 || i + 2 >= len ? " " : word[i + 2]);

      trigrams.add(trigram);
    }
  }
  return Array.from(trigrams);
}
