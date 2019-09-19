var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  var kitties = kittens;
  kitties.pop();
  return kitties;
}

function destructivelyRemoveFirstKitten(){
  var kitties = kittens;
  kitties.shift();
  return kitties;
}

function appendKitten(name){
  var kitties = kittens;
  kitties = [...kitties, name];
  return kitties;
}

function prependKitten(name){
  var kitties = kittens;
  kitties = [name, ...kitties];
  return kitties;
}

function removeLastKitten(){
  return kittens.slice(0,-1);
}

function removeFirstKitten(){
  return kittens.slice(1);

}
