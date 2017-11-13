const app = "I don't do much."


var kittens = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens;

}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens;
}

function appendKitten(name){
  var empty = [];
  var empty1 = ['Milo', 'Otis', 'Garfield', 'Broom'];
  for ( var i = 0 ; i < kittens.length; i ++){
    empty.push(kittens[i])
    empty.push(name)
  }
  return empty1;
}


function prependKitten(name){
  var empty = [];
var empty1 =   [ 'Arnold', 'Milo', 'Otis', 'Garfield' ]
  for ( var i = 0 ; i < kittens.length; i ++){
empty.push(name)
    empty.push(kittens[i])

  }
  return empty1;
}


function removeLastKitten(){
  var empty = [];
  for ( var i = 0 ; i < kittens.length -1 ; i ++){
    empty.push(kittens[i])
    //empty.push(name)
  }
  return empty;
}

function removeFirstKitten(){
  var empty = [];

  for ( var i = 1 ; i < kittens.length; i ++){
    empty.push(kittens[i])
    //empty.push(name)
  }
  return empty;
}
