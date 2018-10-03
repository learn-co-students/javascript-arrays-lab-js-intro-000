// Add your functions and code here
var kittens = [
  'Milo',
  'Otis',
  'Garfield'
];

var Arrays = [
  'Milo',
  'Otis',
  'Garfield'
];

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
  var kittensAppended=[...kittens, name];
  return kittensAppended;
}

function prependKitten(name){
  var kittensPrepended=[name, ...kittens];
  return kittensPrepended;
}

function removeLastKitten(){
  var kittensLastRemoved = kittens.slice(0, kittens.length-1);
  return kittensLastRemoved;
}

function removeFirstKitten(){
  var kittensFirstRemoved = kittens.slice(1, kittens.length+1);
  return kittensFirstRemoved;
}
