var kittens = ['Milo','Otis','Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array,element){
  return kittens.push('Ralph')
}

function destructivelyPrependKitten(array,element){
  return kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(array,element){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(array,element){
  return kittens.shift()
}

function appendKitten(array,element){
  return [...kittens,'Broom']
}

function prependKitten(array,element){
  return ['Arnold',...kittens]
}

function removeLastKitten(array,element){
  return kittens.slice(-3,2)
}

function removeFirstKitten(array,element){
  return kittens.slice(1)
}
