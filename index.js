var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here - dest append - push
function destructivelyAppendKitten (name) {
  return kittens.push(name);
}

/*
var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here - prepend to beginn - unshift

function destructivelyPrependKitten (kittens,name="Bob") {
  kittens.unshift (name);
  
  return kittens
}
*/

var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here - dest rem last - pop

function destructivelyRemoveLastKitten(kittens) {
  kittens.pop();
  
  return kittens;
}

var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here - dest rem first - shift

function destructivelyRemoveFirstKitten (kittens) {
  kittens.shift();
  
  return kittens;
}

var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here - append return no change

function appendKitten (kittens, name='Broom') {
  newArray = [...kittens, name];
  return newArray;
}

var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here - prepend return no change

function prependKitten (kittens, name) {
  newArray = [name, ...kittens];
  return newArray;
}

var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here - rem last kitten - return new, no change


var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here - rem first kitten - return new, no change