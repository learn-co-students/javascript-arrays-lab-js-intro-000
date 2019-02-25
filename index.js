var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
    kittens.push(name)
}
destructivelyAppendKitten('Ralph')

function destructivelyPrependKitten(name) {
    kittens.unshift(name)
}
destructivelyPrependKitten("Bob")

function destructivelyRemoveLastKitten() {
    kittens.pop()
}
destructivelyRemoveLastKitten()

function destructivelyRemoveFirstKitten() {
    kittens.shift()
}
destructivelyRemoveFirstKitten()

function appendKitten(name) {
    return [...kittens, name]
}

function prependKitten(name) {
    return [name, ...kittens]
}
function removeLastKitten() {
  return kittens.slice(0,2)
}

function removeFirstKitten() {
    return kittens.slice(1)
}
