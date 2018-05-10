const app = "I don't do much."
kittens= ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var nk=kittens.slice(0)
  nk.push(name)
  return nk
}

function prependKitten(name){
  var nk=kittens.slice(0)
  nk.unshift(name)
  return nk
}

function removeLastKitten(){
  var nk=kittens.slice(0,kittens.length-1)
  return nk
}
function removeFirstKitten(){
  var nk=kittens.slice(1)
  return nk
}
