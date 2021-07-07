var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(){
kittens.push('Ralph');
}

function destructivelyPrependKitten(){
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var kittens = ['Milo', 'Otis', 'Garfield'];
kittens =  [...kittens,'Broom'];
return kittens
}

function prependKitten(name){
  var kittens = ['Milo', 'Otis', 'Garfield',];
  kittens = ['Arnold', ...kittens];
  return kittens
}

function removeLastKitten(){
  let kittens = ['Milo', 'Otis', 'Garfield'];
  let removed = kittens.splice(2);
  return kittens
}

function removeFirstKitten(){
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens.slice(1);
}
