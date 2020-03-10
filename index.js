// 1) Arrays kittens defines kittens
var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// 2. appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

// 3. prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

// 4. removes the last kitten from the kittens array
function destructivelyRemoveLastKitten() {
  kittens.pop(name)
}

// 5. Arrays removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

// 6. Arrays appends a kitten to the kittens array and returns a new array,
// leaving the kittens array unchanged
function appendKitten(name) {
  return [...kittens, name]
}

// 7. Arrays prepends a kitten to the kittens array and returns a new array,
// leaving the kittens array unchanged
 function prependKitten(name) {
   return [name, ...kittens]
 }

 // 8. Arrays removes the last kitten in the kittens array and returns a new
 // array, leaving the kittens array unchanged
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

// 9. Arrays removes the first kitten from the kittens array and returns
// a new array, leaving the kittens array unchanged
function removeFirstKitten() {
  return kittens.slice(1, kittens.length)
}
