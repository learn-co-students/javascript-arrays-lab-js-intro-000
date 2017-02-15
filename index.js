const app = "I don't do much."

function destructivelyAppendKitten(name){
    kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  window.kittens = ['Milo','Otis','Garfield'];
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  window.kittens = ['Milo','Otis','Garfield'];
  kittens.shift()
}

function appendKitten(name){
  return  [...kittens,name]
}

function prependKitten(name){
  return (name,...kittens)
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1);
}
