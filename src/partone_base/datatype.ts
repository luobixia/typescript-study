// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
// str = 123 ts的数据类型是不可改变的


// 数组
let arr1: number[] = [1, 2, 3]//也可以写为let arr1: Array<number> = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']


// 元组，元组是一种特殊的数组类型，它限定了数组元素的类型和个数
let tuple: [number, string] = [0, '1']
// tuple.push(2)允许向元组中添加新的元素
// console.log(tuple)这时候元组变成了三个元素[0, '1', 2]
// tuple[2]不允许访问
//从以上例子可以看出可以通过push为元组添加新的元素，但是仍然不能进行越界访问，开发过程中不建议这样使用


// 函数
//通常函数返回值类型可以省略，利用的是ts的类型推断功能
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b


// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3
// let obj:object = { x: 1, y: 2 }
// obj.x = 3这时候修改属性ts会报错，因为我们只是定义了obj为object类型，并没有定义里面包含了哪些属性


// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
// console.log(s1 === s2) false 因为symbol的值具有唯一性


// undefined, null
let un: undefined = undefined
let nu: null = null
num = undefined
num = null
//undefined和null是任何类型的子类型，说明undefined和null可以被赋值给其它类型


// void 没有任何返回值的类型
//在js中void是一种操作符，它可以让任何表达式返回undefined，void在js中不是一个保留字
let noReturn = () => { }
       

// any
let x
x = 1
x = []
x = () => { }

// never 表示永远不会有返回值的类型，有以下两种情况1.函数跑出异常2.死循环函数
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while (true) { }
}
//更改
