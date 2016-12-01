var kittens = [ "Milo", "Otis", "Garfield" ]

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
