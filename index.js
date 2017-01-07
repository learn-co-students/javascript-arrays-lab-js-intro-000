const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = [...kittens, name];
  return kittens;
}

function prependKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = [name, ...kittens];
  return kittens;
}

function removeLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = kittens.slice(0, kittens.length - 1);
  return kittens;
}

function removeFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens = kittens.slice(1);
  return kittens;
}
