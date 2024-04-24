class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });
    return titleizedWords.join(' ');
  }
}

console.log(Formatter.capitalize('hello')); // Output: Hello
console.log(Formatter.sanitize('Hello, @world!')); // Output: Hello world
console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog')); // Output: The Quick Brown Fox Jumps Over the Lazy Dog
