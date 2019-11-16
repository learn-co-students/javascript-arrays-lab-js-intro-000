var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}

function appendKitten(name){
  var newArray = kittens.concat(name);
  return newArray;
}

function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten(name){
  var newArray = kittens.slice(0, -1);
  return newArray;
}

function removeFirstKitten(name){
  var newArray = kittens.slice(1);
  return newArray;
}