function one(n) {
  const doc = window.document;
  const list = doc.createElement('li');

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

    list.insertBefore(numbers[i]);
  });

  doc.querySelector('.exercise-one > .wrap > .list').appendChild(list);
}

export default one;