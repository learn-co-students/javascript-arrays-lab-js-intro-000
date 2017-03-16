const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}


function destructivelyRemoveLastKitten() {
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift(name);
}

function appendKitten(name) {
   var newArr = kittens.slice();
   newArr.push(name);
   return newArr;
}

function removeLastKitten(name) {
   var newArr = kittens.slice();
   newArr.pop();
   return newArr;
}

function prependKitten(name) {
 var newArr = kittens.slice();
 newArr.unshift(name);
  return newArr;
}

function removeFirstKitten(name) {
  var newArr = kittens.slice();
  newArr.shift();
  return newArr;
}
