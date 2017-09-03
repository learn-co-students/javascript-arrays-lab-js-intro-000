var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(another_kitten) {
  kittens.push(another_kitten);
  return kittens;
}
function destructivelyPrependKitten(another_kitten) {
  kittens.unshift(another_kitten);
  return kittens;
}
function destructivelyRemoveLastKitten(another_kitten) {
  kittens.pop(another_kitten);
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(another_kitten){
  var newKittens = [...kittens, another_kitten];
  return newKittens;

}
function prependKitten(another_kitten){
  var newKittens = [another_kitten, ...kittens];
  return newKittens;
}
function removeLastKitten() {
  var newKittens = kittens.slice(0,-1);
  return newKittens;
}
function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}
