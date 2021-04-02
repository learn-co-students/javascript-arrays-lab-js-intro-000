var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(nameOfNewKitten) {
  return kittens.push(nameOfNewKitten);
}

function destructivelyPrependKitten(nameOfNewKitten) {
  return kittens.unshift(nameOfNewKitten);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(nameOfNewKitten) {
  return kittens.concat(nameOfNewKitten);
}

/* function appendKitten(nameOfNewKitten) {
  return [...kittens, nameOfNewKitten];
}
*/

function prependKitten(nameOfNewKitten) {
  return [nameOfNewKitten, ...kittens];
}

var removeLastKitten = () => {
  return kittens.slice(0, kittens.length-1);
}

var removeFirstKitten = () => {
  return kittens.slice(1);
}

// console.log(prependKitten('Samantha'));
// console.log(appendKitten('Neko'));
