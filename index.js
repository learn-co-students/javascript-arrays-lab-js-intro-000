// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  const moreKittens = [...kittens, name];
  return moreKittens
}

function prependKitten(name){
  const prependKittens = [name, ...kittens];
  return prependKittens
}

function removeLastKitten() {
  const removedLastKitten = kittens.slice(0,-1);
  return removedLastKitten
}

function removeFirstKitten() {
  const deadFirstKitten = kittens.slice(1);
  return deadFirstKitten
}
