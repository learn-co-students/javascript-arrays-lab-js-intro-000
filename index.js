const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return name
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return name
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name){
  var newKittyKitten = [name, ...kittens]
  return newKittyKitten
}

function removeLastKitten(){
  var newCat = kittens.slice(0, kittens.length - 1)
  return newCat
}

function removeFirstKitten(){
  var newKittyCat = kittens.slice(1)
  return newKittyCat
}
