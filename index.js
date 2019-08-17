var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
 kittens.push(name)
 }

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var newarray = kittens.concat(name)
    newarray.push()
  return newarray
}

function prependKitten(name) {
  var newarray = kittens.slice(name)
    newarray.unshift(name)
  return newarray
}


function removeLastKitten() {
  var newarray = kittens.concat()
    newarray.pop()
  return newarray
}

function removeFirstKitten() {
  var newarray = kittens.slice()
    newarray.shift()
  return newarray
}
