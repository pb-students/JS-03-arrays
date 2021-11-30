const fun = (fn, arr1, arr2) => arr1.map((el, i) => fn(el, arr2[i]))

console.log(fun((a, b) => a + b, [4, 5, 6], [10, 20, 30]))
console.log(fun((x, y) => ({ x, y }), [1, 2, 3], [7, 8, 9]))

const fun2 = (fn, ...arrs) => arrs[0].map((_, i) => fn(...arrs.map(arr => arr[i])))
console.log(fun2((a, b, c) => a + b + c, [1,2,3], [5,6,7], [10,20,30]))
