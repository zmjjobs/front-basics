const fs = require('fs') //引入node.js中的本地文件扩展模块
//异步解决方案
//resolove:函数类型的参数，可以将promise的状态设置为success
//reject:函数类型的参数，可以将promise的状态设置为失败
const p = new Promise((resolve,reject) => {
    //第一个参数 读取文件路径
    //第二个参数 读取响应结果
    fs.readFile('./readMe1.txt',(err,data)=>{
        if (err) {
            reject(err)
            return
        }
        resolve(data)
    })
})
//p.then 成功时
//p.catch 失败时
p.then((response) => {
    console.log(response.toString())
}).catch((err) => {
    console.log(err)
})