var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
   return kittens.push(name);

}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  return kittens.splice(kittens.length - 1, 1);
}

function  destructivelyRemoveFirstKitten(name) {
  return kittens.splice(0, 1);
}

function appendKitten(name){
  var newArray = [...kittens, name];
  return newArray;
}

function  prependKitten(name) {
  var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten() {
  return kittens.slice(1, kittens.length);
}
