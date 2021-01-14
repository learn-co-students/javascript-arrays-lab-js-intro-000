var kittens = ["Milo", "Otis", "Garfield"];
kittens2 = ['Broom']

function destructivelyAppendKitten(name) {
  // kittens.push('Ralph')
  console.log(kittens.push('Ralph'))
}

function destructivelyPrependKitten(name) {
  //kittens.unshift('Bob')
  console.log(kittens.unshift('Bob'))
}

function destructivelyRemoveLastKitten(name) {
  //kittens.pop()
  console.log(kittens.pop())
}

function destructivelyRemoveFirstKitten(name) {
  //kittens.shift()
  console.log(kittens.shift())
}

function appendKitten(name) {
  //kittens.concat('Broom')
  return (kittens.concat(name))
}

function prependKitten(name) {
  //kittens.slice('Arnold')
  return (kittens.slice(name).reverse().concat(name)).reverse()
}

function removeLastKitten(name) {
  //kittens.slice()
  return (kittens.slice(0, kittens.length -1))
}

function removeFirstKitten(name) {
  //kittens.slice()
  return (kittens.slice(1))
}
