let stringValue = "yellow"
// 字符串在字符串参数的前面则返回-1
console.log(stringValue.localeCompare('brick')) // 1
console.log(stringValue.localeCompare('zoom')) // -1
console.log(stringValue.localeCompare('yellow')) // 0
