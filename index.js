var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
return kittens.push(name);
}

function destructivelyPrependKitten(name) {
return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
return kittens.shift();
}

function prependKitten(kitten) {
var newArray = [kitten, ...kittens];
return newArray;
}

function appendKitten(kitten) {
var newArray = [...kittens, kitten];
return newArray;
}

function removeLastKitten() {
var newArray = kittens.slice(0, kittens.length -1);
return newArray;
}

function removeFirstKitten() {
var newArray = kittens.slice(1);
return newArray;
}
