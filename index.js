 var kittens = [ 'Milo', 'Otis', 'Garfield' ]
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
   kittens.push(name)
}

function appendKitten(name) {
  var newArray = kittens.concat(name);
  return newArray
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function prependKitten(name) {
  var newArray = [name, ...kittens]
  return newArray
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function removeLastKitten() {
  var newArray = kittens.slice(0, 2)
  return newArray
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function removeFirstKitten() {
  var newArray = kittens.slice(1)
  return newArray
}
