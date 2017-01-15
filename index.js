const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = function(name){
kittens.push(name);
return kittens;
};


var destructivelyPrependKitten = function (name) {
kittens.unshift(name);
return kittens;
};


var destructivelyRemoveLastKitten = function() {
kittens.pop(name);
return kittens;
};

var destructivelyRemoveFirstKitten = function() {
kittens.shift(name);
return kittens;
};

var appendKitten = function (name)  {
var updatedArray = [...kittens, name];
return updatedArray;
};

var prependKitten = function (name)  {
var updatedArray = [name, ...kittens];
return updatedArray;
};

var removeLastKitten = function ()  {
var updatedArray = kittens.slice(0, kittens.length - 1);
return updatedArray;
};

var removeFirstKitten = function ()  {
var updatedArray = kittens.slice(1);
return updatedArray;
};
