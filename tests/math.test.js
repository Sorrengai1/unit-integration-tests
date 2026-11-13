const add = require('../src/math');
test('Додавання чисел', () => {
expect(add(2, 3)).toBe(6); 
expect(add(-1, 1)).toBe(0); // Змінено очікуваний результат з 5 на 6 для перевірки CI
});
