var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function  destructivelyAppendKitten() {
kittens.push('Ralph');
return kittens;
}

function  destructivelyPrependKitten()  {
kittens.unshift('Bob');
return kittens;
}

function  destructivelyRemoveLastKitten() {
kittens.pop();
return  kittens;
}

function  destructivelyRemoveFirstKitten()  {
kittens.shift()
return kittens;
}

function  appendKitten()  {
  var newKittens = [...kittens, "Broom"];
  return newKittens;
}

function  prependKitten() {
  var newKittens = ["Arnold", ...kittens];
  return  newKittens;
}
function  removeLastKitten()  {
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

function  removeFirstKitten() {
  var newKittens  = kittens.slice(1);
  return newKittens;
}
