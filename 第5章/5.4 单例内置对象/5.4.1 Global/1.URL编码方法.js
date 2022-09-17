let uri = "https://www.baidu.com/zh-CN Chinese.html#header"

// 不会编码属于URL组件的部分，如：冒号、问号、斜杠、井号
console.log(encodeURI(uri))

// 基本上会编码所有字符
console.log(encodeURIComponent(uri))

uri = 'https%3A%2F%2Fwww.baidu.com%2Fzh-CN%20Chinese.html%23header'

// 只会解码由encodeURI编码的部分
console.log(decodeURI(uri))

// 基本上会解码所有特殊字符
console.log(decodeURIComponent(uri))
