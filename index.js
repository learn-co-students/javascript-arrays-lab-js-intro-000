const app = "I don't do much.";

var kittens=["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten=function(name) {
  kittens.push(name)
  return kittens
};

var destructivelyPrependKitten=function(name) {
  kittens.unshift(name)
  return kittens
};

var destructivelyRemoveLastKitten= ()=> { kittens.pop(); return kittens };

var destructivelyRemoveFirstKitten= ()=> { kittens.shift(); return kittens };

var appendKitten= function(name) {
  var newArray=kittens.slice(0, kittens.length);
  newArray.push(name);
  return newArray;
}

var prependKitten=function(name) {
  var newArray=kittens.slice(0, kittens.length);
  newArray.unshift(name);
  return newArray;
};

var removeLastKitten=()=>{
  var newArray=kittens.slice(0, kittens.length);
  newArray.pop();
  return newArray;
};

var removeFirstKitten=()=>{
  var newArray=kittens.slice(0, kittens.length);
  newArray.shift();
  return newArray;
};
