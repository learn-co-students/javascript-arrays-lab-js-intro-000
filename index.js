const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
destructivelyAppendKitten("Meow");

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
destructivelyPrependKitten();

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten()  {
  return kittens.shift();
}
destructivelyRemoveFirstKitten() ;

function appendKitten(name) {
  return [...kittens, name];
}
appendKitten("saito");

function prependKitten(name) {
  return [name, ...kittens];
}
prependKitten("pika");

function removeLastKitten(){
  return kittens.slice(0, -1);
}
removeLastKitten();


function removeFirstKitten(){
  return kittens.slice(1);
}
removeFirstKitten();
