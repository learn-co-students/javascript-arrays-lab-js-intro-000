const app = "I don't do much."

function kittens() {
    let kittens = ['Milo', 'Otis', 'Garfield']
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}


function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}


function destructivelyRemoveLastKitten() {
  kittens.pop()
}


function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  let newArray = ['Milo', 'Otis', 'Garfield']
  newArray.push(name)
  return newArray
}

function prependKitten(name) {
  let otherArray = ['Milo', 'Otis', 'Garfield']
  otherArray.unshift(name)
  return otherArray
}


function removeLastKitten() {
  let otherArray = ['Milo', 'Otis', 'Garfield']
  otherArray.pop()
  return otherArray
}


function removeFirstKitten() {
  let otherArray = ['Milo', 'Otis', 'Garfield']
  otherArray.shift()
  return otherArray
}
