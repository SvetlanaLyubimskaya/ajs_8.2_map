import ErrorRepository from '../app';

const errorRepozitory = new ErrorRepository(); // созд новый класс
let errTranslate = errorRepozitory.translate();

test('name1', () => {
  const result = 'Такой персонаж уже существует';
  expect(errTranslate(1)).toEqual(result);
});

test('name2', () => {
  const result = 'Unknown error';
  expect(errTranslate(3)).toThrow(result);
});
