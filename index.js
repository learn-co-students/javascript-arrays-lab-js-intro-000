const app = "I don't do much."

var kittens=["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(){
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(){
  var newName=[...kittens,"Broom"];
  return newName;

}

function prependKitten(){
  var newName=["Arnold",...kittens];
  return newName;
}

function removeLastKitten(){
  var newName = kittens.slice(0,2);
  return newName;
}

function removeFirstKitten(){
  var newName = kittens.slice(1);
  return newName;
}
