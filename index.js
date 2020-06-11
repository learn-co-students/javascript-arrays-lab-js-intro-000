var kittens = ["Milo", "Otis", "Garfield"] //define your array here
// Add your functions and code here

function destructivelyAppendKitten(name) {
  var name = 'Ralph';
  kittens.push(name)

  return kittens
}

function destructivelyPrependKitten(name) {
  var name = 'Bob'
  kittens.unshift(name)

  return kittens
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var newArray;                   //this is the new array with 'broom' added to the end
  newArray = [...kittens, 'Broom'] //this method doesn't manipulate the array and you can still return the original array

  return newArray
}

function prependKitten(name) {
  var newArray;
  newArray = ['Arnold', ...kittens]

  return newArray
}

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1)   //using the slice method we can create a new array without changing the original.
                                                        //this method can slice out any part of the array without mutating the original.
  return newArray
}

function removeFirstKitten() {
  var newArray = kittens.slice(1)    //using the slice method we can create a new array without changing the original.

  return newArray
}
