const app = "I don't do much."

var destructivelyAppendKitten = (name) => {
  kittens.push(name)
}

var destructivelyPrependKitten = (name) => {
  kittens.unshift(name)
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop()
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift()
}

var appendKitten = (name) => {
  return [...kittens,name]
}

var prependKitten = (name) => {
  return [name,...kittens]
}

var removeLastKitten = () => {
  var newKittens = kittens.slice(0,kittens.length-1)
  return newKittens
}

var removeFirstKitten = () => {
  var newKittens = kittens.slice(1)
  return newKittens
}
