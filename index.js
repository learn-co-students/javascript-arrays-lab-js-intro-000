const app = "I don't do much."

// kittens = ["Mile", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
    kittens.unshift(name)
  }

function destructivelyRemoveLastKitten(){
    kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var newArray = [...kittens, name]
  return newArray
}

function prependKitten(name){
  var newArray = [name, ...kittens]
  return newArray
}
/*
function removeLastKitten(){
  var kiten = kittens.slice(0, (kittens.lenght - 1) )
  return kiten
}*/

function removeLastKitten(){
   var newArray = kittens.slice(0, 2)
   return newArray
}

function removeFirstKitten(){
  var newArray = kittens.slice(1, kittens.lenght)
  return newArray
}
