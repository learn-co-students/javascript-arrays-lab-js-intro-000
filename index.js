const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(`${name}`)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()

}

function destructivelyPrependKitten(name) {
  kittens.unshift(`${name}`)

}

function destructivelyRemoveFirstKitten() {
  kittens.shift()

}

function appendKitten(name) {
  var newArray = [...kittens, `${name}`];
  return (newArray)

}

function prependKitten(name) {
  var newArray = [`${name}`, ...kittens];
  return (newArray)
}

function removeLastKitten() {
  console.log(kittens);
  var newArray = kittens.slice(0,2);
  console.log(kittens);
  console.log(newArray);
  return (newArray)
}

function removeFirstKitten() {
  var newArray = kittens.slice(1,3);
  return (newArray)
}
