const app = "I don't do much."

function destructivelyAppendKitten(string){
  kittens.push('Ralph');
}

function destructivelyPrependKitten(string){
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(string){
  var kittens = ["Milo", "Otis", "Garfield"];
  var newkittens = [...kittens, "Broom"];
  return newkittens;
}

function prependKitten(string){
  var kittens = ["Milo", "Otis", "Garfield"];
  var newkittens = ["Arnold", ...kittens];
  return newkittens;
}

function removeLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"];
  var newkittens = kittens.slice(0, kittens.length - 1)
  return newkittens;
}

function removeFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"];
  var newkittens = kittens.slice(1)
  return newkittens;
}
