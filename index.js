const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
name=kittens
 name.push("Ralph")
return(name)
}
function destructivelyPrependKitten(name){
name=kittens
 name.unshift("Bob")
return(name)
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
return [...kittens,name]
}
function prependKitten(name){
  return [name,...kittens]
}
function removeLastKitten(){
var name=kittens.slice(0,kittens.length-1)
return name
}
function removeFirstKitten(){
var name=kittens.slice(1)
return name
}
