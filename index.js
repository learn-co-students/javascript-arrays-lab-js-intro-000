const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(kitten){
  kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten(kitten){
  kittens.pop(kitten);
}

function destructivelyRemoveFirstKitten(kitten) {
  kittens.shift(kitten)
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeFirstKitten(){
  return kittens.slice(1);
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}
