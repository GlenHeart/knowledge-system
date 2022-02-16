function debounce (fn, wait) {
  let timeHandler = null
  return function () {
    if (timeHandler) clearTimeout(timeHandler)
    timeHandler = setTimeout(() => {
      fn()
    }, wait)
  }
}