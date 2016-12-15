

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
};

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  var kittenz = kittens.slice(0);
  kittenz.push(name);
  return kittenz;
}

function prependKitten(name) {
  var kittenz = kittens.slice(0);
  kittenz.unshift(name);
  return kittenz;
}

function removeLastKitten(name) {
  var kittenz = kittens.slice(0);
  kittenz.pop(name);
  return kittenz;
}

function removeFirstKitten(name) {
  var kittenz = kittens.slice(0);
  kittenz.shift(name);
  return kittenz;
}
