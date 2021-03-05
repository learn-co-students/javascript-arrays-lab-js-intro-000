var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name) {
  return kittens.push(name);
};

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name);
}
function appendKitten(name){
  var newArray = [...kittens, name];
  return newArray;
}
function prependKitten(name){
  let newArray = [name, ...kittens];
  return newArray;
}
function removeLastKitten(name){
  let newArray = kittens.slice(0, kittens.length - 1);
  return newArray;
}
function removeFirstKitten(name) {
  return kittens.slice(1);

}
