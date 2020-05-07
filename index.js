var kittens = ["Milo", "Otis", "Garfield"];

// destructivelyAppendKitten - appends a kitten to the end of kittens array:
function destructivelyAppendKitten(name){
  kittens.push(name);
}

// destructivelyPrependKitten - prepends a kitten to beginning of kittens array:
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

// destructivelyRemoveLastKitten - removes last kitten from kittens array:
function destructivelyRemoveLastKitten(){
  kittens.pop();
}

// destructivelyRemoveFirstKitten - removes first kitten from kittens array:
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

// appendKitten - appends kitten to kittens array and returns new array:
function appendKitten(name){
  return kittens.concat(name);
}

// prependKitten - prepends kitten to kittens array and returns new array:
function prependKitten(name){
  var newKitten = [name];
  return newKitten.concat(kittens);
}

// removeLastKitten - removes last kitten from kittens array and returns array:
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}

// removeFirstKitten - removes first kitten from kittens array & returns array:
function removeFirstKitten(){
  return kittens.slice(1);
}
