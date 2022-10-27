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
    this.cache[eventName].push(fn);
  }
  emit(eventName: string, data?) {
    //把this.cache[eventName]里面的fn全部依次调用
    if (this.cache[eventName] === undefined) return;
    (this.cache[eventName] || []).forEach((fn) => fn(data));
  }
  off(eventName: string,fn){
    if (this.cache[eventName] === undefined) return;
    let index
    for(let i=0;i<this.cache[eventName].length;i++){
      if(this.cache[eventName][i] === fn){
        index = i;
        break;
      }
    }
    if(index === undefined){
      return;
    }else {
      this.cache[eventName].splice(index, 1);
    }
  }
}

export default EventHub;
