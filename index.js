var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(){
  kittens.push("Ralph")
}


function destructivelyPrependKitten(){
  kittens.unshift("Bob")
}


function destructivelyRemoveLastKitten(){
  kittens.pop()
}


function destructivelyRemoveFirstKitten(){
  kittens.shift()
}


function appendKitten(name){
  var kittens2 = []
  kittens2 = kittens2.concat(kittens, name)
  return kittens2
}

function prependKitten(name){
  var kittens2 = []
  kittens2 = kittens2.concat(name, kittens)
  return kittens2
}


function removeLastKitten(){
  var kittens2 = []
  kittens2 = kittens.slice(0, kittens.length - 1)
  return kittens2
}

function removeFirstKitten(){
  var kittens2 = []
  kittens2 = kittens.slice(1)
  return kittens2
}
