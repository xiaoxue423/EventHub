class EventHub {
  cache = {};
  // {
  //   '楚天都市报':[fn1,fn2,fn3],
  //   '羊城晚报':[fn1,fn2,fn3],
  // }
  on(eventName:string, fn:any) {
    //把fn推进this.cache[eventName]数组
    //eventName = 楚天,fn
    if (this.cache[eventName] === undefined) {
      this.cache[eventName] = []; //初始化
    }
    const array = this.cache[eventName];
    array.push(fn);
  }
  emit(eventName:string) {
    //把this.cache[eventName]里面的fn全部依次调用
    let array = this.cache[eventName];
    if (array === undefined) {
      array = []; //作保底
    }
    array.forEach((fn) => fn());
  }
}

export default EventHub;
