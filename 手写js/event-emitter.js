class EventEmitter {
  constructor () {
    this.eventMap = new Map()
  }
  on (eventName, fn) {
    if (this.eventMap.has(eventName)) {
      const fnList = this.eventMap.get(eventName)
      fnList.push(fn)
    } else {
      this.eventMap.set(eventName, [fn])
    }
  }
  off (eventName, fn) {
    if (this.eventMap.has(eventName)) {
      const fns = this.eventMap.get(eventName)
      const index = fns.findIndex(item => item === fn)
      fns.splice(index, 1)
    }
  }
  emit (eventName, once) {
    if (this.eventMap.has(eventName)) {
      this.eventMap.get(eventName).forEach(fn => fn())
      if (once) {
        this.eventMap.delete(eventName)
      }
    } else {
      console.error(`${eventName} not find`)
    }
  }
}

const aEvent = new EventEmitter()
aEvent.on('test1', () => {
  console.log('test1')
})
aEvent.on('test2', () => {
  console.log('test2')
})
aEvent.emit('test1')
aEvent.emit('test2')