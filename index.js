var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(Milo, Otis, Garfield) {
  kittens.push('Ralph')
}
kittens();

function destructivelyPrependKitten(Milo, Otis, Garfield) {
  kittens.unshift('Bob')
}
kittens();

function destructivelyRemoveLastKitten(Milo, Otis, Garfield) {
  kittens.pop();
}
kittens();

function destructivelyRemoveFirstKitten(Milo, Otis, Garfield) {
  kittens.shift();
}
kittens();

function appendKitten(Milo, Otis, Garfield) {
  return [...kittens, 'Broom']
}
kittens();

function prependKitten(Milo, Otis, Garfield) {
  return ['Arnold', ...kittens]
}
kittens();

function removeLastKitten(Milo, Otis, Garfield) {
  return kittens.slice(0 ,kittens.length - 1)
}
kittens();

function removeFirstKitten(Milo, Otis, Garfield) {
  return kittens.slice(1)
}
kittens();
