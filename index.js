var kittens = ['Milo','Otis','Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens = kittens.concat(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  var nkittens = kittens.concat(name);
  return nkittens;
}
function prependKitten(name){
  var array = new Array();
  array.unshift(name);
  var newArray = array.concat(kittens);
  return newArray;
}
function removeLastKitten(){
  var array = kittens.slice(0,kittens.length-1);
  return array;
}
function removeFirstKitten(){
  var array = kittens.slice(1,kittens.length);
  return array;
}
