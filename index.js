var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
var results = [];

// Add your functions and code here
function destructivelyAppendKitten(name){

kittens.push(name);
}
function destructivelyPrependKitten(){
  kittens.unshift('Bob');
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
};

function destructivelyRemoveFirstKitten(){
kittens.shift();

}
function appendKitten(name){
results += kittens.concat(name);
return results;
}

function prependKitten(name){
    return [name, ...kittens]
}

function removeLastKitten(){
    return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
    return kittens.slice(1)
}
