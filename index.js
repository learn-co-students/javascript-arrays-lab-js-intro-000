var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = (name) => (kittens.push(name))

var destructivelyPrependKitten = (name) => (kittens.unshift(name))

var destructivelyRemoveLastKitten = () => (kittens.pop())

var destructivelyRemoveFirstKitten = () => (kittens.shift())

var appendKitten = (name) => (kittens.concat(name))

var prependKitten = (name) => ([name].concat(kittens))

var removeLastKitten = () => (kittens.slice(0,kittens.length-1))

var removeFirstKitten = () => (kittens.slice(1))
