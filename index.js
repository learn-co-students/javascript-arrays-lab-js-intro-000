const app = "I don't do much."

function Arrays(array1) {
  return array1;
}

function kittens() {
  var kittens = [`Milo`, `Otis`,`Garfield`]

  return kittens;
}


function destructivelyAppendKitten(element) {
  var gone = kittens.push(element);
  return kittens;
}

function destructivelyPrependKitten(element) {
  var gone = kittens.unshift(element);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  var gone = kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  var gone = kittens.shift();
  return kittens;
}

function appendKitten(element) {
  var newArray = new Array();

  return newArray = [...kittens, element];
}

function prependKitten(element) {
  var newArray = new Array();

  return newArray = [element, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
