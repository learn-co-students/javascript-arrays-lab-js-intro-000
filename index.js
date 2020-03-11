var kittens = [];
kittens.push("Milo", "Otis", "Garfield"); //define your array here

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function appendKitten(name) {
  let newArray = [...kittens];
  newArray.push(name);
  return newArray;
}

function prependKitten(name) {
  let newArray = [...kittens];
  newArray.unshift(name);
  return newArray;
}

function removeFirstKitten() {
	let newArray = [...kittens];
	newArray.shift();
	return newArray;
}

function removeLastKitten() {
  let newArray = [...kittens];
  newArray.pop();
  return newArray;
}
