// 栈方法
// push() 数组的尾部
var colors = ['red', 'blue'];
colors.push('brown');
colors[3] = 'black';
console.log(colors[2]);
// pop() 返回数组最后一项
var item = colors.pop();
console.log(item); // black

// 队列方法
// shift() 前端
// unshift() 在数组前端添加任意项并返回新数组的长度

let array = [1,2,3,4,5];
let r = array.splice(0, 2); // 包含起始位置
console.log(r)

let array1 = [1,2,3,4,5];
let r1 = array1.slice(1, 2); // 不包含起始位置
console.log(r1);