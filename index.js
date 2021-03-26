var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
kittens = kittens.concat(name)
return kittens
}

function destructivelyPrependKitten(name){
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

function appendKitten(name){
  var kittenstwo = kittens.concat(name)
  return kittenstwo
}

function prependKitten(name){
  var kittensthree = [name, ...kittens]
  return kittensthree
}

function removeLastKitten(){
  var kittensfour = kittens.slice(0, kittens.length - 1)
  return kittensfour
}

function removeFirstKitten(){
var kittensfive = kittens.slice(1)
return kittensfive
}
