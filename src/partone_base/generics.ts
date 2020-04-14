function log<T>(value: T): T {
  console.log(value);
  return value;
}
//两种调用方式如下
log<string[]>(['a', ',b', 'c'])
log(['a', ',b', 'c'])//推荐这个方式

//不仅可以使用泛型定义一个函数，还可以定义一个函数类
//使用一个别名定义泛型函数类型
// type Log = <T>(value: T) => T
// let myLog: Log = log
// 相当于
// interface Log {
//     <T>(value: T): T
// }


//泛型同样可以用在接口
// interface Log<T> {
//     (value: T): T
// }
// let myLog: Log<number> = log
// myLog(1)

// 可以使用默认类型,这里使用默认为string
// interface Log<T = string> {
//     (value: T): T
// }
// let myLog: Log<number> = log
// myLog(1)

//注意：泛型不能应用于类的静态成员
// class Log<T> {
//   static run(value: T) { 这里会提示静态成员不能引用类型参数
//     console.log(value)
//     return value
//   }
// }

class Log<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}
let log1 = new Log<number>()
log1.run(1)
//当不指定类型参数的时候，value的值可以是任意的值
let log2 = new Log()
log2.run({ a: 1 })


// 在这里希望不仅能够打印参数，也能够打印参数的属性  需要用到类型约束道德概念
/* function log<T>(value: T): T {
  console.log(value)
  return value
} */
interface Length {
  length: number
}
function logAdvance<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}
logAdvance([1])
logAdvance('123')
logAdvance({ length: 3 })
