'use strict';
{
  const writeNumber = (number) => {
    if (!number) {
      return;
    }
    if (number < 1000) {
      number = numerals.toNineHundredNinetyNine(parseInt(number));
      return number;
    } else if (parseInt(number) === 1000) {
      return 'mil';
    }
  };

  const theree = (n) => {
    const doc = this.document;
    const numbersFullQtd = doc.querySelector('.js-number-full');
    let words = '';

    const numbers = [...Array(n).keys()];
    numbers.shift();
    numbers.forEach((number) => {
      words += writeNumber(number);
    });

    words = words.split(' ').join('');
    let lettersNumber = words.length;
    numbersFullQtd.appendChild(doc.createTextNode(lettersNumber));
  };

  theree.call(window, 1001);
}

