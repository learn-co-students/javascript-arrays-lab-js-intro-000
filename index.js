var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {

  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {

  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {

  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name) {

  kittens.shift(name)
  return kittens
}

function appendKitten(name) {

  var kit=new Array()
  for (var i = 0; i<kittens.length; i++) {
    kit.push(kittens[i])
  }
  kit.push(name)
  return kit
}

function prependKitten(name) {

  var kit=new Array()
  for (var i = 0; i<kittens.length; i++) {
    kit.push(kittens[i])
  }
  kit.unshift(name)
  return kit
}

function removeLastKitten() {

  var kit=kittens.slice(0,kittens.length-1)
  return kit
}

function removeFirstKitten() {

  var kit=kittens.slice(1)
  return kit
}
