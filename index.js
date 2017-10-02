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
  return kittens = kittens.slice(1);
}

function appendKitten(name){
  const kitten = [...kittens, name];
  return kitten;
}
function prependKitten(name){
  const kitten = [name, ...kittens];
  return kitten;
}

function removeLastKitten(){
  const kitten = kittens.slice(0, kittens.length - 1)
  return kitten;
}
function removeFirstKitten(){
  const kitten = kittens.slice(1);
  return kitten;
}
