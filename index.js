var kittens = ["Milo", "Otis", "Garfield"]//define your array here
console.log(kittens)
// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
kittens.push ("Ralph");
return kittens;
};
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name){
  kittens.unshift ("Bob");
  return kittens;
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name){
  var newKitten= [...kittens, "Broom"];
  return newKitten
}
var kittens = ["Milo", "Otis", "Garfield"]
function prependKitten(name){
  var newKitten= ["Arnold", ...kittens];
  return newKitten
}
var kittens = ["Milo", "Otis", "Garfield"]
function removeLastKitten(){
var kitten =kittens.slice(0, kittens.length -1)
return kitten

}
var kittens = ["Milo", "Otis", "Garfield"]
function removeFirstKitten(){
var kitten =kittens.slice(1)
return kitten
}
