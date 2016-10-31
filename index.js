const app = "I don't do much."

/*describe('Arrays', function() {
  beforeEach(function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
  });
  */


/*

function removeLastKitten(name){
  kittens = ["Milo", "Otis", "Garfield"];
  var kats = kittens.slice(0, kittens.length-1);
  return kats;
}


/*
Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
*/

function destructivelyAppendKitten(name){
return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var kats = [...kittens, name];
  return kats;
}

function prependKitten(name){
  var kats = [name, ...kittens];
  return kats;
}

function removeLastKitten(){
  var kat= kittens.slice(0,kittens.length-1);
  return kat;
}

function removeFirstKitten(){
  var kats = kittens.slice(1);
  return kats;
}
