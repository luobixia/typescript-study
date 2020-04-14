interface Human {
  //3.接口也不能约束类的构造函数
  // new (name: string):void
  name: string;
  eat(): void;
}

//1.类实现接口的时候，必须实现接口声明的所有属性
//2.接口只能约束类的公有成员
//3.接口也不能约束类的构造函数
//接口只能约束类的公有成员
class Asian implements Human {
  constructor(name: string) {
      this.name = name;
  }
  name: string
  eat() {}
  age: number = 0
  sleep() {} 
}

//接口的继承 接口可以像类一样相互继承，并且一个接口可以继承多个接口
interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}
//接口的继承可以抽离出可重用的接口，也可以将多个接口合并成一个接口
let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

class Auto {
  state = 1
  // private state2 = 1
}
/* 接口除了可以继承接口之外，还可以继承类，这就相当于接口把类的成员都抽象了出来
也就是只有类的成员结构，而没有具体的实现 */
interface AutoInterface extends Auto {
//这样这个接口中就隐含了state属性，要想实现这个AutoInterface，只要类的成员有state属性就可以了
}
class C implements AutoInterface {
  state = 1
}
//这个类中不用实现state属性，因为它是Auto的子类自然就继承了state属性
class Bus extends Auto implements AutoInterface {

}

//注意：接口在抽离类的成员的时候，不仅抽离了公共成员，而且抽离了私有成员，受保护成员
