var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  var newKitt;
  newKitt = kittens.push(name);
  return newKitt;
}

function destructivelyPrependKitten(name) {
  var newKitt;
  newKitt = kittens.unshift(name);
  return newKitt;
}

function destructivelyRemoveLastKitten() {
  var newKitt;
  newKitt = kittens.pop();
  return newKitt;
}

function destructivelyRemoveFirstKitten() {
  var newKitt;
  newKitt = kittens.shift();
  return newKitt;
}

function appendKitten(name) {
  var newKitt;
  newKitt = [...kittens, name];
  return newKitt;
}

function prependKitten(name) {
  var newKitt;
  newKitt = [name, ...kittens];
  return newKitt;
}

function removeLastKitten() {
  var newKitt;
  newKitt = kittens.slice(0, kittens.length - 1);
  return newKitt;
}

function removeFirstKitten() {
  var newKitt;
  newKitt = kittens.slice(1);
  return newKitt;
}
