const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push (name)

  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)

  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  var newArray = [...kittens, name]

  return newArray
}

function prependKitten(name){
  var newArray = [name, ...kittens]

  return newArray
}

function removeLastKitten() {
  var newArray = kittens
  newArray = newArray.slice(0, newArray.length-1)

  return newArray

}

function removeFirstKitten() {
  var newArray = kittens

  newArray = newArray.slice(1)
  return newArray

}
