import EventHub from "../src/index";

const eventHub1 = new EventHub()
console.assert(eventHub1 instanceof Object === true,'eventHub是个对象')
//on emit
let called = false
eventHub1.on('xxx',(y)=>{
  called = true
  console.log('called',called)
  console.log(y)
  console.assert(y === '今天降温了')
})
eventHub1.emit('xxx','今天降温了')

const eventHub2 = new EventHub()
//on emit
let called2 = false
const fn = ()=>{
  called2 = true
}
eventHub2.on('yyy',fn)
eventHub2.off('yyy',fn)
eventHub2.emit('yyy')
setTimeout(()=>{
  console.log('called2',called2)
},1000)
