const app = "I don't do much."


var kittens = [];
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
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

function appendKitten(name){
  var kitties = [...kittens];
  kitties.push(name)
  return kitties
}

function prependKitten(name){
  var kitties = [...kittens];
  kitties.unshift(name);
  return kitties
}

function removeLastKitten(name){
  var kitties = [...kittens];
  kitties.pop(name);
  return kitties
}

function removeFirstKitten(){
  var kitties = [...kittens];
  kitties.shift();
  return kitties
}
