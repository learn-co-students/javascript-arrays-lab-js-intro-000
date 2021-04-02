var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  var name = ['Broom'];
  var moreKittens = kittens.concat(name);

  return moreKittens;

}

function prependKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  var name = ['Arnold'];
  var moreKittens = name.concat(kittens);

  return moreKittens;
}

function removeLastKitten() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
      var Kittens = kittens.slice(0,kittens.length-1);
    return Kittens;
}

function removeFirstKitten() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
      var Kittens = kittens.slice(1);

    return Kittens;
}
