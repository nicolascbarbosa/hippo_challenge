'use strict';
{
  const two = () => {
    const doc = this.document;
    const form = doc.querySelector('.js-year');
    const input = doc.querySelector('.js-year-user');
    const result = doc.querySelector('.exercise-two > .wrap > .result');

    let checkYear = (year) => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      result.textContent = '';

      let year = input.value;
      let isLeap = checkYear(year) ? `O ${year} é bissexto` : `O ${year} NÃO é bissexto`;
      result.appendChild(doc.createTextNode(isLeap));

    }, true);
  };

  two.call(window);
}
