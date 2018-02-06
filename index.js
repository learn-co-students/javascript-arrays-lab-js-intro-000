const app = "I don't do much."

window.kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  var kittens = [window.kittens + window.kittens.push(name)]
    return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(name){
  var kittens = [window.kittens + window.kittens.unshift(name)]
    return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveLastKitten(name){
  var kittens = [window.kittens + window.kittens.pop(name)]
    return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveFirstKitten(name){
  var kittens = [window.kittens + window.kittens.shift(name)]
    return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield'];

function appendKitten(name){
  var kittens = [...window.kittens, name]
    return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield'];

function prependKitten(name){
  var kittens = [name, ...window.kittens]
    return kittens
}

var kittens = ['Milo', 'Otis', 'Garfield'];

function removeLastKitten(name){
  return kittens.slice(0, kittens.length- 1)

}

var kittens = ['Milo', 'Otis', 'Garfield'];

function removeFirstKitten(name){
    return kittens.slice(1)
}
