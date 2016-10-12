const app = "I don't do much."

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
return name;
}

function destructivelyPrependKitten(name){
kittens.unshift("Bob");
return name;
}

function destructivelyRemoveLastKitten() {
kittens.pop();
return kittens;
}

function destructivelyRemoveFirstKitten() {
kittens.shift();
return kittens;
}

function appendKitten(name){
return [...kittens, "Broom"];
}

function prependKitten(name){
return ["Arnold", ...kittens];
}

function removeLastKitten() {
return kittens.slice(0, 2);
}

function removeFirstKitten() {
return kittens.slice(-2);
}
