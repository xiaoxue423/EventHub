import EventHub from "../src/index";

type TestCase = (message: string) => void;
const test1: TestCase = (message) => {
  const eventHub = new EventHub();
  console.assert(eventHub instanceof Object === true, "eventHub是个对象");
  console.log(message);
};
//on emit
const test2: TestCase = (message) => {
  const eventHub = new EventHub();
  let called = false;
  eventHub.on("xxx", (y) => {
    called = true;
    console.log("y", y);
    console.assert(y[0] === "今天降温了");
    console.assert(y[1] === "我今天穿了毛衣");
  });
  eventHub.emit("xxx", ["今天降温了", "我今天穿了毛衣"]);
  setTimeout(() => {
    console.log("called", called);
    console.assert(called === true);
    console.log(message);
  }, 1000);
};

const test3: TestCase = (message) => {
  const eventHub = new EventHub();
  //on emit
  let called2 = false;
  const fn = () => {
    called2 = true;
  };
  eventHub.on("yyy", fn);
  eventHub.off("yyy", fn);
  eventHub.emit("yyy");
  setTimeout(() => {
    console.log("called2", called2);
    console.assert(called2 === false);
    console.log(message);
  }, 1000);
};

test1("EventHub可以创建对象");
test2(".on了之后 .emit 会触发 .on的函数");
test3(".off有用");
