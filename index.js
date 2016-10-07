const app = "I don't do much."

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
  var newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name){
  var newKittensPre = [name, ...kittens];
  return newKittensPre;
}

function removeLastKitten(){
  var lessKittens = kittens.slice(0,-1);
  return lessKittens;
}

function removeFirstKitten(){
  var lessKittensPre = kittens.slice(1);
  return lessKittensPre;
}
