const display = document.querySelector('#display');
let firstNumber = '';
let operation = '';

document.querySelector('.buttons').addEventListener('click', (event) => {
  const button = event.target;
  if (button.dataset.value) {
    display.value = display.value === '0' ? button.dataset.value : display.value + button.dataset.value;
  }
  if (button.dataset.operation) {
    firstNumber = display.value;
    operation = button.dataset.operation;
    display.value = '0';
  }
  if (button.dataset.action === 'clear') {
    display.value = '0';
    firstNumber = '';
    operation = '';
  }
  if (button.dataset.action === 'calculate') {
    const secondNumber = display.value;
    if (!firstNumber || !operation) return;
    display.value = Function(`return ${firstNumber}${operation}${secondNumber}`)();
    firstNumber = '';
    operation = '';
  }
});
