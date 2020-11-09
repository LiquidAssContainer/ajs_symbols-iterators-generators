export default function canIterate(obj) {
  // Корректно ли для всех ситуаций? Тесты проходит
  return obj != null && obj[Symbol.iterator] !== undefined;
}
