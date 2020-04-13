// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
// console.log(Role.Reporter),如果不设置值，默认从0开始递增
// console.log(Role)

// 字符串枚举，不可以进行映射
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

// 异构枚举 字符串枚举和数字枚举进行混用构成了异构枚举，容易造成混淆，不建议使用
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员 
// Role.Reporter = 0 不能这样写，枚举成员的值定义之后是不能够进行修改的 
//枚举成员的类型分为两类1.const member 2.computed member
enum Char {
  // const member 常量枚举包含如下三种情况:1.没有初始值2.对已有枚举成员的引用3.常量的表达式
  //常量枚举会在编译的时候执行出结果，然后以常量的形式运行时环境
  a,
  b = Char.a,
  c = 1 + 3,
  // computed member 需要被计算的枚举成员，就是一些非常量的表达式，这些枚举型的值不会在编译阶段进行计算，而会被保留到程序的执行阶段，在computed member后面的成员必须为其赋值
  d = Math.random(),
  e = '123'.length,
  f = 4
}

// 常量枚举   用const声明的枚举就是常量枚举，常量枚举会在编译阶段被移除 
// 产量枚举的作用：当我们不需要对象，就需要对象的值的时候，就可以使用常量枚举，减少我们在编译环境的代码
const enum Month {
  Jan,
  Feb,
  Mar,
  Apr = Month.Mar + 1,
  // May = () => 5
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型 在某些情况下，枚举和枚举成员都可以作为单独类型存在。1.枚举类型没有任何初始值2.所有成员都是数字枚举3.所有成员都是字符串枚举
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3
// console.log(e === f) 两种不同的枚举类型是不可以进行比较的，编辑器会报错

let e1: E.a = 3
let e2: E.b = 3
let e3: E.a = 3
// console.log(e1 === e2) 不可以进行比较
// console.log(e1 === e3) 是相同的枚举成员类型，可以进行比较

let g1: G = G.a  //字符串枚举它的取值只能是枚举成员的类型
let g2: G.a = G.a//这样的取值只能是它自身
