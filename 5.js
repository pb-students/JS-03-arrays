const fun = n => [...Array(n).keys()].map(i => (Math.random() * 10 ^ 0) + 1).reduce((a, e) => !(e % 2) && (a.even += 1) && (a.multiplied *= e) && a || a, { even: 0, multiplied: 1 })
