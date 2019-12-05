var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

// Use .push to add name to end of kittens in function destructivelyAppendKitten()
function destructivelyAppendKitten(name) {
  var newAppendKittens = kittens.push(name);
  return newAppendKittens
}

// Use .shift to add name to beginning of kittens in function destructivelyPrependKitten()

kittens = ["Milo", "Otis", "Garfield"] // Redefine kittens
function destructivelyPrependKitten(name) {
var newPrependKittens = kittens.unshift(name);
return newPrependKittens
}

kittens = ["Milo", "Otis", "Garfield"] // Redefine kittens
function destructivelyRemoveLastKitten(name) {
var newRemoveLastKittens = kittens.pop(name);
return newRemoveLastKittens
}

// Use .shift to destructively remove kitten from front of list.

kittens = ["Milo", "Otis", "Garfield"] // Redefine kittens
function destructivelyRemoveFirstKitten(name) {
  var newRemoveFirstKittens = kittens.shift(name);
  return newRemoveFirstKittens
}

// Use .concat to add name to end of the list.

kittens = ["Milo", "Otis", "Garfield"] // Redefine kittens
function appendKitten(name) {
  var newKittens = kittens.concat(name);
  return newKittens
}

// Use .concat to add name to the end of the list kittens.

function prependKitten(name) {
  var newKittens = [name].concat(kittens);
  return newKittens
}

// Use .slice to remove the final name from the list kittens.

function removeLastKitten() {
  var newKittens = kittens.slice(0,kittens.length-1)
  return newKittens
}

// Use .slice to remove the first kitten from the kittens array.

function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens
}
