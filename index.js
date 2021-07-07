var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
 kittens.push(name)
 return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten (){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten (){
  kittens.shift()
  return kittens
}

function appendKitten(name){
let newKitty = [...kittens]
newKitty.push(name)
return newKitty
}


function prependKitten(name){
  let newKitty = [...kittens]
  newKitty.unshift(name)
  return newKitty
}

function removeLastKitten(){
let newKitty = [...kittens]
newKitty.pop()
return newKitty
}

function removeFirstKitten(){
  let newKitty = [...kittens]
  newKitty.shift()
  return newKitty
}
