// 函数定义
function add1(x: number, y: number) {
  return x + y
}

//a.用一个变量来定义函数类型
let add2: (x: number, y: number) => number

//b.类型别名
type add3 = (x: number, y: number) => number

//c.接口定义
interface add4 {
  (x: number, y: number): number
}

//需要注意的是a,b,c上面三种只是函数类型的定义，而没有具体的实现
let add: add3 = (a, b) => a + b

//混合类型的接口 一个接口可以定义一个函数，也可以像对象一样，拥有属性和方法，
//下面就是用混合接口来定义一个类库
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

/* function getLib() {
  let lib: Lib = (() => { }) as Lib;
  lib.version = '1.0';
  lib.doSomething = () => { }
  return lib;
}

let lib1=getLib();
lib1();
lib1.doSomething();
let lib2 = getLib(); */

//js对函数参数的个数是没有限制的，在ts中形参和实参必须一一对应，少或多都不行

add1(1, 2, 3)

// 可选参数  有时候需要参数是可选的，可传可不传  可选参数必须位于必选参数之后
function add5(x: number, y?: number) {
  return y ? x + y : x
}
add5(1)

//为参数提供默认值
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
add6(1, undefined, 3)

//剩余参数  以上参数都是固定的，当参数个数不固定的时候，我们可以使用剩余参数。剩余参数的类型是以数组形式村咋的1
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}
add7(1, 2, 3, 4, 5)


/* 函数重载  静态类型语言中，如c++和java都有重载的概念，含义是两个函数如果名称相同，
但是参数个数或参数类型不同,那么就实现了函数重载。好处是不需要为了相似功能的函数，
选用不同的函数名称，增强了函数的可读性 */
/* ts中重载的概念有些不同，ts中的重载要求我们先定义一系列名称相同的函数声明 */
/* ts在重载的时候，会查询重载列表，并且会尝试第一个定义，
如果匹配的话就使用改函数定义，不匹配则接着往下查找，所以我们要把最容易匹配的写在最前面 */
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
  let first = rest[0];
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur);
  }
  if (typeof first === 'string') {
    return rest.join('');
  }
}
console.log(add8(1, 2))
console.log(add8('a', 'b', 'c'))
