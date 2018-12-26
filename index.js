var kittens = [ "Milo", "Otis", "Garfield" ] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
const newArray = [ ...kittens , name ]
return newArray
}

function prependKitten(name) {
  const newArray = [ name, ...kittens ]
  return newArray
}

function removeLastKitten() {
const newAray = kittens.slice(0,2)
return newAray
}

function removeFirstKitten() {
const newArray = kittens.slice(-2)
return newArray
}
