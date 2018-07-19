var kittens=["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(myKitten){
  kittens.push(myKitten)
  return kittens
}

function destructivelyPrependKitten(myKitten){
  kittens.unshift(myKitten)
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

function appendKitten(myKitten){
  var newKittens=[...kittens, myKitten]
  return newKittens

}

function prependKitten(myKitten){
  var newKittens=[myKitten, ...kittens]
  return newKittens
}

function removeLastKitten(){
  var newKittens=kittens.slice(0, kittens.length-1)
  return newKittens
}

function removeFirstKitten(){
  var newKittens=kittens.slice(1)
  return newKittens
}
