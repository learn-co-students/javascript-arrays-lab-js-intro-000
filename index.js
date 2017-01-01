const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"];

function destructivelyAppendKitten(name) {
    var newKittens = kittens;
    newKittens.push(name);

    return newKittens;
}

function destructivelyPrependKitten(name) {
    var newKittens = kittens;
    newKittens.unshift(name);

    return newKittens;
}

function destructivelyRemoveLastKitten() {
    var newKittens = kittens;
    newKittens.pop();

    return newKittens;
}

function destructivelyRemoveFirstKitten() {
    var newKittens = kittens;
    newKittens.shift();

    return newKittens;
}

function appendKitten(name) {
    return [...kittens, name];

}

function prependKitten(name) {
    return [name, ...kittens];
}

function removeLastKitten() {
    var lastKitten = kittens.length -1;
    return kittens.slice(0, lastKitten);
}

function removeFirstKitten(name) {
    return kittens.slice(1);
}
