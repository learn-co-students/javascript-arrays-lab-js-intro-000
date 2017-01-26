const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
};

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens;
};

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
};

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
};

function appendKitten(name){
  var array2 = [...kittens, "Broom"];
  return array2;
};

function prependKitten(name){
  var array2 = ["Arnold", ...kittens];
  return array2;
};

function removeLastKitten(){
  var slice = kittens.slice(0,-1);
  return slice;
};

function removeFirstKitten(){
  var slice = kittens.slice(1);
  return slice;
};
