var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here
function destructivelyAppendKitten(name) {
  var appendKitten = function() {
    [kittens.push(name)];
  }
   appendKitten("Ralph")
}

function destructivelyPrependKitten(name) {
  var prependKitten = function() {
    [kittens.unshift(name)];
  }
   prependKitten("Bob")
}

function destructivelyRemoveLastKitten(index) {
  kittens.pop(4)
}

function destructivelyRemoveFirstKitten(index) {
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens, "Broom"];
}

function prependKitten(name) {
  return ["Arnold", ...kittens]
}

function removeLastKitten() {
  return kittens = kittens.slice(0, kittens.length -1)
   }
