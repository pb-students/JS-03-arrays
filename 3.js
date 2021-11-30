const fun = str => str.split('').reduce((a, e) => {
  a[e] ??= 0
  a[e] += 1
  return a
}, {})
