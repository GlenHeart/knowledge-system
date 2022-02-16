 class EventDispatcher {
   constructor () {
     this._event = {}
   }
   on (eventName, fn, scope) {
    if (this._event[eventName]) {
      this._event[eventName].push({ cb: fn })
    } else{
      this._event[eventName] = [{ cb: fn }]
    }
   }
   off (eventName, fn) {
    if (this._event[eventName]) {
      delete this._event[eventName]
    }
   }
   once () {}
   dispatch (eventName, params) {
    for (const key in this._event) {
      if (eventName === key) {
        const listeners = this._event[eventName]
        listeners.forEach(listener => {
          (typeof listener.cb === 'function') && listener.cb(params)   
        })
      }
    }
   }
 }

//  EventDispatcher.prototype = {
//    on (eventName, fn, scope) {
//     this._event.push(
//       eventName,
//       fn,
//       scope
//     )
//    },
//    off (eventName, fn) {
//     if (this._event[eventName]) {
//       delete this._event[eventName]
//     }
//    },
//    once () {},
//    dispatch (eventName) {
//     for (const key in this._event) {
//       if (eventName === key) {
//         const fns = this._event[eventName]
//         fns.forEach(fn => {
//           (typeof fn === 'Function') && fn()   
//         })
//       }
//     }
//    }
//  }
 
 // 事件模型

const aEvent = new EventDispatcher()
let randNum = Math.random() * 10
for (let i = 0; i < randNum; i++) {
  aEvent.on('test', (params) => {
    setTimeout(() => {
      console.log(i, params, '123')
    }, Math.random() * 1000)
  })
}
aEvent.dispatch('test', 1)

 