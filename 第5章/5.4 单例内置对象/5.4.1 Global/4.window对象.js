// var color = "red"
//
// function sayColor() {
//     console.log(window.color)
// }
//
// sayColor()

let global = (function () {
    return this
})()

console.log(global);
