interface List {
  readonly id: number;//只读属性
  name: string;
  // [x: string]: any;
  age?: number;//可选属性
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach((value) => {
      console.log(value.id, value.name)
      if (value.age) {
          console.log(value.age)
      }
      // value.id++
  })
}

//ts采用“鸭式辨型法”这是一种动态语言类型风格，形象的说法是一只鸟，
/* 如果看起来像鸭子，游起来像鸭子，叫起来像鸭子。那么这只鸟就可以被认为是鸭子。
回到ts，如果传入的对象，满足接口的必要条件，那么就是被允许的，即使传入多余的字段也可以通过类型检查
 但是这种情况有种例外，如果我们直接传入对象字面量的话，ts就会对额外的字段进行类检查 */
/* render({
  data:[
    {id:1,name:'A',sex:'male'},
    {id:2,name:'B'}
  ]
}) */
// 绕过检查的方式有三种：1.把对象字面量赋值给一个变量
let result = {
  data: [
      {id: 1, name: 'A', sex: 'male'},
      {id: 2, name: 'B', age: 10}
  ]
}
//2.使用类型断言 明确告诉编译器，知道这个变量的类型就是result,这样编译器就会绕过类型检查
/* render({
  data:[
    {id:1,name:'A',sex:'male'},
    {id:2,name:'B'}
  ]
} as Result) */
//类型断言的另外一种形式,建议使用上面的
/* render(<Result>{
  data:[
    {id:1,name:'A',sex:'male'},
    {id:2,name:'B'}
  ]
}) */
//3.字符串索引签名
/* interface List {
  readonly id: number;
  name: string;
  [x: string]: any;用任意的字符串去索引List可以得到任意的结果，这样List就可以支持多个属性了
} */
render(result)

//以上接口属性的个数都是确定的，当你不确定属性个数的时候，使用1可索引类型的接口
// 可索引接口可以用数字去索引，也可以用字符串去索引

interface StringArray {
  [index: number]: string//用任意的数字去索引StringArray，都会得到一个StringArray，相当于定义一个字符串类型的数组
}
let chars: StringArray = ['a', 'b']

interface Names {
 /*  [x: string]:string 用任意的字符串索引Names,得到的结果都是string
   这时候 y: number;是不被允许的 */
  //  两种签名可以混用
  [x: string]: any;
  [z: number]: number;//数字签名索引的返回值一定要是字符串索引签名的子类型，因为js会进行类型转换
  // [x: string]: string;
  // [z: number]: string;
}

// let add: (x: number, y: number) => number
// interface Add {
//     (x: number, y: number): number
// }
type Add = (x: number, y: number) => number
let add: Add = (a: number, b: number) => a + b

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib = (() => {}) as Lib
  lib.version = '1.0.0'
  lib.doSomething = () => {}
  return lib;
}
let lib1 = getLib()
lib1()
let lib2 = getLib()
lib2.doSomething()
