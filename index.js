// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
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
  var n = kittens.concat(name)
  return n
}

function prependKitten(name){
  var n = kittens.concat()
  n.splice(0, 0, name)
  return n
}

function removeLastKitten(){
  var n = kittens.slice(0,-1)
  return n
}

function removeFirstKitten(){
  var n = kittens.slice(1)
  return n
}
