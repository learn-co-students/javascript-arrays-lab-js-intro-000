const app = "I don't do much."
var kittens =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(){
kittens.pop();
return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}

function appendKitten(name){
var newArr = kittens.slice();
newArr.push(name);
return newArr;
}

function prependKitten(name){
var newArr = kittens.slice();
newArr.unshift(name);
return newArr;
}

function removeLastKitten(name){
var newArr = kittens.slice();
newArr.pop();
return newArr;
}

function removeFirstKitten(name){
var newArr = kittens.slice();
newArr.shift();
return newArr;
}
