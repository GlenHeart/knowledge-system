function compose(...fn) {
  return fn.reduce((pre, next) => {
    pre(next())
  })
}