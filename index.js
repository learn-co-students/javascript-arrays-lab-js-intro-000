function destructivelyAppendKitten(kitten) {
    window.kittens.push(kitten);
}

function destructivelyPrependKitten(kitten) {
    window.kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten() {
    window.kittens.pop();
}

function destructivelyRemoveFirstKitten() {
    window.kittens.shift();
}

function appendKitten(kitten) {
    return [...window.kittens, kitten];
}

function prependKitten(kitten) {
    return [kitten, ...window.kittens];
}

function removeLastKitten() {
  return window.kittens.slice(0, -1);
}

function removeFirstKitten() {
  return window.kittens.slice(1);
}
