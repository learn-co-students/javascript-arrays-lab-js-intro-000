const app = "I don't do much."

 var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
}

function appendKitten(name){
  var appendedKittens = kittens.slice();
  appendedKittens.push(name);
  return appendedKittens;
};

function prependKitten(name){
  var prependKittens = kittens.slice();
  prependKittens.unshift(name);
  return prependKittens;
}




function removeLastKitten (name) {
  var removeLastKitten = kittens.slice();
  removeLastKitten.pop();
  return removeLastKitten;
}

function removeFirstKitten(name){
  var removeFirstKitten = kittens.slice();
  removeFirstKitten.shift();
  return removeFirstKitten;
}
