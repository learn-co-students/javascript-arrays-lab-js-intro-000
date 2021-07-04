var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}
function appendKitten(name) {
var newList = kittens.slice(0);
 newList.splice(newList.length, 0 , name);
return newList;
}
function prependKitten(name){
  var newList = kittens.slice(0);
  newList.splice(0, 0, name);
  return newList
}
function removeLastKitten() {
  return  kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten() {
  return kittens.slice(1);
}
