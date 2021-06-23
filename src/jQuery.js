const { prototype } = require("jquery")

window.jQuery = function(selectorOrArray){
    let elements
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray
    }
    // const elements = document.querySelectorAll(selectorOrArray)
    // api 可以操作 elements
    // const api = 

    const api = Object.create(jQuery.prototype)     //创建一个对象，这个对象的__proto__ 为 jQuery.prototype
                //相当于 const api = {__proto__: jQuery.prototype}
    api.elements = elements
    api.oldApi = selectorOrArrayOrTemplate.oldApi
    return api
    // return {
    //     elements: elements,
    //     oldApi: selectorOrArray.oldApi,
    //     // __proto__: prototype,
    // }   
    // return api  // jQuery 函数的 return
}

jQuery.prototype = {
    jQuery: true,
    constructor: jQuery,
    // 闭包： 函数访问外部变量——addClass 访问变量 elements
    addClass(className){
        for(let i=0; i<elements.length; i++){
            elements[i].classList.add(className)
        }
        return this  // addClass 函数的 return
                         // this 就是 api 
    },
    find(selector){
        let array = []
        for(let i=0; i<elements.length; i++){
            const elements2 = Array.from(elements[i].querySelectorAll(selector))
            array = array.concat(elements2)
        }
        // const newApi = jQuery(array)
        // return newApi
        array.oldApi = this // this 就是 api
        return jQuery(array)
    },
    end(){
        return this.oldApi  //this 就是当前的 api ———— api2
    },
    each(fn){
        for(let i=0; i<elements.length; i++){
            fn.call(null, elements[i], i)
        }
        return this
    },
    parent(){
        const array = []
        this.each((node)=>{ // this 就是 api 对象
            if(array.indexOf(node.parentNode) === -1){
                array.push(node.parentNode)
            }
        })
        return jQuery(array)
    },
    children(){
        const array = []
        this.each((node)=>
            array.push(...node.children)    // ... 是将 children 伪数组拆开，push 进 array 中
        )
        return jQuery(array)
    },
    print(){
        console.log(elements)   //elements 就是对应的元素们
    },
    get(index) {
        return this.elements[index];
    },
    appendTo(node) {
        if (node instanceof Element) {
            this.each(el => node.appendChild(el));
        }else if (node.jquery === true) {
            this.each(el => node.get(0).appendChild(el));
        }
    },
    append(children) {  
        if (children instanceof Element) {
            this.get(0).appendChild(children);
        } else if (children instanceof HTMLCollection) {
            for (let i = 0; i < children.length; i++) {
                this.get(0).appendChild(children[i]);
            }
        } else if (children.jquery === true) {
            children.each(node => this.get(0).appendChild(node));
        }
    },
}