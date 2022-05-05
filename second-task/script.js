const NUMBER_REGEX = /^\d+$/;
const NUMBER_SYSTEM = 10;
const NUMBERS_IN_WORDS = [ 'первое', 'второе' ];

const values = [];

for (let i = 0; i < 2; i++) {
  const value = prompt(`Введите ${NUMBERS_IN_WORDS[i]} число`).trim();

  if (NUMBER_REGEX.test(value)) {
    values.push(parseInt(value, NUMBER_SYSTEM))
  } else {
    alert('Некорректный ввод!');

    break;
  }
}

if (values.length === 2) {
  const sum = values[0] + values[1];
  const quotient = values[0] / values[1];

  console.log(`Ответ: ${sum}, ${quotient}.`);
}
