
var kittens = ["Milo", "Otis", "Garfield"]
//Append means add.
// we call array be there name
//destructvly ..... alway mutate the array and returns it
// all other varibles without destructive element just return

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens  // for all of this, you dont have to put this part of the code.
}

function destructivelyAppendKitten(name){
   kittens.push(name) // add to the end of the a and retuning the new array
   return kittens // for all of this, you dont have to put this part of the code.
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens// for all of this, you dont have to put this part of the code.
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens // for all of this, you dont have to put this part of the code.
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(name){
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten(name){
return kittens.slice(1)
}
