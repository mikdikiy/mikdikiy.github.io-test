document.addEventListener('DOMContentLoaded', function () {
  let buttonsArray = [
    'C',
    'c',
    'CE',
    'ce',
    '%',
    'percent',
    '/',
    'div',
    '7',
    '7',
    '8',
    '8',
    '9',
    '9',
    '*',
    'mul',
    '4',
    '4',
    '5',
    '5',
    '6',
    '6',
    '-',
    'minus',
    '1',
    '1',
    '2',
    '2',
    '3',
    '3',
    '+',
    'plus',
    '0',
    '0',
    '(',
    'open-br',
    ')',
    'close-br',
    '=',
    'result',
  ];
  // buttonsArray.forEach(element => insertButton('.buttons',element,'btn-'+element));
  for (let i = 0; i < buttonsArray.length; i += 2) {
    insertButton(
      '.buttons',
      buttonsArray[i],
      'btn-' + buttonsArray[i + 1],
      i / 2
    );
  }
  let strCalc = '';
  clearCalc();

  document.querySelector('.input-string').oninput = function () {
    strCalc = this.value;
  };
  document.querySelector('.btn-c').addEventListener('click', clearCalc);
  document.querySelector('.btn-ce').addEventListener('click', backSymbol);
  document.querySelector('.btn-percent').addEventListener('click', buttonClick);
  document.querySelector('.btn-div').addEventListener('click', buttonClick);
  document.querySelector('.btn-minus').addEventListener('click', buttonClick);
  document.querySelector('.btn-plus').addEventListener('click', buttonClick);
  document.querySelector('.btn-mul').addEventListener('click', buttonClick);
  document.querySelector('.btn-1').addEventListener('click', buttonClick);
  document.querySelector('.btn-2').addEventListener('click', buttonClick);
  document.querySelector('.btn-3').addEventListener('click', buttonClick);
  document.querySelector('.btn-4').addEventListener('click', buttonClick);
  document.querySelector('.btn-5').addEventListener('click', buttonClick);
  document.querySelector('.btn-6').addEventListener('click', buttonClick);
  document.querySelector('.btn-7').addEventListener('click', buttonClick);
  document.querySelector('.btn-8').addEventListener('click', buttonClick);
  document.querySelector('.btn-9').addEventListener('click', buttonClick);
  document.querySelector('.btn-0').addEventListener('click', buttonClick);
  document.querySelector('.btn-open-br').addEventListener('click', buttonClick);
  document.querySelector('.btn-close-br').addEventListener('click', buttonClick);
  document.querySelector('.btn-result').addEventListener('click', resultCalc);

  function updateCalc() {
    let inputString = document.getElementsByClassName('input-string')[0];
    inputString.value = strCalc;
    inputString.focus();
    inputString.selectionStart = inputString.value.length;
  }
  function clearCalc() {
    strCalc = '';
    document.getElementsByClassName('input-string')[0].value = 0;
  }
  function resultCalc() {
    strCalc = math.evaluate(strCalc);
    updateCalc();
  }
  function buttonClick() {
    strCalc += this.value;
    updateCalc();
  }
  function backSymbol() {
    if (strCalc.length > 1) {
      strCalc = strCalc.slice(0, strCalc.length - 1);
      updateCalc();
    } else {
      clearCalc();
    }
  }
  function insertButton(classAfter, symb, classButton, countButton) {
    let addDiv = document.createElement('div');
    document.querySelector(classAfter).append(addDiv);
    addDiv.className = 'button-wrapper';
    addDiv.innerHTML = `<button class="calc-button ${classButton}" value="${symb}">${symb}</button>`;
    addDiv.style.cssText =
      'width: 35px; height: 35px; margin-right: 5px; display: inline-block;';
    document.getElementsByClassName('calc-button')[countButton].style.cssText =
      'width: 100%; padding:10%;';
  }
});
