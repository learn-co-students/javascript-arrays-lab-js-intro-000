var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function appendKitten(name){
  var myarr=kittens
  return myarr.concat(name)
}
function prependKitten(name){
 var myarr = [name,...kittens];
  return myarr;
}
function removeLastKitten(){
var myarr = kittens.slice(0,2);
   return myarr
}
function removeFirstKitten(){
var myarr = kittens.slice(1);
   return myarr
}