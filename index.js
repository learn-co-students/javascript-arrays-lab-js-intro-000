var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten (name) {
  // Alters original kittens
  kittens.push(name);
  return(kittens);
}

function destructivelyPrependKitten (name) {
  // Alters original kittens
  kittens.unshift(name);
  return(kittens);
}

function destructivelyRemoveLastKitten () {
  // Alters original kittens
  kittens.pop();
  return(kittens)
}
function destructivelyRemoveFirstKitten () {
  // Alters original kittens
  kittens.shift();
  return(kittens);
}

function appendKitten (name) {
  //Leaves original array unchanged
  return([...kittens, name]);
}

function prependKitten (name) {
  //Leaves original array unchanged
  return([name, ...kittens]);
}

function removeLastKitten () {
  //Leaves original array unchanged
  return(kittens.slice(0, kittens.length - 1));
}

function removeFirstKitten () {
  //Leaves original array unchanged
  return(kittens.slice(1));
}
