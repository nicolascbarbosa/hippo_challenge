'use strict';

{
  const five = () => {
    const doc = this.document;
    const form = doc.querySelector('.js-exchange');
    const inputPayment = doc.querySelector('.js-payment');
    const inputPaymentTotal = doc.querySelector('.js-payment-total');
    const result = doc.querySelector('.exercise-five > .wrap > .result');


    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let total = parseFloat(inputPaymentTotal.value);
      let userPayment = parseFloat(inputPayment.value);

      if(total >= userPayment) {
        return false;
      }

      let exchange = userPayment - total;
      calcExchange(exchange);

    }, true);

    const calcExchange = (value) => {
      let bankNotes = [100, 50, 10, 5, 1, 0.50, 0.10, 0.05, 0.01];
      let countNotes = [];
      const calNotes = (current) => {
        if(value >= current) {
          countNotes.push(current);
          value -= current;
          if(value >= current) {
            calNotes(current);
          }
        }
      };
      bankNotes.forEach((current) => {
        calNotes(current);
      });

      let notes = countNotes.filter(item => item >= 1);
      let notesMessage = '';
      let notesMessageInit = '';
      let notesMessageCall = [];
      let notesOldVal = 0;
      let notesCounter = 0;
      let coins = countNotes.filter(item => item < 1);
      let coinsMessage = '';
      let coinsMessageInit = '';
      let coinsMessageCall = '';
      let coinsOldVal = 0;
      let coinsCounter = 0;


      notes.forEach((current) => {
        if (current === notesOldVal) {
          notesCounter++;
        } else {
          notesCounter = 1;
        }

        if(notesMessage.length === 0 || current === notesOldVal && notesMessageCall.length === 0) {
          notesMessageInit = `Para o troco é necesssario ${notesCounter} notas de R$ ${current}`;
          notesMessage = notesMessageInit;
        } else {
          if(current !== notesOldVal) {
            notesMessageInit = notesMessage;
          }
          notesMessageCall = `, mais ${notesCounter} notas de R$ ${current}`;
          notesMessage = notesMessageInit.concat(notesMessageCall);
        }
        notesOldVal = current;
      });

      coins.forEach((current) => {
        if (current === coinsOldVal) {
          coinsCounter++;
        } else {
          coinsCounter = 1;
        }

        if(coinsMessage.length === 0 || current === coinsOldVal && coinsMessageCall.length === 0) {
          coinsMessageInit = `, e também ${coinsCounter} moedas de R$ ${current}`;
          coinsMessage = coinsMessageInit;
        } else {
          if(current !== coinsOldVal) {
            coinsMessageInit = coinsMessage;
          }
          coinsMessageCall = `, mais ${coinsCounter} notas de R$ ${current}`;
          coinsMessage = coinsMessageInit.concat(coinsMessageCall);
        }
        coinsOldVal = current;
      });

      result.appendChild(doc.createTextNode(notesMessage + coinsMessage));

    }
  };



  five.call(window);
}