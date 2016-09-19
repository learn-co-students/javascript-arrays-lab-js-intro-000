const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = (name) => kittens.push(name);

var destructivelyPrependKitten = (name) => kittens.unshift(name);

var destructivelyRemoveFirstKitten = () => kittens.shift();

var destructivelyRemoveLastKitten = () => kittens.pop();

var appendKitten = (name) => [...kittens, name];

var prependKitten = (name) => [name, ...kittens];

var removeLastKitten = () => kittens.slice(0, -1);

var removeFirstKitten = () => kittens.slice(1, kittens.length);
