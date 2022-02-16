function throttle (fn) {
  let previous = 0
  let now = 0
  return function (...args) {
    now = new Date()
    if ((now  - previous) > wait) {
      fn(args)
      previous = now
    }
  }
}