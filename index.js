const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newKit = [...kittens, name];
  return newKit;
}

function prependKitten(name) {
  var prepKit = [name, ...kittens];
  return prepKit;
}

function removeLastKitten() {
  var remLast = kittens.slice(0, kittens.length -1);
  return remLast;
}

function removeFirstKitten() {
  var remFirst = kittens.slice(1);
  return remFirst;
}
