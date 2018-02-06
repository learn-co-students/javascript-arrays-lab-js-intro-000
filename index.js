function destructivelyAppendKitten(name){
  kittens = ['Milo', 'Otis', 'Garfield', 'Ralph']
  kittens.push()
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(){
  kittens = ['Milo', 'Otis', 'Garfield']
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens = ['Milo', 'Otis', 'Garfield']
  kittens.shift()
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
    return [name, ...kittens]
}

function removeLastKitten(){
  var kittensAndCats = [...kittens]
  kittensAndCats.pop()
  return [...kittensAndCats]
}

function removeFirstKitten(){
  var kittensAndAnimals = [...kittens]
  kittensAndAnimals.shift()
  return [...kittensAndAnimals]
}
