const app = "I don't do much."

var kittens = ['Milo','Otis','Garfield'];

function destructivelyAppendKitten(){
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(){
  kittens.unshift('Bob');
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(){
  const moreCats = [...kittens, 'Broom'];
  return moreCats;
}
function prependKitten(){
  const moreKats = ['Arnold', ...kittens];
  return moreKats;
}
function removeLastKitten(){
  var lessCats = kittens.slice(0, kittens.length - 1);
  return lessCats;
}
function removeFirstKitten(){
  var lessKats = kittens.slice(-2);
  return lessKats;
}
