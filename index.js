var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var moreKittens = kittens.concat(name);
  return moreKittens;
}

function prependKitten(name){
  var lessKittens = [name, ...kittens];
  return lessKittens;
}

function removeLastKitten(){
  var lessKittens = kittens.slice(0, length - 1);
  return lessKittens;
}

function removeFirstKitten(){
  var lessKittens = kittens.slice(1);
  return lessKittens;
}
