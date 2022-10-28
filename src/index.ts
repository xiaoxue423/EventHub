class EventHub {
  private cache : {[key:string]:Array<(data:unknown)=>void>}= {};
  // {
  //   '楚天都市报':[fn1,fn2,fn3],
  //   '羊城晚报':[fn1,fn2,fn3],
  // }
  on(eventName: string, fn: (data: any) => void) {
    //把fn推进this.cache[eventName]数组  eventName = 楚天,fn
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }
  emit(eventName: string, data?: unknown) {
    //把this.cache[eventName]里面的fn全部依次调用
    (this.cache[eventName] || []).forEach((fn) => fn(data));
  }
  off(eventName: string, fn: (data: unknown) => void) {
    //把fn从this.cache[eventName] 中删掉
    const index = indexOf(this.cache[eventName], fn);
    if (index === -1) return;
    this.cache[eventName].splice(index, 1);
  }
}

export default EventHub;

/**
 * 帮助函数 indexOf
 * @param array
 * @param item
 * @returns
 */
function indexOf(array, item) {
  if (array === undefined) return -1;
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      index = i;
      break;
    }
  }
  return index;
}
