const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(){
   kittens = [...kittens, "Ralph"];
  return kittens
}

function destructivelyPrependKitten(){
   kittens = ["Bob",...kittens];
  return kittens
}


function destructivelyRemoveLastKitten(){
   kittens.pop();
  return kittens
}


function destructivelyRemoveFirstKitten(){
   kittens.shift();
  return kittens
}

function appendKitten(){
  var newarray=[ ...kittens, "Broom"];
 return newarray
}

function prependKitten(){
  var newarray= [ "Arnold",...kittens];
 return newarray
}

function removeLastKitten(){
  var newarray= kittens.slice(0, kittens.length - 1);
 return newarray
}

function removeFirstKitten(){
  var newarray= kittens.slice(1);
 return newarray
}
