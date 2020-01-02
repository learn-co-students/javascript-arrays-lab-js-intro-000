var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name);
}

function appendKitten(name) {
  return kittens.concat(name);
}

function prependKitten(name) {
  var newCat = [name];
  return newCat.concat(kittens);
}

function removeLastKitten(){
  return kittens.slice(0,2);
}

function removeFirstKitten() {
  return kittens.slice(1);
}