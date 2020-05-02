var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

//Appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

//Prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

//Removes the last kitten from the kittens array
function destructivelyRemoveLastKitten() {
  kittens.pop();
}

//Removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

//Appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

//Prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name) {
  var newKittens = [name, ...kittens]
  return newKittens
}

//Removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray
  //return kittens
}

// Removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten() {
  var newArray = kittens.slice(1)
  return newArray

}
