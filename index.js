const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(newKitten){
    return kittens.push(newKitten);
}

function destructivelyPrependKitten(newKitten){
    return kittens.unshift(newKitten);
}

function destructivelyRemoveLastKitten(){
    return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
    kittens.shift();
    return kittens;
  }

function appendKitten(newKitten){
     var newArray = [...kittens, newKitten];
     return newArray;
}

function prependKitten(newKitten){
    var newArray = [newKitten, ...kittens];
    return newArray;
}

function removeLastKitten(){
    var newArray = kittens.slice(0, kittens.length - 1);
    return newArray;
}

function removeFirstKitten(){
    var newArray = kittens.slice(1);
    return newArray;
}
