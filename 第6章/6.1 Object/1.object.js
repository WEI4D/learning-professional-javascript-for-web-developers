// 显式创建
let person = new Object()

person.name = 'Kobe'
person.age = 18

console.log(person)

// 对象字面量
person = {
    name: 'Answer',
    age: 19
}

console.log(person)

person = {}
person.name = 'KiKi'
person.age = 29

console.log(person)

function displayInfo(args) {
    let output = ""
    if(typeof args.name === 'string') {
        output += "Name: " + args.name + "\n"
    }
    if(typeof args.age === "number") {
        output += "Age: " + args.age
    }

    console.log('displayInfo: ', output)
}

displayInfo(person)

console.log(person['name'])
console.log(person.name)

let propertyName = 'name'
console.log(person[propertyName])

person['first name'] = 'Li'

console.log(person['first name'])
