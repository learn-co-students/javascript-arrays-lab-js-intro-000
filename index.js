var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

var destructivelyAppendKitten = (name) => {
  kittens.push(name)

  return kittens
}

var destructivelyPrependKitten = (name) => {
  kittens.unshift(name)

  return kittens
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop(1)

  return kittens
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift()

  return kittens
}

var appendKitten = (name) => {
  var newArray = [...kittens, name]

  return newArray
}

var prependKitten = (name) => {
  var newArray = [name, ...kittens]

  return newArray
}

var removeLastKitten = () => {
  var newArray = kittens.slice(0, kittens.length - 1)

  return newArray
}

var removeFirstKitten = () => {
  var newArray = kittens.slice(1, kittens.length)

  return newArray
}
