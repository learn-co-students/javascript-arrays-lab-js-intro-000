const app = "I don't do much."
function destructivelyAppendKitten(name) {
  return kittens.push(name);
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
  kittens.shift();
  return kittens;
}
function appendKitten(name) {
  var newKitten = [];
  newKitten = kittens.slice(0);
  newKitten.push(name);
  return newKitten;
}

  function prependKitten(name) {
    var newKitten = [];
    newKitten = kittens.slice(0);
    newKitten.unshift(name);
    return newKitten;
  }

  function removeLastKitten(name) {
    var newKitten = [];
    newKitten = kittens.slice(0);
    newKitten.pop();
    return newKitten;
  }

  function removeFirstKitten(name) {
    var newKitten = [];
    newKitten = kittens.slice(0);
    newKitten.shift();
    return newKitten;
  }
