var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name) {
   kittens.push(name);
   return kittens
}

function destructivelyPrependKitten(name) {
   kittens.unshift(name);
   return kittens
}

function destructivelyRemoveLastKitten() {
   kittens.pop();
   return kittens
}

function destructivelyRemoveFirstKitten(name) {
   kittens.shift();
   return kittens
}

function appendKitten(name) {
  var outarray = [...kittens, name];
  return outarray
}

function prependKitten(name) {
  var outarray = [name, ...kittens];
  return outarray
}
function removeLastKitten() {
   var outarray = kittens.slice(0, kittens.length - 1);
   return outarray
}
function removeLastKitten() {
   var outarray = kittens.slice(0, kittens.length - 1);
   return outarray
}

function removeFirstKitten() {
   var outarray = kittens.slice(1);
   return outarray
}
