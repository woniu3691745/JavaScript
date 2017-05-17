// 定义函数的方式有两种：1、函数式声明 2、函数表达式
function functionName (arg0, arg1, arg2) {}
var functionName1 = function (arg0, arg1, arg2) {}

// 匿名函数：创建一个函数并将它赋值给变量functionName。
// 在把函数当成值来使用的情况下，都可以使用匿名函数。

// 递归函数是一个函数通过名字调用自身的情况下构成的
function factorial (num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial (num - 1);
        // return num * arguments.call (num - 1);  // 严格模式下不能用
    }
}

var factorial1 = (function f(num){
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num -1);
    }
})

// 闭包：指有权限访问另一个函数作用域中的变量的函数。
// 创建闭包常见方式：就是在一个函数内部创建另一个函数。

// 当某个函数被调用时，会创建一个执行环境及相应的作用域链，然后，使用arguments和其他命名参数的值来初始化函数的活动对象。


// this
// this对象实在运行时基于函数的执行环境绑定的，在全局函数中，this等于window，而当函数被作为某个对象的方法调用时，
// this等于那个对象。不过，匿名函数的执行环境具有全局性，因此其this对象通常指向window。但有时候由于编写闭包的方
// 式不同，这一点可能不会那么明显。


