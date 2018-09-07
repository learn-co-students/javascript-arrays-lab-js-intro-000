// Add your functions and code here
//var kittens =["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
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
  var kittens_new;
  kittens_new = [...kittens, name]
  return kittens_new
}
function prependKitten(name){
  var kittens_new
  kittens_new = [name, ...kittens]
  return kittens_new
}
function removeLastKitten(name){
  var kittens_new
  kittens_new = kittens.slice(0, kittens.length - 1)
  return kittens_new
}
function removeFirstKitten (name){
  var kittens_new
  kittens_new = kittens.slice(1)
  return kittens_new
}
