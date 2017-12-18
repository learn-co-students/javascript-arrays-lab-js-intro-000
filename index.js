const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(name){
  return [...kittens,name];
}
function prependKitten(name){
  return [name, ...kittens];
}
function removeLastKitten(){
  let arr = [...kittens];
  arr.pop()
  return arr;
}
function removeFirstKitten(){
  let arr = [...kittens];
  arr.shift();
  return arr;
}
