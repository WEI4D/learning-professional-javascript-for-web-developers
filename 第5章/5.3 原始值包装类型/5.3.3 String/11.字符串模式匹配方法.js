let text = '2cat, bat, sat, fat'
let pattern = /.at/

let matches = text.match(pattern)

console.log(matches);

console.log(matches.index);
console.log(matches[0])
console.log(pattern.lastIndex)

let pos = text.search(/at/)
console.log(pos)

let result = text.replace('at', 'ond')
console.log(result)

result = text.replace(/at/g, "ond")
console.log(result)

result = text.replace(/(.at)/g, "world ($1)")
console.log(result)

function htmlEscape(text) {
    return text.replace(/[<>"&]/g, function (match, pos, originalText) {
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '&':
                return '&amp;'
            case "\"":
                return "&quot;"
        }
    })
}

console.log(htmlEscape('<p class=\"greeting\">Hello world!</p>'))

let colorText = "red,blue,green,yellow"
let color1 = colorText.split(",")
let color2 = colorText.split(",", 2)
let color3 = colorText.split(/[^,]+/)

console.log(color1)
console.log(color2)
console.log(color3)
