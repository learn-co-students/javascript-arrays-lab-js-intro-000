var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(kitten){
  kittens.push(kitten)
}

function destructivelyPrependKitten(kitten){
  kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  }

function appendKitten(name){
var newkittens
 newkittens=[...kittens,name]
return newkittens
 }

function prependKitten(name){
  var newkittens
  newkittens=[name,...kittens]
  return newkittens
}

function removeLastKitten(){
  var newkittens
  newkittens=kittens.slice(0,kittens.length-1)
    return newkittens
}

function removeFirstKitten(){
  var newkittens
  newkittens=kittens.slice(1,kittens.length)
  return newkittens
  }
