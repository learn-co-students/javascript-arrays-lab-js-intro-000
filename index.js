var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop()
  return kittens
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var newKittenArray = kittens.concat(name)
  return newKittenArray
}

function prependKitten(name) {
  var newKittenArray = [name, ...kittens]
  return newKittenArray
}

var removeLastKitten = () => {
  var newKittenArray = kittens.slice(0, kittens.length - 1 )
  return newKittenArray
}

var removeFirstKitten = () => {
  var newKittenArray = kittens.slice(1)
  return newKittenArray
}
