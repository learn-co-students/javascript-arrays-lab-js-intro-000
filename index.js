const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

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

// 5 & 6

function appendKitten(name) {
  var kitten = [...kittens, name]
  return kitten

}

function prependKitten(name) {
  var kitten = [name, ...kittens]
  return kitten
}


// 7 & 8


function removeLastKitten() {
  return kittens.slice(0,kittens.length - 1)

}

function removeFirstKitten() {
  return kittens.slice(1)

}
