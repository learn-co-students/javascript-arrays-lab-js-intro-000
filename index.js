const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

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

  return kittens.shift();
}

function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name);
  return newArray;
}

function prependKitten(name){
var newArray = kittens.slice();
newArray.unshift(name);
return newArray;

}

function removeLastKitten(){

var newArray= kittens.slice(0, kittens.length - 1);
return newArray;

}

function removeFirstKitten(){

return kittens.slice(1);
}
