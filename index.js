var kittens = ['Milo','Otis','Garfield'];//define your array here

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}
// Add your functions and code here
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}
//var kittens = ['Milo','Otis','Garfield'];

function appendKitten(name){
  let newArr = kittens.slice();
  newArr.push(name);
  return newArr
}

function prependKitten(name){
  var newPre = [kittens...];
  newPre.push(name)
}
