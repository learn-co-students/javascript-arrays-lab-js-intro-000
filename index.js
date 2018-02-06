const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function  destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function prependKitten(name){
  var tab=[name,...kittens];
  return tab;
}

function appendKitten(name){
  var tab=[...kittens,name];
  return tab;
}

function removeLastKitten(){
  var tab=kittens.slice(0,kittens.length-1);
  return tab;
}

function removeFirstKitten(){
  var tab=kittens.slice(1);
  return tab;
}
