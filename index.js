var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}
function appendKitten(name) {
  var newKit = kittens.concat(name);
  return newKit;
}
function prependKitten(name) {
  var newKit = [name];
  return newKit.concat(kittens);
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length-1);
}
function removeFirstKitten() {
  return kittens.slice(1,kittens.length);
}
