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


function destructivelyRemoveLastKitten(name){
  var n = kittens.length;
  kittens.slice(0, n-1)
}
