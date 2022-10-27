class EventHub {
  cache = {};
  // {
  //   '楚天都市报':[fn1,fn2,fn3],
  //   '羊城晚报':[fn1,fn2,fn3],
  // }
  on(eventName: string, fn: any) {
    //把fn推进this.cache[eventName]数组
    //eventName = 楚天,fn
    this.cache[eventName] = this.cache[eventName] || [];
    const array = this.cache[eventName].push(fn);
  }
  emit(eventName: string, data?) {
    //把this.cache[eventName]里面的fn全部依次调用
    if (this.cache[eventName] === undefined) return;
    (this.cache[eventName] || []).forEach((fn) => fn(data));
  }
}

export default EventHub;
