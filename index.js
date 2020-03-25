var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten() {
  
  kittens.push("Ralph");
  
}

function destructivelyPrependKitten() {
  
  kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  
  kittens.pop();
  
}

function destructivelyRemoveFirstKitten() {
  
  kittens.shift();
  
}

function appendKitten() {
  
  var newKittens = [...kittens, "Broom"];
  return newKittens;
  
}

function prependKitten() {
  var newKittens2 = ["Arnold", ...kittens];
  return newKittens2;
  
}

function removeLastKitten() {
  
  var newKittens3 = kittens.slice(0,-1);
  return newKittens3;
  
}

function removeFirstKitten() {
  
  var newKittens4 = kittens.slice(1);
  
  return newKittens4;
  
  
}

