var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name);
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

function appendKitten(name){
  var kitten = [...kittens, name];
  return kitten;
}

function prependKitten(name){
  var kitten = [name, ...kittens];
  return kitten;
}

function removeLastKitten(){
var kitten = kittens.slice(0,2);
return kitten;
}

function removeFirstKitten(){
  var kitten = kittens.slice(1);
  return kitten;

}
