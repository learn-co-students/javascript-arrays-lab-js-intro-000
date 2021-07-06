var kittens = ["Milo", "Otis", "Garfield"];
//define your array here

function destructivelyAppendKitten (name) {
  name = "Ralph";
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  name = "Bob"
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}


function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
name = ["Broom"];
  return kittens.concat(name);
}

function prependKitten(name) {
  name = ["Arnold"];
  return name.concat(kittens);
}

function removeLastKitten() {
  return kittens.slice(0,2);
}

function removeFirstKitten() {
  return kittens.slice(1,3);
}
