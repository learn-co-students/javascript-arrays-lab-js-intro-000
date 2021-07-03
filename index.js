var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  console.log(kittens.push(name))
}

function destructivelyPrependKitten(name) {
  console.log(kittens.unshift(name))
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  console.log(kittens)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  console.log(kittens)
}

function appendKitten(name) {
  // kittens.concat(name)
  //kittens.splice(3, 0, name)
  //console.log(kittens)
  var kittens2 = kittens.concat(name)
  return(kittens2)
}

//coulcn't get this to work
// function prependKitten(name) {
// var kittens3 = kittens.splice(0, 0, 'name')
//   return(kittens3)
// }

function prependKitten(name) {
  var moreKittens = [name, ...kittens]
  return(moreKittens)
}

function removeLastKitten() {
  var kittensLastRemoved = kittens.slice(0, -1)
  return(kittensLastRemoved)
}

function removeFirstKitten() {
  var kittensFirstRemoved = kittens.slice(1)
  return(kittensFirstRemoved)
}
