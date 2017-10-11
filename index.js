// const app = "I don't do much."

// function Arrays(){
//   function beforeEach(){
//       window.kittens = ['Milo', 'Otis', 'Garfield'];
//   }
// }

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)  // "push" method adds element to end altering original array
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)  // "unshift" method adds element to beginning altering original array
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()  // "pop" method removes last element altering original array
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()  // "shift" method removes first element altering original array
  return kittens
}

function appendKitten(name){
  return [...kittens, name]  // spread operator "..." appends to end (if argument is last) of array without altering original array
  // if we end function with "return kittens", it will return original array and not the temporarily appended version
}

function prependKitten(name){
  return [name, ...kittens]  // spread operator "..." prepends to beginning (if argument is first) of array without altering original array
  // if we end function with "return kittens", it will return original array and not the temporarily prepended version
}

function removeLastKitten(){
  var cats = kittens.slice(0, kittens.length - 1)  // "slice" method removes last element without altering original array
  // Note: The first argument is index that you want to include in the new array. Then we want to shortened the length of array by 1.
  return cats  // return new array
}

function removeFirstKitten(){
  var cats = kittens.slice(1)  // "slice" method removes first element without altering original array
  // Note: Argument after the slice method is index you want to include in the new array. It automatically includes all elements that follow.
  return cats  // return new array
}
