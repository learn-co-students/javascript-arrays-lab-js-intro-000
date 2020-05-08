var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  let newArr = kittens.slice();
  newArr.push(name);
  return newArr;
}

function prependKitten(name) {
  let newArr = kittens.slice();
  newArr.unshift(name);
  return newArr;
}

function removeLastKitten(name) {
  let newArr = kittens.slice();
  newArr.pop();
  return newArr;
}

function removeFirstKitten(name) {
  let newArr = kittens.slice();
  newArr.shift();
  return newArr;
}
