const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
	kittens.push(name)
	return kittens
}

function destructivelyPrependKitten(name){
	kittens.unshift(name)
	return kittens
}

function  destructivelyRemoveLastKitten(){
	kittens.pop()
	return kittens
}

function destructivelyRemoveFirstKitten(){
	kittens.shift()
	return kittens
}

function appendKitten(name){
	var cats = kittens.slice()
	cats.push(name)
	return cats
}

function prependKitten(name){
	var cats = kittens.slice()
	cats.unshift(name)
	return cats
}

function removeLastKitten(){
	var cats = kittens.slice()
	cats.pop()
	return cats
}

function removeFirstKitten(){
	var cats = kittens.slice()
	cats.shift()
	return cats
}