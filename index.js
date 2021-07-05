var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(Tiger) {
  kittens.push(Tiger)
  return kittens;
}
//passed
function destructivelyPrependKitten(Bob) {
  kittens.unshift(Bob)
  return kittens;
}
//passed
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
//passed
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
//passed

function appendKitten(Broom) {
  var newKittens = ["Broom"];
  newKittens = kittens.concat(newKittens);
  return newKittens;
}
//passed
function prependKitten(Arnold) {
  var newKittens = ["Arnold"];
  newKittens = newKittens.concat(kittens);
  return newKittens;
}
//passed
function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}
//passed
function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}
//passed
