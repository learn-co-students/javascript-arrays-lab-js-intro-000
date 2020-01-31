 var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here
function destructivelyAppendKitten(name) {
    kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

function appendKitten(name){
  kittens.concat(name)
  return kittens.concat(name)
}

function prependKitten(name){
  [name, ...kittens]
    return [name, ...kittens]
}

function removeLastKitten(name){
  kittens.pop(name)
    return kittens.pop(name)
}
