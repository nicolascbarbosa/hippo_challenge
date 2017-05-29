'use strict';

{
  const five = () => {
    const doc = this.document;
    const form = doc.querySelector('.js-exchange');
    const inputPayment = doc.querySelector('.js-payment');
    const inputPaymentTotal = doc.querySelector('.js-payment-total');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let total = parseFloat(inputPaymentTotal.value);
      let userPayment = parseFloat(inputPayment.value);

      if(total >= userPayment) {
        //o valor pago é menor que o total
        return false;
      }

      let exchange = userPayment - total;
      let textResult = calcExchange(exchange);

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

      console.log(countNotes);

      let notes;
      let coins;
    }
  };



  five.call(window);
}