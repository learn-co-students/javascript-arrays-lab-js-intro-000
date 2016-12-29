const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var kittenmod = new Array();
  kittenmod = [...kittens, name];
  return kittenmod;
}

function prependKitten(name) {
  var kittenmod = new Array();
  kittenmod = [name, ...kittens];
  return kittenmod;
}

function removeLastKitten(){
  var kittenmod = new Array();
  kittenmod = [...kittens]
  kittenmod.pop();
  return kittenmod;
}

function removeFirstKitten() {
  debugger;
  var kittenmod = new Array();
  kittenmod = [...kittens]
  kittenmod.shift();
  return kittenmod;
}
