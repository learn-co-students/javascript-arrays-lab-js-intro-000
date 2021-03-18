var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(i){
  kittens.push(i);
}

function destructivelyPrependKitten(i){
  kittens.unshift(i);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(i){
  var ar = kittens.concat();
  ar.push(i);
  return ar;
}

function prependKitten(i){
  var ar = kittens.slice();
  ar.unshift(i);
  return ar;
}

function removeLastKitten(){
  var ar = kittens.concat();
  ar.pop();
  return ar;
}

function removeFirstKitten(){
  var ar = kittens.slice();
  ar.shift();
  return ar;
}
