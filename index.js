const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = (name) => {
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten = name => {
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten = name => {
  kittens.pop(name);
  return kittens;
}

var destructivelyRemoveFirstKitten = name => {
  kittens.shift(name)
  return kittens;
}

var appendKitten = name => {
  return [...kittens, name];
}

var prependKitten = name => {
  return [name, ...kittens];
}

var removeLastKitten = () => {
  return kittens.slice(0, -1)
}

var removeFirstKitten = () => {
  return kittens.slice(1);
}
