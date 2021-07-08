var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
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
  var newKitty = [...kittens, name]
  return newKitty;
}

function prependKitten(name){
  var newKitty = [name, ...kittens]
  return newKitty;
}

function removeLastKitten(){
  var newKitty = [...kittens];
  newKitty.pop();
  return newKitty;
}

function removeFirstKitten(){
  var newKitty = [...kittens];
  newKitty.shift();
  return newKitty;
}
