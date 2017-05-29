'use strict';

{
  const four = () => {
    const doc = this.document;
    const form = doc.querySelector('.js-letter');
    const textarea = doc.querySelector('.js-letter-user');
    const result = doc.querySelector('.exercise-four > .wrap > .result');
    const message = doc.createElement('span');


    const formMessage = (() => {

      let message = doc.querySelector('.js-form-message');
      let show = () => {
        message.classList.add('show');
      };

      let hide = () => {
        message.classList.remove('hide');
      };

      return {
        show: show,
        hide: hide
      }
    })();

    let calcValueChar = (char) => {
      let result;

      if(char === char.toUpperCase()) {
        result = char.charCodeAt(0) - 38;
      } else {
        result = char.charCodeAt(0) - 96;
      }

      return result;
    };

    // textarea.addEventListener('keyup', (e) => {
    //   let numbers = /[^0-9]/gi;
    //   let timer;
    //   if(numbers.test(textarea.value)) {
    //     let newValue = textarea.value.replace(numbers, '');
    //     textarea.value = newValue;
    //     formMessage.show();
    //
    //     clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       formMessage.hide();
    //     }, 1000);
    //   }
    // }, true);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      result.textContent = '';

      let sentence = textarea.value;
      let words = sentence.split(' ');

      words.forEach((word) => {
        let totalWordValue = 0;
        for (let letter of word) {
          totalWordValue += calcValueChar(letter);
        }

        let wrapInfo = message.cloneNode(true);
        let info = `Na Palavra <strong>${word}</strong> o valor das letras que a compõe somados é de <strong>${totalWordValue}</strong>`;
        wrapInfo.appendChild(doc.createTextNode(info));
        result.appendChild(wrapInfo);
      });


    }, true);
  };


  four.call(window);
}