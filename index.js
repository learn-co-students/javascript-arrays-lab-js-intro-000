const app = "I don't do much."

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens
}

function destructivelyAppendKitten(name){
    kittens.push('Ralph')
}

function destructivelyPrependKitten(name){
    kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(){
  kittens.pop(2)
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(0)
}

function appendKitten(name){
  return [...kittens, 'Broom']
}

function prependKitten(name){
  return ['Arnold', ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0,2)
}
function removeFirstKitten(){
  return kittens.slice(-2)
}
