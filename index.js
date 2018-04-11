const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
}


function appendKitten(name) {
  let new_kittens = kittens.slice();
  new_kittens.push(name);
  return new_kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function prependKitten(name) {
  let new_kittens = kittens.slice();
  new_kittens.unshift(name);
  return new_kittens;
}

function removeKitten() {
  let new_kittens = kittens.slice();
  new_kittens.pop();
  return new_kittens;
}

function removeLastKitten() {
  let new_kittens = kittens.slice();
  new_kittens.pop();
  return new_kittens;
}

function removeFirstKitten(){
  let new_kittens = kittens.slice();
  new_kittens.shift();
  return new_kittens;
}