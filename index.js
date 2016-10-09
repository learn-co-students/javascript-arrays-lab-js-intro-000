

function destructivelyAppendKitten (name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);

}

function destructivelyRemoveLastKitten (){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

/*function appendKitten(name){
  var newArray = kittens ["Milo", "Otis", "Garfield"];
  newArray.push(name);
  return newArray;
}*/
function prependKitten(name) {
  kittens.unshift(name);

}
