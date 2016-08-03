# const let

## const

* 常量
* 不存在变量提升
* 暂时性死区

## let

* 不存在变量提升
* 暂时性死区
* 不允许重复声明
* 块级作用域

# 解构赋值

## 拥有结构赋值的数据类型

* String
* Number
* Boolean
* Array
* 对象
* 函数参数

## 圆括号的问题

### 不能使用圆括号的情况

* 变量声明语句
* 函数参数
* 赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中

# String

* for...of
* String.prototype.at()
* String.prototype.normalize()
* String.prototype.includes()
* String.prototype.startsWith()
* String.prototype.endsWith()
* String.prototype.repeat()
* String.prototype.padStart()
* String.prototype.padEnd()
* String.prototype.String.raw()
* 模板字符串
* 标签模板
* 数组推导

# Number

* Number.isFinite()
* Number.isNaN()
* Number.parseInt()
* Number.parseFloat()
* Number.isInteger()
* Number.EPSILON
* Number.isSafeInteger()

# Math

* Math.trunc()
* Math.sign()
* Math.cbrt()
* Math.clz32()
* Math.imul()
* Math.fround()
* Math.hypot()
* Math.expm1()
* Math.log1p()
* Math.log10()
* Math.log2()
* Math.sinh()
* Math.cosh()
* Math.tanh()
* Math.asinh()
* Math.acosh()
* Math.atanh()
* 指数运算符 (**)

# Array

* Array.from()
* Array.of()
* Array.prototype.copyWithin(target, start = 0, end = this.length)
* Array.prototype.find()
* Array.prototype.findIndex(function(value, index, arr) {})
* Array.prototype.fill()
* Array.prototype.keys()
* Array.prototype.values()
* Array.prototype.entries()
* Array.prototype.includes()
* 数组的空位
* 数组推导

# Function

* 参数默认值
* rest参数 (...变量名)
* 扩展运算符 (...)
* Function.prototype.name
* 箭头函数 (=>)

		箭头函数有几个使用注意点。
		1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
		2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
		3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
		4. 不可以使用yield命令，因此箭头函数不能用作Generator函数。

* 函数绑定 (::)
* 尾调用
* 尾递归
* 尾逗号

# Object

* ES6允许直接写入变量和函数，作为对象的属性和方法
* ES6允许字面量定义对象时，将表达式写在方括号中
* 对象的方法的name属性
* Object.is()    // +0 != 0, NaN == NaN
* Object.assign()
* Object.getOwnPropertyDescriptor()
* Object.prototype.__proto__
* Object.setPrototypeOf()
* Object.getPrototypeOf()
* Object.values()
* Object.entries()
* Object.getOwnPropertyDescriptors()
* 扩展运算符(...)

# Symbol







> [http://es6.ruanyifeng.com/](http://es6.ruanyifeng.com/)