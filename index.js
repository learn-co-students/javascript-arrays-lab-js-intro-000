const app = "I don't do much."

function destructivelyAppendKitten(name){

  kittens.push(name);
}

function destructivelyPrependKitten(name){

  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){

  kittens.pop(name);
}

function  destructivelyRemoveFirstKitten(){

  kittens.shift(name);
}

function appendKitten(name){

  var newArray = [...kittens, name];

  return newArray;
}

function  prependKitten(name){

  var newArray = [name, ...kittens];
  return newArray;
}

 function removeLastKitten(){
  var kits = [];
   //non destructive methods
   kits = kittens.slice(0, kittens.length -1);
   return kits;
 }

function removeFirstKitten(){
  var kits = [];
  kits = kittens.slice(1);
  return kits;
}
