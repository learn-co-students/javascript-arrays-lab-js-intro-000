const app = "I don't do much."

function kittens(){
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens;
}


//Destructively Append Kittens Array
function destructivelyAppendKitten(name){
  kittens = ['Milo', 'Otis', 'Garfield']
  kittens.push(name);
  return kittens;
}

destructivelyAppendKitten('Ralph');



//destructively Prepend Kittens array
function destructivelyPrependKitten(name){
  kittens = ['Milo', 'Otis', 'Garfield']
  kittens.unshift(name);
  return kittens;
}

destructivelyPrependKitten('Bob');


//destructively REMOVE Kitten
function destructivelyRemoveLastKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.pop();
  return kittens;
}

destructivelyRemoveLastKitten();


//destructively REMOVE FIRST kitten
function destructivelyRemoveFirstKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens.shift();
}

destructivelyRemoveFirstKitten();

//appends a kitten to the kittens array
function appendKitten(name){
  kittens = ['Milo', 'Otis', 'Garfield'];
  return [...kittens, name];
}

appendKitten('Broom');

//prepend Kitten name to array
function prependKitten(name){
  kittens = ['Milo', 'Otis', 'Garfield'];
  return [name, ...kittens];
}

prependKitten('Arnold');

//Removes the last kitten in the kittens array
//and returns a new array, leaving the kittens
//array unchanged
function removeLastKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens.slice(0, -1);

}

removeLastKitten();

//removes first kitten from array
function removeFirstKitten() {
  kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens.slice(1);
}

removeFirstKitten();
