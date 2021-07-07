var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph){
  kittens.push("Ralph")
}

function destructivelyPrependKitten(Bob){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(name){
  kittens.pop("name")
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift("name")
}

function appendKitten(Broom) {
  return [...kittens, Broom]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(Garfield){
 return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(Milo){
  return kittens.slice(1);
}
