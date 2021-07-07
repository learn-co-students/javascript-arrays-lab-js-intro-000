
var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){

  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){

  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()

}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var newkitten = [...kittens]
  newkitten.push(name);
  return newkitten;
}

function prependKitten(name){
  var newkitten = [...kittens]
  newkitten.unshift(name);
  return newkitten;
}

function removeLastKitten(name){
  var newkitten = [...kittens]
  newkitten.pop(name);
  return newkitten;
}

function removeFirstKitten(name){
  var newkitten = [...kittens]
  newkitten.shift(name);
  return newkitten;
}
