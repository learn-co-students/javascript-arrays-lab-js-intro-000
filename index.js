const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newarr = kittens.slice(0);
  newarr.push(name);
  return newarr;
}

function prependKitten(name) {
  var newarr = kittens.slice(0);
  newarr.unshift(name);
  return newarr;
}

function removeLastKitten() {
  var newarr = kittens.slice(0,kittens.length-1);
  return newarr;
}

function removeFirstKitten(){
  var newarr = kittens.slice(1, kittens.length);
  return newarr;
}
