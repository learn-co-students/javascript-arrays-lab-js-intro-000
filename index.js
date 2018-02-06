const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(){
  kittens.push("Ralph");
  return kittens
}
function destructivelyPrependKitten(){
  kittens.unshift("Bob");
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}

function appendKitten(){
  return [...kittens , "Broom"];
}
function prependKitten(){
  return ["Arnold", ...kittens];
}
function removeLastKitten(){
  var kittens_2 = kittens.slice(0, kittens.length -1);
  return kittens_2
}
function removeFirstKitten(){
  var kittens_2 = kittens.slice(1);
  return kittens_2
}
