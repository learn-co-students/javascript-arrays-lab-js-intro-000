var kittens =["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(animal){
  kittens.push(animal)
  return animal;
}
function destructivelyPrependKitten(animal){
  kittens.unshift(animal)
return animal;
}

function destructivelyRemoveLastKitten(animal){
  kittens.pop(animal)
return animal;
}

function destructivelyRemoveFirstKitten(animal){
  kittens.shift(animal)
return animal;
}

function appendKitten(animal){ //
  return [...kittens, animal]; // ["Milo", "Otis", "Garfield", "Broom"]
}

function prependKitten(animal){
  return [animal, ...kittens]

}

function removeLastKitten(animal){
    // you want to slice out the elements in the kittens array that you need. ["Milo", "Otis", "Garfield"] slice gives us a new array. kittens.slice(starting index, how many?)
    return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(animal){
  return kittens.slice(1, kittens.length);
}
