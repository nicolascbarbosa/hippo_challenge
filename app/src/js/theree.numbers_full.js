'use strict';

const numerals = (() => {

    let toNine = (number) => {
      let inFull = {
        '0': 'zero',
        '1': 'um',
        '2': 'dois',
        '3': 'três',
        '4': 'quatro',
        '5': 'cinco',
        '6': 'seis',
        '7': 'sete',
        '8': 'oito',
        '9': 'nove'
      };

      return inFull[number];
    };

    let toNinetyNine = (number) => {

      if (number < 10) {
        return toNine(number);
      }

      let inFull = {
        '10': 'dez',
        '11': 'onze',
        '12': 'doze',
        '13': 'treze',
        '14': 'quatorze',
        '15': 'quinze',
        '16': 'dezesseis',
        '17': 'dezessete',
        '18': 'dezoito',
        '19': 'dezenove',
        '20': 'vinte',
        '30': 'trinta',
        '40': 'quarenta',
        '50': 'cinquenta',
        '60': 'sessenta',
        '70': 'setenta',
        '80': 'oitenta',
        '90': 'noventa'
      };

      if (number < 20) {
        return inFull[number];
      } else if (!(number % 10)) {
        return inFull[number];
      } else {
        let dozens = inFull[number - number % 10];
        let units = toNine(number % 10);
        return `${dozens} e ${units}`;
      }
    };

    let toNineHundredNinetyNine = (number) => {
      if (number === 100) {
        return 'cem';
      }

      let inFull = {
        '100': 'cento',
        '200': 'duzentos',
        '300': 'trezentos',
        '400': 'quatrocentos',
        '500': 'quinhentos',
        '600': 'seiscentos',
        '700': 'setecentos',
        '800': 'oitocentos',
        '900': 'novecentos'
      };

      if (!(number % 100)) {
        return inFull[number];
      } else {
        let dozens = inFull[number - number % 100];
        let units = toNinetyNine(number % 100);
        let result;
        if(dozens) {
          result = `${dozens} e ${units}`;
        } else {
          result = units;
        }
        return result;

      }
    };

    return {
      toNine: toNine,
      toNinetyNine: toNinetyNine,
      toNineHundredNinetyNine: toNineHundredNinetyNine
    }
})();

