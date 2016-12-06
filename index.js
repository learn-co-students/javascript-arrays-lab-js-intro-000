const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

var destructivelyAppendKitten = function() {
   kittens.push("Ralph");
 }

var destructivelyPrependKitten= function () {
  kittens.unshift("Bob");
}


var destructivelyRemoveLastKitten = function () {
  kittens.pop();
}


var destructivelyRemoveFirstKitten = function () {
  kittens.shift();
}



var appendKitten = function () {
  var kittens2 = [...kittens, "Broom"];
  return kittens2;
}

var prependKitten = function () {
  var prependKitten2 = ["Arnold", ...kittens];
  return prependKitten2;
}


// var removeLastKitten = function () {
//   var removal = kittens.slice(0,2);
//   return removal;
// }

var removeLastKitten = function () {
  var removal = kittens.slice(0,kittens.length-1);
  return removal;
}

var removeFirstKitten = function () {
  var removeFirst = kittens.slice(1,3);
  return removeFirst;
}
