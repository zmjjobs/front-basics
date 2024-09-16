//可以一下子赋值多个变量

const F4 = ['小沈阳', '宋小宝', '刘能', '赵四']
//数组用[]接收
let [xsy, sxb, ln, zs] = F4
console.log(xsy)
console.log(sxb)
console.log(ln)
console.log(zs)

const abs = {
  username: '赵本山',
  age: 55,
  profession: function () {
    console.log('演小品')
  },
}
//对象用{}接收
let { username, age, profession } = abs
console.log(username)
console.log(age)
profession()
