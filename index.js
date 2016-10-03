const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];
function Arrays() {
  return kittens;
}


function kittens() {
  var Kittens = ["Milo", "Otis", "Garfield"];
  return Kittens;
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(kittens.length-1);
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
return [...kittens,name];
}

function prependKitten(name) {
  return [name,...kittens];
}

function removeLastKitten() {
return kittens.slice(0,2);
}

function removeFirstKitten() {
   return kittens.slice(1,3);
}
