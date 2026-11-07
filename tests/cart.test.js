// tests/cart.test.js
const { calculateDiscount, isInStock, isValidEmail } = require('../src/cart');

// Модульний тест 1
test('Розрахунок знижки на товар', () => {
  expect(calculateDiscount(1000, 10)).toBe(900);
  expect(calculateDiscount(500, 50)).toBe(250);
  expect(calculateDiscount(200, 0)).toBe(200);
});

// Модульний тест 2
test('Перевірка наявності товару на складі', () => {
  expect(isInStock(5)).toBe(true);
  expect(isInStock(0)).toBe(false);
  expect(isInStock(-1)).toBe(false);
});

// Модульний тест 3
test('Валідація електронної пошти', () => {
  expect(isValidEmail('test@example.com')).toBe(true);
  expect(isValidEmail('invalid-email')).toBe(false);
  expect(isValidEmail('user@domain')).toBe(false);
});