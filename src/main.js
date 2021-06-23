// const api = jQuery('.test') // 不返回元素们，返回 api 对象
// api.addClass('red')
//     .addClass('blue') 
//     .addClass('brown')
//     // 链式操作

//代码简化
// jQuery('.test')
//   .addClass('red')
//   .addClass('blue') 
//   .addClass('brown')

// obj.fn(p1) //函数里的 this 就是 obj
// obj.fn.call(obj,p1)

// const x1 = jQuery('.test').find('.child')
// console.log(x1)

// const api1 = jQuery('.test')
// api1.addClass('blue')

// const api2 = api1.find('.child').addClass('red')

// api1.addClass('green')
// jQuery('.test')
//     .find('.child')
//     .addClass('red')
//     .addClass('blue')
//     .addClass('green')
//     .end()      //回到上一次api
//     .addClass('yellow') //yellow 在 test 

// const x = jQuery('.test')
//     .find('.child')

// x.each((div)=>console.log(div))

// const x = jQuery('.test')

// x.parent().print()

const x = jQuery('.test')

x.children().print()