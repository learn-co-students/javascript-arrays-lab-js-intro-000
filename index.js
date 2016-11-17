const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(){
  kittens.push("Ralph")
}
// need to figure out how to now get rid of Ralph before going on
kittens.pop()
function destructivelyPrependKitten(){
  kittens.unshift("Bob")
}
// need to figure out how to now get rid of Bob before going on
kittens.shift()
function destructivelyRemoveLastKitten(){
//
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
kittens.unshift('Milo')
function appendKitten(){
  return [...kittens, 'Broom']
}

function prependKitten(){
  return ['Arnold', ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1, kittens.length, 0)
}
