const app = "I don't do much."

var destructivelyAppendKitten = name => {

  kittens.push(name)
}

var destructivelyPrependKitten = name => {

  kittens.unshift(name)
}

var destructivelyRemoveLastKitten = name => {

  kittens.pop(name)
}

var destructivelyRemoveFirstKitten = name => {

  kittens.shift(name)
}

var appendKitten = name => {

  return [...kittens, name]
}

var prependKitten = name => {

  return [name, ...kittens]
}

var removeLastKitten = name => {

  return kittens.slice(0, kittens.length - 1)

}

var removeFirstKitten = name => {

  return kittens.slice(1)
}
