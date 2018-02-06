const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];


//'append' means add to the end of list
//push adds an element to the end of an array
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

//unshift adds an element to the beginning of an array
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

//pop removes last element of an array
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens;
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  return kittens.slice (0, kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice (1);
}
