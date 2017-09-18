const app = "I don't do much.";
var krittens = [ "Otis", "Garfield"];

function kittens(){

  var kittens = ["Milo", "Otis", "Garfield"];

}
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return krittens;
}
function appendKitten(name){
  var newKittens  = [...kittens];
  newKittens.push(name);
  return newKittens;
}
function prependKitten(name){
  var newKittens = [...kittens];
  newKittens.unshift(name);
  return newKittens;
}
function removeLastKitten(){
  var newKittens = [...kittens];
  newKittens.pop();
  return newKittens;
}
function removeFirstKitten(){
  var newKittens = [...kittens];
  newKittens.shift();
  return newKittens;
}
