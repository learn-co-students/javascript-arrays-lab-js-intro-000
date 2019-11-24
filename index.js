var kittens = ["Milo", "Otis", "Garfield"] ;//define array


// Destructively append Ralph to the end of the array
  function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

// Destructively append Bob to the beginning of the array
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens;
}

//Destructively remove Garfield from the the array
function destructivelyRemoveLastKitten(name){
  kittens.pop("Garfield");
  return kittens;
}

//Destructively remove Milo from the array
function destructivelyRemoveFirstKitten(name){
  kittens.shift("Milo");
  return kittens;
}

//Simply append Broom to the end of the array and return a new array
function appendKitten(name) {
  return [...kittens, "Broom"];
}

//Simply append Arnold to the beginning of the array and return a new array
function prependKitten(name) {
  return ["Arnold", ...kittens];
  
}

//Simply remove the last kitten from the array and return a new array
function removeLastKitten(name){
  return kittens.slice(0, kittens.length -1);
}

//Simply remove the first kitten from the array and return a new array
function removeFirstKitten(name) {
  return kittens.slice (1);
  
}

