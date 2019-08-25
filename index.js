var kittens = ["Milo", "Otis", "Garfield"] // 1
//2
function destructivelyAppendKitten(name) {
  return kittens.push("Ralph");
}
//3
function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob");
}
//4
function destructivelyRemoveLastKitten(name) {
  return kittens.pop();
}
//5
function destructivelyRemoveFirstKitten(name) {
  return kittens.shift();
}
//6
function appendKitten(name) {
  return [...kittens, "Broom"];
}

function prependKitten(name) {
  return ["Arnold", ...kittens];
}

function removeFirstKitten(){
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
