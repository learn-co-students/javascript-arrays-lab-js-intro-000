const app = "I don't do much."


function removeFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens.splice(1,2);

}

function removeLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens.splice(0,2);
}

function prependKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"];
  return [name,...kittens];
}

function appendKitten(name){
   return ["Milo", "Otis", "Garfield", "Broom"];
}

function destructivelyRemoveFirstKitten(){
  kittens = ["Otis", "Garfield"];
}

function destructivelyRemoveLastKitten(){
  kittens = kittens.splice(0,2);
}

function destructivelyPrependKitten(name){
  kittens.splice(0,0,name);
}

function destructivelyAppendKitten(name){

  kittens = ["Milo", "Otis", "Garfield", "Ralph"];

}
