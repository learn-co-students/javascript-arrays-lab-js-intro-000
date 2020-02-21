var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

/*destructivelyPrependKitten(name) prepends a kitten to the beginning
of the kittens array*/
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

/*destructivelyRemoveLastKitten() removes the last kitten from
the kittens array:*/
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

/*destructivelyRemoveFirstKitten() removes the First kitten from
the kittens array*/
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

/*appendKitten(name) appends a kitten to the kittens array and
returns a new array, leaving the kittens array unchanged:*/
function appendKitten(name){
  var newKittens = [name];
  newKittens = kittens.concat(newKittens);
  return newKittens;
}

/*prependKitten(name) prepends a kitten to the kittens array
and returns a new array, leaving the kittens array unchanged:*/
function prependKitten(name){
  var newKittens = [name];
  newKittens = newKittens.concat(kittens);
  return newKittens;
}

/*removeLastKitten() removes the last kitten in the kittens array and
returns a new array, leaving the kittens array unchanged*/
function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length-1);
  return newKittens;
}

/*removeFirstKitten() removes the first kitten from the kittens
array and returns a new array, leaving the kittens array unchanged*/
function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return newKittens;
}
