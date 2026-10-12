// СУТЬ: Проверяет наличие ключа "key" в объекте "target" и сужает его тип.

export function isValidKey<T extends object>(key: PropertyKey, target: T): key is keyof T {
  return key in target
}

// <T extends object>   - Дженерик с ограничением: функция примет любой объект, но запретит примитивы (string, number), так как только у объектов бывают ключи.
// key: PropertyKey     - Искомый ключ. PropertyKey — это встроенный тип TypeScript (string | number | symbol), описывающий любой допустимый ключ объекта в JS.
// target: T            - Объект, в котором проверяем наличие ключа. Тип T выводится автоматически из переданных данных.
// : key is keyof T     - Предикат типа (Type Guard). Обещание компилятору: "Если верну true, считай `key` официальным ключом объекта `T`".
// return key in target -  Стандартная JS-проверка: существует ли свойство с таким именем внутри объекта.


/*
 * КАК ИСПОЛЬЗОВАТЬ (3 шага):
 * 
 * 1. Объект "target" ОБЯЗАТЕЛЬНО с `as const`:
 *    const target = { '/': 'Home', '/week': 'Week' } as const;
 *    
 *    ПОЧЕМУ ЭТО КРИТИЧЕСКИ ВАЖНО:
 *    • Без `as const` TypeScript считает ключи объекта просто типом `string` (то есть "любая строка").
 *    • С `as const` TypeScript "замораживает" объект и сужает типы ключей до конкретных литералов: `'/' | '/week'`.
 *    • Именно эти конкретные литералы позволяют нашему Type Guard (`key is keyof T`) реально сузить тип переменной и убрать ошибку индексации.
 * 
 * 2. Проверка/Валидация:
 *    if (isValidKey(path, routes)) {
 *      console.log(routes[path]); // TypeScript доволен! Тип сужен до '/' | '/week'
 *    }
 */