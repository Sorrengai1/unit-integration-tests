// tests/checkout.test.js
const { processCheckout } = require('../src/checkout');

// Інтеграційний тест 1: Перевірка успішного оформлення
test('Успішне оформлення замовлення з валідним email', () => {
  const result = processCheckout(1000, 10, 'client@example.com');
  
  expect(result.finalPrice).toBe(900);
  expect(result.message).toContain('успішно оформлено');
  expect(result.email).toBe('client@example.com');
});

// Інтеграційний тест 2: Перевірка помилки при невалідному email
test('Помилка при оформленні з некоректним email', () => {
  expect(() => {
    processCheckout(1000, 10, 'bad-email');
  }).toThrow('Некоректний email');
});