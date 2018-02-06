const app = "I don't do much."
function destructivelyAppendKitten(name){
  var x = kittens.push(name)
  return x
}
function destructivelyPrependKitten(name){
  var x = kittens.unshift(name)
  return x
}
function destructivelyRemoveLastKitten(name){
  var x = kittens.pop(name)
  return x
}
function destructivelyRemoveFirstKitten(name){
  var x = kittens.shift(name)
  return x
}
function appendKitten(name){
  var x = [...kittens, name]
  return x
}
function prependKitten(name){
  var x = [name, ...kittens]
  return x
}
function removeLastKitten(name){
  var x = kittens.slice(0, kittens.length -1)
  return x
}
function removeFirstKitten(name){
  var x = kittens.slice(1)
  return x
}
