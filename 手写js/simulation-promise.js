const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class Promise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.resolveCallbacks = []
    this.rejectCallbacks = []

    let resolve = (value) => {
      this.value = value
      console.log(value, 'promise value')
      this.resolveCallbacks.forEach(cb => cb())
    }
    let reject = (reason) => {
      this.reason = reason
      this.rejectCallbacks.forEach(cb => cb())
    }
    try {
      executor(resolve, reject)
    } catch(err) {
      reject(err)
    }
  }
  then (cb) {
    cb(this.value)
  }
}
const aPrmise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve(123)
  }, 1000)
})
aPrmise.then((value) => {
  console.log(value, '1234')
})