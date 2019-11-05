var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
kittens.push(name);
return kittens
}

function destructivelyPrependKitten(name){
kittens.unshift(name);
return kittens
}
function destructivelyRemoveLastKitten(){
kittens.pop()
return kittens
}
function destructivelyRemoveFirstKitten(){
kittens.shift()
return kittens
}
function appendKitten(name){
var newRay = [...kittens,(name)]
return newRay
}
function prependKitten(name){
var kat = [(name),...kittens]
return kat
}
function removeLastKitten(){
var kit = kittens.slice(0, kittens.length-1)
return kit
}
function removeFirstKitten(){
var lip = kittens.slice(1)
return lip
}
