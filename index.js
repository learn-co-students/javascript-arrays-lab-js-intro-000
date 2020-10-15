var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
    name = 'Ralph';
    kittens.push(name);
    return kittens;
}
function destructivelyPrependKitten(name) {
    name = "Bob";
    kittens.unshift(name);
    return kittens;
}
function destructivelyRemoveLastKitten() {
    kittens.pop();
    return kittens;
}
function destructivelyRemoveFirstKitten() {
    kittens.shift();
    return kittens;
}
function appendKitten(name) {
    var newKittens = [...kittens, name];
    return newKittens;
}
function prependKitten(name) {
    var newKittens = [name, ...kittens];
    return newKittens;
}
function removeLastKitten() {
    var newArray = [...kittens];
    newArray.pop();
    return newArray;
}
function removeFirstKitten() {
    var newArray = [...kittens];
    newArray.shift();
    return newArray;
}