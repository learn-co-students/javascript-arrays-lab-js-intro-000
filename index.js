const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(cat){
  kittens.push(cat);
  return kittens;
}

function destructivelyPrependKitten(cat){
  kittens.unshift(cat);
  return kittens;
}

function destructivelyRemoveLastKitten(cat){
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function prependKitten(cat){
  return [cat, ...kittens]
}

function appendKitten(cat){
  return [...kittens, cat];
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
