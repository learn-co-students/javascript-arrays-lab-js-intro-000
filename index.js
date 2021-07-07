var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var appendKitten = [...kittens, name];
  return appendKitten;
}

function prependKitten(name) {
 var prependKitten = [name, ...kittens]
 return prependKitten;
}

function removeLastKitten(){
  var lastKitten = kittens.slice(0, kittens.length -1);
  return lastKitten
}

function removeFirstKitten(){
  var firstKitten = kittens.slice(1);
  return firstKitten;
}
