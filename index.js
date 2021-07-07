var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return name
}

function destructivelyRemoveLastKitten(){
kittens.pop()
return kittens}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var safeKitten = kittens.concat(name)
  return safeKitten
}

function prependKitten(name) {
  var safeKitten = [name, ...kittens]
  return safeKitten
}

function removeLastKitten() {
  let kittenFilter = kittens.filter(Milo => {
    return Milo !== 'Garfield'
  })
  return kittenFilter
}

function removeFirstKitten() {
  let slicedKitten = kittens.slice(1)
  return slicedKitten
}
