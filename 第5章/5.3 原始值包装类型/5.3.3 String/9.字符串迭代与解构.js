let message = 'abc'
let stringIterator = message[Symbol.iterator]()

console.log(stringIterator.next())
console.log(stringIterator.next())
console.log(stringIterator.next())
console.log(stringIterator.next())

for(const value of 'abcde') {
    console.log('for-of value: ', value)
}

console.log([...message])
