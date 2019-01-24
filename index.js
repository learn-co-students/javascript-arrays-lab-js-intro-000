var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = (name) =>{
  kittens.push(name)
}

var destructivelyPrependKitten = (name) => {
  kittens.unshift(name)
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop();
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift();
}

var appendKitten = (name) => {
  var kittenie = [...kittens,name]
  return kittenie;
}

var prependKitten = (name) => {
  var kittenie = [name,...kittens]
  return kittenie
}

var removeLastKitten = () => {
  var kittenie = kittens.slice(0, kittens.length - 1);
  return kittenie
}

var removeFirstKitten= () => {
  var kittenie = kittens.slice(1)
  return kittenie
}