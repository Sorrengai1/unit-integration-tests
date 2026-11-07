// Модульна функція 1: Розрахунок знижки
function calculateDiscount(price, discountPercent) {
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    throw new Error('Некоректні значення');
  }
  return price - (price * (discountPercent / 100));
}

// Модульна функція 2: Перевірка, чи товар є в наявності
function isInStock(quantity) {
  return quantity > 0;
}

// Модульна функція 3: Перевірка валідності email для чека
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = { calculateDiscount, isInStock, isValidEmail };