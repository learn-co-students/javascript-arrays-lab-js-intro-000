const app = "I don't do much."
let kittens = []
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
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

function appendKitten(name){
  var arr = [...kittens]
  arr.push(name)
  return arr
}

function prependKitten(name){
  var arr = [...kittens]
  arr.unshift(name)
  return arr
}

function removeLastKitten(){
  var arr = [...kittens]
  arr.pop()
  return arr
}

function removeFirstKitten(){
  var arr = [...kittens]
  arr.shift()
  return arr
}
