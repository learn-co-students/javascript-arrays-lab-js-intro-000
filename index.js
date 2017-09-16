const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten() {
  var newKittens = [name, ...kittens]
  return newKittens
}
