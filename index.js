var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var new_array = [...kittens, name];
  return new_array;
}

function prependKitten(name){
  var new_array1 = [name, ...kittens];
  return new_array1;
}

function removeFirstKitten() {
  var new_array2 = kittens.slice(1);
  return new_array2;
}

function removeLastKitten() {
  var new_array3 = kittens.slice(0, 2);
  return new_array3;
}
