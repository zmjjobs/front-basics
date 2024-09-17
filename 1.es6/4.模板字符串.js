//可以单引号或双引号声明一个字符串
let str = '我是一个字符串'

//也可以用反引号声明一个字符串，会原样输出，不会转义
//且可以顺利地换行编写
let htmlStr = `<ul>
<li>沈腾</li>
<li>玛丽</li>
</ul>`

//反引号还可以变量拼接
let star = '嘉玲'
let out = `我喜欢${star}`
console.log(out)
