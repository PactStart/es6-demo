//1、变量声明与赋值
let a;
console.log(a);
a = 1;
const b = 2;
console.log(a, b);
//2、Symbol
let name = Symbol();
let obj = {};
obj[name] = "leidi";

let obj2 = {
  [name]: "leidi",
};

let obj3 = {};
Object.defineProperty(obj3, name, { value: "leidi" });

console.log(obj, obj2, obj3);

console.log(Symbol() === Symbol(), Symbol("name") === Symbol("name"));
//3、解构赋值
let [n1, n2, n3] = [1, 2];
console.log(n1, n2, n3);

let [n4, n5, n6 = 3] = [1, 2];
console.log(n4, n5, n6);

let [n7, ...other] = [1, 2, 3];
console.log(other);

let [n8, , n9] = [1, 2, 3];
console.log(n8, n9);

let { ch, age } = { ch: "leidi", age: 30 };
console.log(ch, age);

let { ch: ch2, age: age2 } = { ch: "leidi", age: 30 };
console.log(ch2, age2);

function getAjaxResult() {
  return {
    title: "陀螺",
    website: [
      {
        url: "tuoluo.cn",
      },
    ],
  };
}

let {
  title,
  website: [{ url }],
} = getAjaxResult();
console.log(title, url);

//4、字符串扩展方法与模板字符串
const who = "leidi";
const course = "english";
const score = 150;
const str = `${who}的${course}成绩是${score}分`;
console.log(str);

const str2 = "白月光与朱砂痣";
console.log(str2.includes("朱砂"), str2.startsWith("白"), str2.endsWith("痣"));
console.log(str2.repeat(3), str2);
console.log(str2.padStart(10, "歌曲："));
console.log(str2.padEnd(10, "是谁的歌"));

//5、扩展运算符与数组新增的常用方法
const list = [1, 2, 3, 4, 5];
const list1 = [...list];
const [, , ...list2] = list;
console.log(list1, list2);

function sum(a, b, c, d, e) {
  console.log(a + b + c + d + e);
}
sum(...list);
const list3 = [...list].fill(6);
const list4 = [...list].fill(6, 1, 3);
console.log(list3, list4, list);

const list5 = [
  { hobby: "吃饭", id: 1 },
  { hobby: "睡觉", id: 1 },
  { hobby: "敲代码", id: 1 },
  { hobby: "吃饭", id: 2 },
];
const result = list5.find(function (item) {
  return item.hobby === "吃饭";
});
const result1 = list5.findIndex(function (item) {
  return item.hobby === "吃饭";
});
console.log(result, result1);

const list6 = [1, 2, 3, ["2nd", 5, 6, ["3rd", 7, 8]]];
const list7 = [].concat(...list);
const list8 = list6.flat();
const list9 = list6.flat(2);
console.log(list7, list8, list9);

const result2 = list5.filter(function (item) {
  return item.hobby === "吃饭";
});
console.log(result2);

//6、对象的新特性及新增方法
const obj4 = {
  aa: 1,
  bb: 2,
  cc: {
    dd: 1,
  },
};
const obj5 = { ...obj4 };
console.log(obj5);
obj4.aa = "aa";
obj5.cc.dd = "asdaf";
//深拷贝只第一层
console.log(obj4, obj5);

const obj6 = { ...obj4, aa: "1" };
console.log(obj6);

const obj7 = { aa: 1, bb: 2 };
const obj8 = { cc: 3, dd: 4 };
const obj9 = { ...obj7, ...obj8 };
console.log(obj9);

const attr1 = "leidi";
const attr2 = 30;
let p = {
  attr1,
  attr2,
  sayHello() {
    console.log("hello");
  },
};
p.sayHello();
console.log(p);

let res = Object.is(NaN, NaN);
console.log(res, NaN === NaN);

let a1 = { aa: 1, bb: 2 };
let b1 = { aa: "1" };
let c1 = Object.assign(b1, a1);
console.log(c1);

console.log(Object.keys(p), Object.values(p), Object.entries(p));

//7、array、map、set、object的区别
const arr = [];
const object = {};
const map = new Map();
const set = new Set();

const item = { company: "tuoluo" };

arr.push(item);
object["company"] = "tuoluo";
map.set("company", "tuoluo");
set.add(item);
console.log(arr, object, map, set);

const resList = arr.includes(item);
const resobj = "company" in object;
const resSet = set.has(item);
const resMap = map.has("company");
console.log(resList, resobj, resSet, resMap);

arr.forEach(function (i) {
  i.company = i.company ? "tuoluo.net" : "";
});
object.company = "tuoluo.net";
set.forEach(function (i) {
  i.company = i.company ? "tuoluo.net" : "";
});
map.set("company", "tuoluo.net");
console.log(arr, object, map, set);

const index = arr.findIndex(function (i) {
  return (i.company = "tuoluo.net");
});
arr.splice(index, 1);
delete object.company;
set.delete(item);
map.delete("company");
console.log(arr, object, map, set);
console.log(item);

//对象转map
const pMap = new Map(Object.entries(p));
console.log(pMap);
//map转对象
const pObj = Object.fromEntries(pMap);
console.log(pObj);
// 数组转set
const list10 = [1, 2, 3];
const set10 = new Set(list);
console.log(set10);
// set转数组
const list11 = Array.from(set10);
console.log(list11);

//8、代理Proxy和反射Reflect
/* @params
 ** target: 用Proxy包装的目标对象
 ** handler: 一个对象，对代理对象进行拦截操作的函数，如set、get
 */
// let p = new Proxy(target, handler)
const house = {
  name: "张三",
  price: 1000,
  phone: "18823139921",
  id: "111",
  state: "**",
};
const houseProxy = new Proxy(house, {
  get: function (target, key) {
    switch (key) {
      case "price":
        return target[key] + 200;
        break;
      default:
        return target[key];
        break;
    }
  },
  set: function (target, key, value) {
    if (key === "state") {
      return (target[key] = value);
    }
  },
});
console.log(houseProxy.price);
houseProxy.state = "*";
console.log(houseProxy.state);
console.log(houseProxy.name);

const res1 = Reflect.has(house, "name");
console.log(res1, "name" in house);

//9、函数扩展与箭头函数
function test1(a, b = 3) {
  console.log(a + b);
}
test1(1, "");
function test2(...params) {
  console.log(params);
}
test2(1, 2, 3);
function test3(a, b, c) {
  console.log(a, b, c);
}
test3(...[1, 2, 3]);

const test4 = {
  a: 1,
  sum() {
    //不绑定this
    setTimeout(() => {
      console.log(this.a);
    }, 1000);
  },
};

test4.sum();

//10、类
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`我是${this.name},今年${this.age}岁`);
  }
}

const person1 = new Person1("张三", 18);

person1.sayHello();
console.log(person1);

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`我是${this.name},今年${this.age}岁`);
  }
  static sayHi() {
    console.log("hi static");
  }
}

class Student extends Parent {}
const stu = new Student("张三", 18);
console.log(stu);

class Student2 extends Parent {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

const stu2 = new Student2("张三", 18, "六年级");
console.log(stu2);
Student.sayHi();

//11、import和export
// import { API_BASE_URL, testFunc } from "./util.js";

//12、Promise
// 简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
// 从语法上说，Promise 是一个对象，从它可以获取异步操作的的最终状态(成功或失败)。
// Promise 是一个构造函数，提供统一的 API，Promise里不仅可以存放着异步的代码，也可以放同步的代码。
// function request() {
//   axios.get("a.json").then((res) => {
//     if (res && res.data.code === 0) {
//       console.log(res.data.data.data);
//       axios.get("b.json").then((res) => {
//         if (res && res.data.code === 0) {
//           console.log(res.data.data.data);
//           axios.get("c.json").then((res) => {
//             console.log(res.data.data.data);
//           });
//         }
//       });
//     }
//   });
// }

// request();

// 准备阶段
new Promise((resolve, reject) => {});

// 成功状态
new Promise((resolve, reject) => {
  resolve("成功"); // 同步代码
}).then((res) => {
  console.log(res);
});

// 失败状态
new Promise((resolve, reject) => {
  reject("失败");
}).catch((err) => {
  console.log(err);
});

function requestA() {
  return new Promise((resolve, reject) => {
    axios.get("a.json").then((res) => {
      resolve(res);
    });
  });
}

function requestB() {
  return new Promise((resolve, reject) => {
    axios.get("b.json").then((res) => {
      resolve(res);
    });
  });
}

function requestC() {
  return new Promise((resolve, reject) => {
    axios.get("c.json").then((res) => {
      resolve(res);
    });
  });
}

function request() {
  requestA()
    .then((res) => {
      console.log(res);
      return requestB();
    })
    .then((res) => {
      console.log(res);
      return requestC();
    })
    .then((res) => {
      console.log(res);
    });
}

request();

function requestAll() {
  Promise.all([requestA(), requestB(), requestC()])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

requestAll();

function requestRace() {
  Promise.race([requestA(), requestB(), requestC()])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

requestRace();

//13、async和await
async function xd() {
  await console.log("小葵花妈妈课堂");
}
xd();

function requestA2() {
    return new Promise((resolve, reject) => {
      axios.get('a.json').then((res) => {
        setTimeout(() => {
          resolve(res);
          console.log('aaa');
        }, 1000);
      });
    });
  }
  
  function requestB2() {
    return new Promise((resolve, reject) => {
      axios.get('b.json').then((res) => {
        setTimeout(() => {
          resolve(res);
          console.log('bbb');
        }, 1000);
      });
    });
  }
  
  function requestC2() {
    return new Promise((resolve, reject) => {
      axios.get('c.json').then((res) => {
        setTimeout(() => {
          resolve(res);
          console.log('ccc');
        }, 1000);
      });
    });
  }

async function request2() {
  try {
    const a = await requestA2();
    const b = await requestB2();
    const c = await requestC2();
    console.log(a, b, c);
  } catch (err) {
    console.log(err);
  }
}

request2();
