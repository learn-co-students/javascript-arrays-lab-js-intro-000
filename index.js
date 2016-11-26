const app = "I don't do much."

  var kittens=[];

function destructivelyAppendKitten(name){

  kittens.push(name);
  return kittens;
}

 function destructivelyPrependKitten(name){
   kittens.unshift(name);
   return kittens;
 }

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function  destructivelyRemoveFirstKitten() {
  kittens.shift();
}


function appendKitten(name){
 var myArray = [...kittens,name]
  return myArray;
}

function prependKitten(name){
  var myArray = [name,...kittens];
  return myArray;
}

function removeLastKitten() {
  var myArray = kittens.slice(0,kittens.length-1);
  return myArray;
}


function removeFirstKitten(){
var copy = kittens.slice(0);
  copy.shift();
  return copy;
}
