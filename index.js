var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){

  return kittens.push(name)
}

function destructivelyPrependKitten(name){
return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){

   return kittens.splice(kittens.length-1,1)
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var array = [...kittens,name]
  return array
}
function prependKitten(name){
  var array = [name, ...kittens]
  return array
}
function removeLastKitten(){

  return kittens.slice(0,kittens.length - 1)
}

function removeFirstKitten(){
  var array = kittens.slice(1)
  return array
}
