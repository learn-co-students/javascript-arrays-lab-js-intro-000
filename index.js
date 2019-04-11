var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
const destructivelyAppendKitten = name => {kittens.push(name); return kittens;}

const destructivelyPrependKitten = name => {kittens.unshift(name); return kittens;}

const destructivelyRemoveLastKitten = () => kittens.pop()

const destructivelyRemoveFirstKitten = () => kittens.shift()

const appendKitten = (name) => {
  return [...kittens, name];
}

const prependKitten = (name) => {
  return [name, ...kittens];
}

const removeFirstKitten = (name) => {
  return kittens.slice(1);
}

const removeLastKitten = (name) => {
  return kittens.slice(0,kittens.length-1);
}
