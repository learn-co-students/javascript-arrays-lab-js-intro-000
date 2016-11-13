const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function  destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  return kittens.concat([name])
}

function prependKitten(name){
  return [name].concat(kittens)
}

function removeLastKitten(){
  var tmp=kittens.pop()
  var rs = kittens.concat()
  kittens.push(tmp)
  return rs
}
function removeFirstKitten(){
  var tmp=kittens.shift()
  var rs = kittens.concat()
  kittens.unshift(tmp)
  return rs
  return
}
