function destructivelyAppendKitten (name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
   return [...kittens, name];
   return kittens
}

function prependKitten(name){
  return [name, ...kittens];
  return kittens
}

function removeLastKitten(){
  var array = kittens.slice(0, kittens.length -1)
  return array
}

function removeFirstKitten(){
  var array = kittens.slice(1)
  return array
}
