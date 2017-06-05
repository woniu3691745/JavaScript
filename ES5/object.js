//  -------------------------------------对象------------------------------------------
var persion = {
    name: '',
    age:'',      // --> 对象字面量方式
    job:'',

    sayName: function () {
        console.log('111');
    }
}
// 每个对象都是基于一个引用类型创建的 
// 基本方式：new Persion(); var persion = {... }
// *工厂模式：用函数封装以特定接口创建对象的细节。
// 缺点：不知道一个对象的类型。
function createPersion(name, age, job) {
    var o = new Object();
    o.name = this.name;
    o.age = this.age;
    o.job = this.job;
    o.sayName = function(){
        console.log(this.name);
    }
    return o;
}
let persion1 = new createPersion('lily', '18', 'software engineer');

// *构造函数模式
// 1. 创建一个新对象;
// 2. 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）;
// 3. 执行构造函数中的代码（为这个新对象添加属性）；
// 4. 返回新对象。

// 问题：每个方法都要在每个实例上重新创建一遍
// 不同实例上的同名函数是不等的
function Persion(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }
}
new Persion('kuky', '22', 'play');

// 当作构造函数使用
var persion = new Persion('kuky', '22', 'play');
// 作为普通函数使用
Persion('kuky', '22', 'play'); // 添加到Windows
// 在另一个对象的作用域中调用, call/apply 改变this指针
var oo = new Object();
Persion.call(oo, 'kuky', '22', 'play');
o.sayName();

// *原型模式
function Persion(){
}
Persion.prototype.name = 'xiaoming';
Persion.prototype.age = '12';
Persion.prototype.job = 'game';
Persion.prototype.sayName = function(){
    console.log(this.name);
}
// 与构造函数不同的是，新对象的这些属性和方法是由所有实例共享的
// 原型最初只包含constructor属性，而该属性也是共享的，因此可以通过对象实例访问
// 每创建一个函数，就会同时创建它的prototype对象，这个对象也会自动获得constructor属性

function Persion() {
}
var friend = new Persion();
Persion.prototype =  {
    constructor: Persion,
    name: 'xiaoming',
    age: '12',
    job: 'game',
    sayName: function() {
        console.log(this.name);
    }
}
friend.sayName(); // error 
// 请记住：实例中的指针仅指向原型，而不指向构造函数。
// **原型模式最大问题是由其共享的本性所导致的, 在创建子类型的实例时，不能向超类型的构造函数中传递参数

// *组合使用构造函数模式和原型模式
function Persion(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friend = ['a', 'b'];
}
Persion.prototype = {
    constructor: persion,
    sayName: function() {
        console.log(this.name);
    }
}

// *寄生式构造函数模式
function Persion (name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}

//  -------------------------------------继承------------------------------------------
// 继承
// 接口继承和实现继承
// 接口继承只继承方法签名，实现继承则继承实际的方法
// 继承主要是依靠原型链来实现的（基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法）

// 简单回顾构造函数，原型和实例的关系：
// 1.每个构造函数都有一个原型对象，
// 2.原型对象都包含一个指向构造函数的指针，
// 3.而实例都包含一个指向原型对象的内部指针。


// 组合式继承
function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
}
function SubType(name, age) {
    // 继承属性 （借用构造函数）
    SuperType.call(this, name); // 第二次调用SuperType()
    this.age = age;
}
SubType.prototype = new SuperType(); // 第一次调用SuperType()，构造函数已经不指向超类了
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    console.log(this.age);
}

var instance1 = new SubType('Nicholas', 29); 
instance1.colors.push('black');
console.log(instance1.colors); // 'red, blue, green, black'
instance1.sayName(); // ''Nicholas
instance1.sayAge(); // 29

var instance2 = new SubType('Nicholas', 29);
instance2.colors.push('black');
console.log(instance2.colors); // 'red, blue, green, black'
instance2.sayName(); // ''Nicholas
instance.sayAge(); // 29
// 组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，成为JavaScript中最常用的继承模式。
// 组合继承最大的缺点调用两次超类的构造函数

// 一个参数的时候Object和Object.create一样
var persion = {
    name: 'lilu',
    friends: ['shelby', 'court', 'van']
};
var anotherPersion = Object.create(persion, {
    name: {
        value: 'gren'
    }
})
console.log(anotherPersion.name);
// 与原型模式一样

// 寄生式继承
function createAnother (original) {
    var clone = Object(original); // 通过调用函数创建一个新的对象
    clone.sayHi = function (){
        console.log("hi");
    }
    return clone;
}
var persion = {
    name: 'lily',
    friends: ['a', 'b', 'c']
}
var anotherPersion = createAnother(persion);
anotherPersion.sayHi();

// 寄生组合式继承
function inheritPrototype (subType, superType) {
    var prototype = Object(superType.prototype);  // 创建对象
    prototype.constructor = subType;              // 增强对象
    subType.prototype = prototype;                // 指定对象
}

function SuperType (name) {
    this.name = name;
    this.colors = ['a', 'b', 'c'];
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
}

function SubType (name, age) {
    SuperType.call(this, name);
    this.age = age;
}

inheritPrototype(subType, superType);

SubType.prototype.sayName = function (){
    console.log(this.age);
}

var instance = new SubType("li", 12);


// 大多数浏览器的ES5实现中，每一个对象都有_proto_属性，指向对应的构造函数的prototype属性。
