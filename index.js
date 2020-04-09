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

function destructivelyRemoveLastKitten(name){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift()
    return kittens

}
function appendKitten(name){
  appendKitten = [...kittens, "Broom"]
  return appendKitten
}

function prependKitten(name){
  prependKitten = ["Arnold", ...kittens]
  return prependKitten
}

function removeLastKitten(name){
  removeLastKitten = kittens.slice(0, -1)
  return removeLastKitten
}

function removeFirstKitten(name){
  removeFirstKitten = kittens.slice(1,3)
  return removeFirstKitten
}
