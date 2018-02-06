const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(new_cat){
  kittens.push(new_cat)
  return kittens
}

function destructivelyPrependKitten(new_cat){
  kittens.unshift(new_cat)
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

function appendKitten(new_cat){
  var new_kittens = [...kittens,new_cat]
  return new_kittens
}

function prependKitten(new_cat){
  var new_kittens = [new_cat,...kittens]
  return new_kittens
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
