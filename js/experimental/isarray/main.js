const result1 = Array.isArray([1, 2, 3]); // true
const result2 = Array.isArray({ foo: 123 }); // false
const result3 = Array.isArray('foobar'); // false
const result4 = Array.isArray(undefined); // false

console.log(result1, result2, result3, result4);
