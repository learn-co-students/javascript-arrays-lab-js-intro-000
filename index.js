var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
return   kittens.push(name)
}// Add your functions and code here

function destructivelyPrependKitten(name) {
return  kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten()
{
kittens.shift()
 return kittens
}

function  appendKitten(name) {
var newArray = kittens.slice();
newArray.push(name)
 return newArray
}

function  prependKitten(name) {
  var newArray = kittens.slice();
  newArray.unshift(name)
   return newArray
}

function removeLastKitten(){
  var newArray = kittens.slice();
  newArray.pop(name)
   return newArray
}

function removeFirstKitten(){
  var newArray = kittens.slice(1);

   return newArray
}
