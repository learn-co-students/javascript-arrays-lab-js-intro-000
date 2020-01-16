var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(){
  kittens.push('Ralph');
  return kittens}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens

}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
  }

  function appendKitten(Broom){
  return [...kittens, Broom]
}
function prependKitten(Broom){
  return [Broom,...kittens]
}

function removeLastKitten(name){
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray
}

function removeFirstKitten(name){
  var newArray = kittens.slice(1);
  return newArray
}
