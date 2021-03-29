export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Такой персонаж уже существует'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error('Unknown error');
    } else {
      return this.errors.get(code);
    }
  }
}
