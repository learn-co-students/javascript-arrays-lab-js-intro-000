const kittens = ['Milo', 'Otis', 'Garfield'];

var destructivelyAppendKitten = (name) => {
  kittens.push(name);
  return kittens;
}
