var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}

function appendKitten(name){
  var name1 = [...kittens, name]
  return name1

}

function prependKitten(name){
  var name2 = [name, ...kittens]
  return name2
}

function removeLastKitten(name){
  var cats1 = kittens.slice(0, kittens.length-1)
  return cats1
}

function removeFirstKitten(name){
  var cats2 = kittens.slice(1)
  return cats2
}
