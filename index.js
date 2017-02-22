const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
  return(kittens)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return(kittens)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return(kittens)
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return(kittens)
}
function appendKitten(name){
  let kittensCopy = kittens.slice()
  kittensCopy.push(name)
  return(kittensCopy)
}
function prependKitten(name){
  let kittensCopy = kittens.slice()
  kittensCopy.unshift(name)
  return(kittensCopy)
}
function removeLastKitten(){
  let kittensCopy = kittens.slice()
  kittensCopy.pop()
  return(kittensCopy)
}
function removeFirstKitten(){
  let kittensCopy = kittens.slice()
  kittensCopy.shift()
  return(kittensCopy)
}
