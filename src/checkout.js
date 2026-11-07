const { calculateDiscount, isValidEmail } = require('./cart');

// Інтеграційна функція: оформлення замовлення
function processCheckout(price, discountPercent, email) {
  // Перевіряємо email (виклик модуля cart)
  if (!isValidEmail(email)) {
    throw new Error('Некоректний email');
  }
  
  // Розраховуємо фінальну ціну (виклик модуля cart)
  const finalPrice = calculateDiscount(price, discountPercent);
  
  return {
    finalPrice,
    email,
    message: `Замовлення на суму ${finalPrice} грн успішно оформлено. Чек надіслано на ${email}.`
  };
}

module.exports = { processCheckout };