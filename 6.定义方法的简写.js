let person = {
    sayHi:function(){
        console.log('Hi')
    },
    sing:function(){
        console.log('一闪一闪亮晶晶')
    }
}
person.sayHi()
person.sing()

//简写
let person2 = {
    sayHi(){
        console.log('Hi2')
    },
    sing(){
        console.log('一闪一闪亮晶晶2')
    }
}
person2.sayHi()
person2.sing()