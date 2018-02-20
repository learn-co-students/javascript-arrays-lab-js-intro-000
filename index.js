const kittens = ['Milo', 'Otis', 'Garfield'];

var destructivelyAppendKitten = (name) => {
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten = (name) => {
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift();
  return kittens;
}

var appendKitten = (name) => {

  var kitten = [...kittens, name];
  return kitten;
}

var prependKitten = (name) => {

  var kitten = [name,...kittens];
  return kitten;
}

var removeLastKitten = () => {

  var kitten = kittens.slice(0, kittens.length - 1);
  return kitten;
}

var removeFirstKitten = () => {

  var kitten = kittens.slice(1)
  return kitten;
}
