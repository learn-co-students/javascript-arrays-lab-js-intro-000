var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return name
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return name
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens = kittens.slice(1);
  return kittens
}

function appendKitten(name){
  var newKittensArray = kittens.concat(name);
  return newKittensArray
}

function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten(){
  return kittens.slice (-2);
}
