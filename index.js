const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  kittens.push(name)
  var newArr = kittens
  kittens = kittens.slice(0, kittens.length-1)
  return newArr
}

function prependKitten(name){
  kittens.unshift(name)
  var newArr = kittens
  kittens = kittens.slice(1)
  return newArr
}

function removeLastKitten(){
  var tt = kittens.pop()
  var newArr = kittens
  kittens = [...kittens,tt]
  return newArr
}

function removeFirstKitten(){
  var tt = kittens.shift()
  var newArr = kittens
  kittens = [tt, ...kittens]
  return newArr
}
