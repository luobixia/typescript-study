abstract class Animal {
  eat() {
      console.log('eat')
  }
  abstract sleep(): void
}
// let animal = new Animal()

//无论在js还是ts中，类成员的属性都是实例属性而不是原型属性。类成员的方法等都是原型方法
//与es不同的是，实例的属性必须具有取值或者在构造函数中被初始化
class Dog extends Animal {
  constructor(name: string) {
      super()
      this.name = name//this一定要在super调用之后再调用
      this.pri()
  }
//类的修饰符 类的所有属性默认都是public,含义对所有人都是可见的，也可以显示的声明
  public name: string = 'dog'
  run() {}
  //类的私有成员 只能在类的本身被调用，而不能被类的实例调用，也不能被子类调用
  private pri() {}
  //受保护成员只能在类或者子类中访问，而不能在类的实例中访问
  protected pro() {}
  //只读属性 不能被更改，一定要被初始化
  readonly legs: number = 4
  // 类的静态成员只能通过类名来进行调用，而不能通过子类来调用
  static food: string = 'bones'
  sleep() {
      console.log('Dog sleep')
  }
}
// console.log(Dog.prototype)
let dog = new Dog('wangwang')
// console.log(dog)
// dog.pri() 类的私有成员 只能在类的本身被调用，而不能被类的实例调用，也不能被子类调用
// dog.pro() 类的私有成员 只能在类的本身被调用，而不能被类的实例调用，也不能被子类调用
console.log(Dog.food)
dog.eat()

// 给constructor加上private则这个类既不能被实例化也不能被继承
/* class Husky extends Dog {
 private constructor(name: string, public color: string) {
      super(name)
      this.color = color
      // this.pri()
      this.pro()
  }
  // color: string
} */

// 给constructor加上protected则这个类既不能被实例化只能被继承
/* class Husky extends Dog {
 protected constructor(name: string, public color: string) {
      super(name)
      this.color = color
      // this.pri()
      this.pro()
  }
  // color: string
} */

class Husky extends Dog {
  //构造函数的参数也可以添加修饰符，参数自动变成实例的属性，能够省略在类中的定义了
  constructor(name: string, public color: string) {
      super(name)
      this.color = color
      // this.pri()
      this.pro()
  }
  // color: string 构造函数的参数也可以添加修饰符，参数自动变成实例的属性，能够省略在类中的定义了，所以这里可以注释掉了
}
console.log(Husky.food)//类的静态成员可以被继承

class Cat extends Animal {
  sleep() {
      console.log('Cat sleep')
  }
}
let cat = new Cat()

let animals: Animal[] = [dog, cat]
animals.forEach(i => {
  i.sleep()
})

class Workflow {
  step1() {
      return this
  }
  step2() {
      return this
  }
}
new Workflow().step1().step2()

class MyFlow extends Workflow {
  next() {
      return this
  }
}
new MyFlow().next().step1().next().step2()
