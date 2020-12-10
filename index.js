var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var name ="Broom";
  var newKittens = [...kittens, name]
  return newKittens;
  console.log(kittens);
}

function prependKitten(name) {
  var name = "Arnold";
  var newKittens = [name, ...kittens];
  return newKittens;
  console.log(kittens);
}

function removeLastKitten() {
  var newKittens;
  newKittens = kittens.slice(0, kittens.length-1);
  return newKittens;
  console.log(kittens);
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
  console.log(kittens);
}
