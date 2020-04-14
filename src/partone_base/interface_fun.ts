// 函数定义
function add1(x: number, y: number) {
  return x + y
}

//用一个变量来定义函数类型
let add2: (x: number, y: number) => number

//类型别名
type add3 = (x: number, y: number) => number

//接口定义
interface add4 {
  (x: number, y: number): number
}

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



add1(1, 2, 3)

function add5(x: number, y?: number) {
  return y ? x + y : x
}
add5(1)

function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
add6(1, undefined, 3)

function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}
add7(1, 2, 3, 4, 5)

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
