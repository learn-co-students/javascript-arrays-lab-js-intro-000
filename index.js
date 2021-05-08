var kittens = ["Milo", "Otis", "Garfield"]
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Meowth){
  kittens.push(Meowth)
  return kittens
}

function destructivelyPrependKitten(Meowth){
  kittens.unshift(Meowth)
  return kittens
}

function destructivelyRemoveLastKitten(Garfield){
  kittens.pop(Garfield)
  return kittens
}

function destructivelyRemoveFirstKitten(Milo){
  kittens.shift(Milo)
  return kittens
}

function appendKitten(Tom){
  return [...kittens, Tom]
}

function prependKitten(Tom){
  return [Tom, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
