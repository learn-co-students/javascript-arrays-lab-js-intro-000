var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  //var copyKittens = [...kittens]
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
  var copyKittens = [...kittens]
  copyKittens.push(name)
  return copyKittens
}

function prependKitten(name){
  var copyKittens = [...kittens]
  copyKittens.unshift(name)
  return copyKittens
}


function removeLastKitten(name){
  var copyKittens = [...kittens]
  copyKittens.pop()
  return copyKittens
}

function removeFirstKitten(name){
  var copyKittens = [...kittens]
  copyKittens.shift(name)
  return copyKittens
}
