const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var z = [...kittens, name];
  return z;
}

function prependKitten(name){
  var z = [name, ...kittens];
  return z;
}

function removeLastKitten(){
  var z= kittens.slice(0, kittens.length-1);
  return z;
}

function removeFirstKitten(){
  var z= kittens.slice(1, kittens.length);
  return z;
}
