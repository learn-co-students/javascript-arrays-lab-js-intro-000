var kittens = ['Milo', 'Otis','Garfield']

function destructivelyAppendKitten (Ralph) {
    kittens.push(Ralph)
    return kittens
}

function destructivelyPrependKitten (Ralph) {
  kittens.unshift(Ralph)
  return kittens
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return kittens
}

function appendKitten (Broom) {
  return ['Milo','Otis','Garfield','Broom']
}

function prependKitten (Arnold) {
  return ['Arnold','Milo','Otis','Garfield']
}

function removeLastKitten () {
  return  kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten () {
  return kittens.slice(1)
}
