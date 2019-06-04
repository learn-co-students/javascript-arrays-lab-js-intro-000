var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push("Ralph");
}


function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens = kittens.slice(1);
  return kittens;
}

function appendKitten(name){
  return [...kittens, "Broom"];
}


function prependKitten(name){
  return ["Arnold", ...kittens];
}


function removeLastKitten(){
  kittens = kittens.slice(-1);
  kittens;
}
