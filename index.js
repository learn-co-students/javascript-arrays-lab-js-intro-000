const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

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
	kittens.shift();

	return kittens;
}

function appendKitten(name){
	var kitten = [...kittens];
	kitten.push(name);
	return kitten;
}

function prependKitten(name) {
	var kitten = [...kittens];
	kitten.unshift(name);
	return kitten;
}

function removeLastKitten(){
	var kitten = [...kittens];
	kitten.pop();
	return kitten;
}

function removeFirstKitten() {
	var kitten = [...kittens];
	kitten.shift();
	return kitten;
}
