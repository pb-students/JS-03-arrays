const fun = arr => console.log(arr.filter((_, i) => !!(i % 2)).map((e, i, a) => e - Math.min(...a)).map((e, i, a) => (e / Math.max(...a)).toFixed(2)).join(' '))
