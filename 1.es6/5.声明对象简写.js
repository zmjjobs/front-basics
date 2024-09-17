
let username = 'Tom'
let age = 20
let sing = function(){
    console.log("Love")
}
//变量和属性名字一样时，可以省略
// let person = {
//     username:username,
//     age:age,
//     sing:sing
// }
let person = {
    username,
    age,
    sing
}
console.log(person.username)
console.log(person.age)
person.sing()