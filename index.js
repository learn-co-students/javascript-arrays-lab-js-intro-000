const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(addTo) {
  kittens.push(addTo);
}
destructivelyAppendKitten('Pinto');

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
destructivelyPrependKitten('Bob');

function destructivelyRemoveLastKitten(){
  kittens.pop();
}
destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
destructivelyRemoveFirstKitten();

function appendKitten(){
var moreKittens = [...kittens, 'Broom'];
return moreKittens;
}
appendKitten()

function prependKitten(name){
  var evenMoreKittens = ['Arnold', ...kittens];
  return evenMoreKittens;
}
prependKitten();


function removeLastKitten(){
  var lastKat = kittens.slice(0,kittens.length - 1);
  return lastKat;
}
removeLastKitten();

function removeFirstKitten(){
  var firstKat = kittens.slice(1);
  return firstKat;
}
removeFirstKitten();
