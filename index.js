var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
 kittens.push("Ralph")

  return kittens
}

function destructivelyPrependKitten(name){

kittens.unshift("Bob")

  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop(1)

  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()

  return kittens
}


function appendKitten(name){
  var NewArray  = kittens.concat("Broom")

  return NewArray

}

function prependKitten(name){
  var NewKitten =["Arnold", ...kittens]

  return NewKitten
}

function removeLastKitten(){
  var remove = kittens.slice(0, 2)

  return remove
}

function removeFirstKitten(){
  var removeFirst = kittens.slice(1)
  return removeFirst
}
