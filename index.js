const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(`${name}`)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(`${name}`)
}

function destructivelyRemoveLastKitten(){
return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var mkittens = [...kittens, `${name}`]
    return mkittens
}

function prependKitten(name){
  var mkittens = [`${name}`, ...kittens]
    return mkittens
}
function removeLastKitten(){
  var mkittens = kittens.slice(0, kittens.length - 1)
  return mkittens
}

function removeFirstKitten(){
  var mkittens = kittens.slice(1)
  return mkittens
}
