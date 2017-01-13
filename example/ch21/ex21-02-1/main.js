'use strict';
// #@@range_begin(list1)
const obj = { foo: "bar" };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
// { value: 'bar', writable: true, enumerable: true, configurable: true }
// #@@range_end(list1)
// #@@range_begin(list2)
Object.defineProperty(obj, 'foo', { writable: false });
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
// { value: 'bar', writable: false, enumerable: true, configurable: true }
obj.foo = 3;  // TypeError: Cannot assign to read only property 'foo' of object '#<Object>'
// #@@range_end(list2)
