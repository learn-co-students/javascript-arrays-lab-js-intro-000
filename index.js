var kittens = [] = ["Milo", "Otis", "Garfield"]//define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(name){
  kittens.push(name)
}
var destructivelyPrependKitten = function(name){
  kittens.unshift(name)
}
var destructivelyRemoveLastKitten = function(){
  kittens.pop()
}
var destructivelyRemoveFirstKitten = function(){
  kittens.shift();
}
var appendKitten = function(name){
  return [...kittens, name];
}
var prependKitten = function(name){
  return [name, ...kittens]
}
var removeLastKitten = function(){
  return kittens.slice(0,2)
}
var removeFirstKitten = function(){
  return kittens.slice(1,3)
}
