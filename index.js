var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
  return kittens;
}

var appendKitten = (name) => [...kittens, name];

var prependKitten = (name) => [name, ...kittens];

var removeLastKitten = () => kittens.slice(0,kittens.length-1);

var removeFirstKitten = () => kittens.slice(1);
