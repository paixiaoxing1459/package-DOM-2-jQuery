const api = jQuery('.test') // 不返回元素们，返回 api 对象
api.addClass('red')
    .addClass('blue') 
    .addClass('brown')
    // 链式操作

//代码简化
// jQuery('.test')
//   .addClass('red')
//   .addClass('blue') 
//   .addClass('brown')

// obj.fn(p1) //函数里的 this 就是 obj
// obj.fn.call(obj,p1)