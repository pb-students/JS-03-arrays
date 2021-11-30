const fun = (a, b, i = 0) => () => +[...Array(Math.abs(b - a) + 1).keys()].map(i => a + i * Math.sign(b - a))[i++]
