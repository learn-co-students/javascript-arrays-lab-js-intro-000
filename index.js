const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = (name) => kittens.push(name);

var destructivelyPrependKitten = (name) => kittens.unshift(name);

var destructivelyRemoveLastKitten = (name) => kittens.pop(name);

var destructivelyRemoveFirstKitten = (name) => kittens.shift(name);

var appendKitten = (name) => [...kittens, name];

var prependKitten = (name) => [name,...kittens];

var removeFirstKitten = () => kittens.slice(1);

var removeLastKitten = () => kittens.slice(0,kittens.length-1);