var kittens = [] //define your array here
kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here

function destructivelyAppendKitten(name){
   return kittens = kittens.concat(name)

}

function destructivelyPrependKitten(name){
  var temp = [].concat(name)
  return kittens = temp.concat(kittens)
}

function destructivelyRemoveLastKitten(){
  return kittens = kittens.slice(0,kittens.length-1)
}

function destructivelyRemoveFirstKitten(){
  return kittens = kittens.slice(1,kittens.length)
}

function appendKitten(name){
  return kittens.concat(name)
}

function prependKitten(name){
  var temp = [].concat(name)
  return temp.concat(kittens)
}

function removeLastKitten(){
  return  kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
  return  kittens.slice(1,kittens.length)
}
