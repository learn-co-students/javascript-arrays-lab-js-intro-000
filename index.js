const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens = [...kittens, name];
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens = [name, ...kittens]
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens;
}

function appendKitten(name){
  var x = kittens
  x = [...x, name]
  return x;
}

function prependKitten(name){
  var x = kittens
  return x = [name, ...x];
}

function removeLastKitten(){
  var a = kittens
  return a = a.slice(0, a.length - 1);
}

function removeFirstKitten(){
  var a = kittens;
  return a.slice(1);
}
