var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(name){
  return kittens.push(name)
}

var destructivelyPrependKitten = function(name){
  return kittens.unshift(name)
}

var destructivelyRemoveLastKitten = function(){
  kittens.pop()
  return kittens
}

var destructivelyRemoveFirstKitten = function(){
  kittens.shift()
  return kittens
}

var appendKitten = function(name){
  var name
  return kittens.concat(name)
}

var prependKitten = function(name){
  var array = [name]
  return array.concat(kittens)
}

var removeLastKitten = function(){
  return kittens.slice(0,2)
}

var removeFirstKitten = function(){
  return kittens.slice(1,3)
}
