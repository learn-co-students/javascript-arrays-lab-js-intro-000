const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {

  kittens.push(name);

return kittens;


}

function destructivelyPrependKitten(name) {

  kittens.unshift(name);

  return kittens;

}


function destructivelyRemoveLastKitten() {

  kittens.pop(name);

  return kittens;


}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name);

  return kittens;


}



function appendKitten(name) {

  var n = [...kittens, name];

  return n;


}

function prependKitten(name) {

  var n = [name, ...kittens];

  return n;


}


function removeLastKitten() {

  return kittens.slice(0, kittens.length -1);


}

function removeFirstKitten() {

  return kittens.slice(1);


}
