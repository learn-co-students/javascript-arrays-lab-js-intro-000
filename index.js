var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
//Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
function destructivelyAppendKitten(name){
  kittens.push(name);
}
//Arrays destructivelyPrependKitten(name) prepends a kitten to the beginning of the kittens array:
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
//Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}
//Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}
//Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function appendKitten(name){
  var addKitten = [...kittens, name]
  return addKitten;
}
//Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function prependKitten(name){
  var reKitten = [name, ... kittens];
  return reKitten;
}
//Arrays removeLastKitten() removes the last kitten in the kittens array and returns a new array,
// leaving the kittens array unchanged:
function removeLastKitten() {
return kittens.slice(0,kittens.length-1)
}
//Arrays removeFirstKitten() removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged:
function removeFirstKitten() {
  return kittens.slice(1)

}
