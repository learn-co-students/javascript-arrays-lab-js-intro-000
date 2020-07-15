var kittens = ['Milo', 'Otis', 'Garfield']
 //define your array here

 function destructivelyAppendKitten(name) {
   kittens.push(name);
   return kittens;
 }

function destructivelyPrependKitten(name) {
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
  var resultArr = [...kittens, name];
  return resultArr;
}
// Add your functions and code here

function prependKitten(name) {
  var resultArr = [name, ...kittens];
  return resultArr;
}

function removeLastKitten() {
  var resultArr = kittens.slice(0, kittens.length - 1);

  return resultArr;
}

function removeFirstKitten() {
  var resultArr = kittens.slice(1);

  return resultArr;
}
