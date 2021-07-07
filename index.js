var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var kittens_edit = kittens.concat(name)
  return kittens_edit
}

function prependKitten(name){
  var kittens_edit = [name]
  kittens_edit = kittens_edit.concat(kittens)
  return kittens_edit
}

function removeLastKitten(){
  var kittens_edit = kittens.slice(0, -1)
  return kittens_edit
}

function removeFirstKitten(){
  var kittens_edit = kittens.slice(1)
  return kittens_edit
}
