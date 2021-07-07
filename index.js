 //define your array here
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(name){
   var narr = kittens.concat(name)
   return narr;
}
function prependKitten(name){
  var narr = [ name ,...kittens]
  return narr;
}
function removeLastKitten(){
  var obj = kittens.slice(0,kittens.length-1)
  return obj;
}
function removeFirstKitten(){
  var obj = kittens.slice(1)
  return obj;
}
var kittens = ['Milo','Otis','Garfield'];
