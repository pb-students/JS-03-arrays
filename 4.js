const fun = arr => arr.filter((_, i) => !!(i % 2)).map((e, i, a) => e - Math.min(...a)).map((e, i, a) => e / Math.max(...a))
