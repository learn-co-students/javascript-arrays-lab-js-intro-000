const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return array
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
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function removeLastKitten(){
  var len = kittens.length - 1
  return kittens.slice(0, len)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
