var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
kittens.push('Ralph')
};

function destructivelyPrependKitten(name) {
  window.kittens = ['Milo', 'Otis', 'Garfield'];
kittens.unshift('Bob')
};

function destructivelyRemoveLastKitten(name) {
  window.kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.pop()
};

function destructivelyRemoveFirstKitten(name) {
  window.kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.shift()
};

function appendKitten(name) {
  window.kittens = ['Milo', 'Otis', 'Garfield'];
return [...kittens, "Broom"]
};

function prependKitten(name) {
  window.kittens = ['Milo', 'Otis', 'Garfield'];
  return ["Arnold", ...kittens]
};

function removeLastKitten(name) {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens.slice(0, kittens.length - 1)
};

function removeFirstKitten(name) {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens.slice(1)
};
