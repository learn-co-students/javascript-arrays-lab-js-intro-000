var kittens = ["Milo", "Otis", "Garfield"] //define your array here
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
  return [...kittens, name] //this method doesn't manipulate the array and you can still return the original array
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)   //using the slice method we can create a new array without changing the original.
                                                        //this method can slice out any part of the array without mutating the original.
}

function removeFirstKitten() {
  return kittens.slice(1)    //using the slice method we can create a new array without changing the original.

}
