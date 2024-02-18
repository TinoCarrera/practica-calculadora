import { addition, subtraction, multiplication, division } from '../../node_modules/@florentinocarrera/utils/main.js';

const input = document.getElementById('input');
document.querySelector('.leftPanel').addEventListener('click', clickPanel)
document.querySelector('.operators').addEventListener('click', clickOperator)
document.getElementById('clear').addEventListener('click', () => input.textContent = '');
document.getElementById('result').addEventListener('click', getResult);

function clickPanel(e) {
  let number = e.target.textContent;

  if ((number.length > 1 || number === 'C')
    || (number === '.' && input.textContent.includes('.'))) {
    return;
  }

  input.textContent = input.textContent + number;
}

function clickOperator(e) {
  if (input.textContent.includes('+') || input.textContent.includes('-')
    || input.textContent.includes('×') || input.textContent.includes('÷')) {
    getResult();
  }

  let operator = e.target.textContent;
  input.textContent = input.textContent + operator;
}

function getResult() {
  if (input.textContent.includes('+')) {
    let numbers = input.textContent.split('+');
    input.textContent = addition(Number(numbers[0]), Number(numbers[1]));
    return;
  }

  if (input.textContent.includes('-')) {
    let numbers = input.textContent.split('-');
    input.textContent = subtraction(Number(numbers[0]), Number(numbers[1]));
    return;
  }

  if (input.textContent.includes('×')) {
    let numbers = input.textContent.split('×');
    input.textContent = multiplication(Number(numbers[0]), Number(numbers[1]));
    return;
  }

  if (input.textContent.includes('÷')) {
    let numbers = input.textContent.split('÷');
    input.textContent = division(Number(numbers[0]), Number(numbers[1]));
    return;
  }
}
