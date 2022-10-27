import EventHub from "../src/index";

console.log(EventHub)

const eventHub = new EventHub()

console.assert(eventHub instanceof Object === true,'eventHub是个对象')

//on emit
let called = false
eventHub.on('xxx',(y)=>{
  called = true
  console.log('called',called)
  console.log(y)
  console.assert(y === '今天降温了')
})
eventHub.emit('xxx','今天降温了')
