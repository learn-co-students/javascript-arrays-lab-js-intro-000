const kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}

function appendKitten(name) {
  var one = [...kittens, name];
  return one
}

function prependKitten(name) {
  var two = [name, ...kittens];
  return two
}

function removeLastKitten() {
  var three = kittens.slice(0, kittens.length - 1);
  return three
}

function removeFirstKitten() {
  var four = kittens.slice(-2);
  return four
}
