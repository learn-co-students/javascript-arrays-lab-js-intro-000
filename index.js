var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here
var Ruby = ['ruby']
// Add your functions and code here
function destructivelyAppendKitten(Hagrid){
  kittens.push(Hagrid);
  return kittens
}

function destructivelyPrependKitten(Draco){
  kittens.unshift(Draco)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return
}

function appendKitten(Ruby){
 return [...kittens, Ruby]
}


function prependKitten(Ruby){
  return [Ruby, ...kittens]
}


function removeLastKitten(){
    return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
    return kittens.slice(1)
}
