var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = (name) => {
  return kittens.push(name)
	}

var destructivelyPrependKitten = (name) => {
  return kittens.unshift(name)
}

var destructivelyRemoveLastKitten = (name) => {
  return kittens.pop(name)
}

var destructivelyRemoveFirstKitten = (name) => {
  return kittens.shift(name)
}

var appendKitten = (name) => {
  return [...kittens, name]
}
var prependKitten = (name) => {
  return [name, ...kittens]
}

var removeLastKitten = () => {
  return kittens.slice(0, kittens.length -1)
}

var removeFirstKitten = () => {
  return kittens.slice(1)
}
