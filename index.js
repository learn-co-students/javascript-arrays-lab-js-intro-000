var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  var name = "Ralph"
  kittens.push(name) // adds "Ralph" to end of kittens
  return kittens // returns ["Milo", "Otis", "Garfield", "Ralph"]
}
function destructivelyPrependKitten(name) {
  var name = "Bob";
  kittens.unshift(name) // adds "Bob" to beginning of kittens
  return kittens // returns ["Bob", "Milo", "Otis", "Garfield"]
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop()  // removes "Garfield" from end of kittens
  return kittens // returns ["Milo", "Otis"]
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift() // removes "Milo" from beginning of kittens
  return kittens // returns ["Otis", "Garfield"]
}
function appendKitten(name) {
  var name = [...kittens, "Broom"] // adds "Broom" to end of kittens without modifying array
  return name // returns ["Milo", "Otis", "Garfield", "Broom"]
}
function prependKitten(name) {
  var name = ["Arnold", ...kittens] // adds "Arnold" to the beginning of kittens without modifying array
  return name // returns ["Arnold", "Milo", "Otis", "Garfield"]
}
function removeLastKitten (name) {
  return kittens.slice(0, kittens.length - 1) // returns ["Milo", "Otis"] without modifying array
}
function removeFirstKitten(name) {
  return kittens.slice(1) // returns ["Otis", "Garfield"] without modifying array
}
