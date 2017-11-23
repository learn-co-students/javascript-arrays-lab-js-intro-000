
var kittens = ['Milo', 'Garfield', 'Otis'];

function destructivelyAppendKitten(name){
kittens.push(name);
return kittens;
}
destructivelyAppendKitten('Nala');

var kittens = ['Milo', 'Garfield', 'Otis'];

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
destructivelyPrependKitten('Cowboy');

var kittens = ['Milo', 'Garfield', 'Otis'];

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}
destructivelyRemoveLastKitten('Otis');

var kittens = ['Milo', 'Garfield', 'Otis'];

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}
destructivelyRemoveFirstKitten('Milo');

var kittens = ['Milo', 'Garfield', 'Otis'];

function appendKitten(name){
var moreKittens = [...kittens, name];
return moreKittens;
}
appendKitten('Penny');

function prependKitten(name){
  var moreKittens = [name,... kittens];
  return moreKittens;
}
prependKitten('Cowboy');

function removeLastKitten(){
  var moreCats = kittens.slice(0,2);
  return moreCats;
}
removeLastKitten();

function removeFirstKitten(){
  var moreCats = kittens.slice(1);
  return moreCats;
}
removeFirstKitten();
