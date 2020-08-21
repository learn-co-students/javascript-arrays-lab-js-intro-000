var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var newArr = []
  newArr = kittens.concat(name)
  return newArr
}

function prependKitten(name) {
  var newArr = []
  var nameArr = [name]
  newArr = nameArr.concat(kittens)
  return newArr
}

function removeLastKitten() {
  var newArr = kittens.slice(0, kittens.length - 1)
  return newArr
}

function removeFirstKitten() {
  var newArr = kittens.slice(1)
  return newArr
}



