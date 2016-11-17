const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
}

function appendKitten(name){
  var newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten(){
  var newArray = kittens.slice(0,2);
  return newArray;
}

function removeFirstKitten(){
  var newArray = kittens.slice(1,3);
  return newArray;
}
