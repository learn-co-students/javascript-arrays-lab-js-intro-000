const app = "I don't do much."

function destructivelyAppendKitten(name) {
    kittens.push(name);
    return kittens;
}

function destructivelyPrependKitten(name) {
    kittens.unshift(name);
    return kittens;
}

function destructivelyRemoveLastKitten() {
    kittens.pop();
    return kittens;
}

function destructivelyRemoveFirstKitten() {
    kittens = kittens.slice(1);
    return kittens;
}

function appendKitten(name) {
    var newArr = kittens.slice();
    newArr.push(name);
    return newArr;
}

function prependKitten(name) {
    var newArr = kittens.slice();
    newArr.unshift(name);
    return newArr;
}

function removeLastKitten() {
    var newArr = kittens.slice();
    newArr.pop();
    return newArr;
}

function removeFirstKitten() {
    var newArr = kittens;
    newArr = newArr.slice(1)
    return newArr;
}
