const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
    kittens.push(name);
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
    kittens.unshift(name);
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}


function appendKitten(name) {
  var newArray = [...kittens, name];
  return newArray;
}


function prependKitten(name) {
    var newArray = [name, ...kittens];
    return newArray;
}

function removeLastKitten(name) {
    var newArray = kittens.slice(0, 2);
    return newArray;
}

function removeFirstKitten(name) {
    var newArray = kittens.slice(1);
    return newArray;
}
