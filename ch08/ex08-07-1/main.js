const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
let result = arr.join();
console.log(result); // 1,,hello,,true,
result = arr.join('');
console.log(result); // 1hellotrue
result = arr.join(' -- ');
console.log(result); // 1 --  -- hello --  -- true -- 
