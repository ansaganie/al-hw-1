const NUMBER_REGEX = /^\d+$/;
const NUMBER_SYSTEM = 10;

const firstValue = prompt('Введите первое число').trim();
const secondValue = prompt('Введите второе число').trim();
const isNumbersValid = NUMBER_REGEX.test(firstValue) && NUMBER_REGEX.test(secondValue);

if (isNumbersValid) {
  const firstNumber = parseInt(firstValue, NUMBER_SYSTEM);
  const secondNumber = parseInt(secondValue, NUMBER_SYSTEM);
  const result = firstNumber.toString(secondNumber);

  console.log(result);
} else {
  console.log('Некорректный ввод!');
}
