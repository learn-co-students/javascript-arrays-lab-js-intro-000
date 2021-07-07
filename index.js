var kittens = ['Milo','Otis','Garfield']

function destructivelyAppendKitten (kitten) {
  return kittens.push(kitten)
}

function destructivelyPrependKitten (kitten) {
  return kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten () {
  return kittens.shift()
}

function appendKitten (name) {
  var newArray = [...kittens];
  newArray.push(name);
  return newArray
}

function prependKitten (name) {
  var newArray = [...kittens];
  newArray.unshift(name);
  return newArray
}

function removeLastKitten () {
  var newArray = [...kittens];
  newArray.pop();
  return newArray
}
function removeFirstKitten () {
  var newArray = [...kittens];
  newArray.shift();
  return newArray
}
