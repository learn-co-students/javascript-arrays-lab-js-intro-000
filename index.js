const app = "I don't do much."
var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyAppendKitten(name){
  var n = name
  return kittens.push(n)
}

function destructivelyPrependKitten(name){
  var n = name
  return kittens.unshift(n)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var n = name
  var kittenz = [...kittens, n]
  return kittenz
}

function prependKitten(name){
  var n = name
  var kittenz = [n,...kittens]
  return kittenz
}

function removeLastKitten(){
  var kittenz = kittens.slice(0,-1)
  return kittenz
}

function removeFirstKitten(){
  var kittenz = kittens.slice(1, kittens.length)
  return kittenz
}
