var kittens = ["Milo","Otis","Garfield"]; //define your array here
var array2=new array();
// Add your functions and code here
function destructivelyAppendKitten(name){
return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  array2=[...kittens,name];
  return array2;
}

function prependKitten(name){
  array2=[name,...kittens]
  return array2;
}

function removeLastKitten(name){
  array2=kittens.slice(0,kittens.length-1);
  return array2;
}

function removeFirstKitten(name){
array2=kittens.slice(1);
return array2;
}
