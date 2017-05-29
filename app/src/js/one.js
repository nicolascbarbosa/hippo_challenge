'use strict';

const one = (n) => {
  const doc = this.document;
  const list = doc.querySelector('.exercise-one > .wrap > .list');
  const itemList = doc.createElement('li');
  const numbers = [...Array(n).keys()];
  numbers.shift();

  numbers.forEach((number, i) => {
    if (number % 3 === 0 && number % 5 === 0) {
      numbers[i] = 'FizzBuzz';
    } else if (number % 3 === 0) {
      numbers[i] = 'Fizz';
    } else if (number % 5 === 0) {
      numbers[i] = 'Buzz';
    }

    let text = `No indice ${i} o valor de ${number} agora é ${numbers[i]}`;
    let tempList = itemList.cloneNode(true);

    tempList.appendChild(doc.createTextNode(text));
    list.appendChild(tempList);
  });

};

one.call(window, 101);
