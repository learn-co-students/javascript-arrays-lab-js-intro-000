  const app = "I don't do much.";

  let kittens = ["Milo", "Otis", "Garfield"];
//console.log(kittens);


function destructivelyAppendKitten(name) {
	kittens.push(name);
}
//pends a kitten to the end of the

function destructivelyPrependKitten(nameX) {
		kittens.unshift(nameX);
 }
 //prepends a kitten to the beginning of the kitt

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}


function appendKitten(name) {
  var newKittens = [...kittens]
 newKittens.push(name)
 return newKittens;
 }

 function prependKitten(name) {
   var newKittens = [...kittens];
  newKittens.unshift(name);
  return newKittens;
  }

  function removeLastKitten() {
    var newKittens = [...kittens];
   newKittens.pop();
   return newKittens;
  }

  function removeFirstKitten() {
    var newKittens = [...kittens];
   newKittens.shift();
   return newKittens;
  }
