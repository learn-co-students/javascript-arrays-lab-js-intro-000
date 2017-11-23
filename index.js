const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  var n = kittens.length
  kittens = kittens.slice(0, n-1);
  return kittens
}

function destructivelyRemoveFirstKitten(){
  var n = kittens.length
  kittens = kittens.slice(1);
  return kittens
}

function appendKitten(name){
  var moreKittens = [...kittens, name];
  return moreKittens
}

function prependKitten(name){
  var moreKittens = [name, ...kittens];
  return moreKittens
}

function removeLastKitten(){
  var n = kittens.length
  var lessKittens = kittens.slice(0, n-1);
  return lessKittens
}

function removeFirstKitten(){
  var n = kittens.length
  var lessKittens = kittens.slice(1);
  return lessKittens
}
