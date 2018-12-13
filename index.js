var kittens = ['Milo', 'Otis','Garfield']
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(ralph){
  kittens.push(ralph)
}

function destructivelyPrependKitten(ralph){
  kittens.unshift(ralph)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(Broom){
 return [...kittens, Broom]
}

function prependKitten(Broom){
  return [Broom, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
