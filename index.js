/*
2) Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
     ReferenceError: destructivelyAppendKitten is not defined
      at Context.<anonymous> (test/index-test.js:11:7)
  3) Arrays destructivelyPrependKitten(name) prepends a kitten to the beginning of the kittens array:
     ReferenceError: destructivelyPrependKitten is not defined
      at Context.<anonymous> (test/index-test.js:19:7)
  4) Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
     ReferenceError: destructivelyRemoveLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:28:7)
  5) Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
     ReferenceError: destructivelyRemoveFirstKitten is not defined
      at Context.<anonymous> (test/index-test.js:37:7)
  6) Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kitten
     ReferenceError: appendKitten is not defined
      at Context.<anonymous> (test/index-test.js:46:7)
  7) Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kitt
     ReferenceError: prependKitten is not defined
      at Context.<anonymous> (test/index-test.js:55:7)
  8) Arrays removeLastKitten() removes the last kitten in the kittens array and returns a new array, leaving the
:
     ReferenceError: removeLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:64:7)
  9) Arrays removeFirstKitten() removes the first kitten from the kittens array and returns a new array, leaving
nged:
     ReferenceError: removeFirstKitten is not defined
      at Context.<anonymous> (test/index-test.js:73:7)
*/

var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(cat4){
  kittens.push(cat4)
  return kittens;
}//2

function destructivelyPrependKitten(cat4){
  kittens.unshift(cat4)
  return kittens;
}//3

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens;
}//4

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens;
}//5

function appendKitten(cat4){
  var kittens2 = [...kittens, cat4]
  return kittens2;
}//6

function prependKitten(cat4){
  var kittens2 = [cat4, ...kittens]
  return kittens2;
}//7

function removeLastKitten(){
  var kittens2 = kittens.slice(0,-1)
  return kittens2;
}

function removeFirstKitten(){
  var kittens2 = kittens.slice(1)
  return kittens2;
}
