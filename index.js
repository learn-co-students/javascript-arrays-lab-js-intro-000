const app = "I don't do much."

/* ---------> Add new Element to the End Of Array    <----------  */

var kittens = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendKitten(name){

 kittens.push(name);

  return name;

 }
  destructivelyAppendKitten(["furr"]);


  /* ---------> Add new Element to the Begin Of Array    <----------  */

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name) {

  kittens.unshift(name);
  return name;
}


/* ---------> remove Last Element to the Array    <----------  */

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastKitten() {

kittens.pop();
return kittens;
}
 /* ---------> Remove First Element to the Array    <----------  */

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten() {

kittens.shift();
return kittens;
}

/* ---------> Add new Element to the End  & Return a New Array    <----------  */

var kittens = ["Milo", "Otis", "Garfield"];
function appendKitten(name) {

var moreKittens = [...kittens, name];
return moreKittens;
}

/* ---------> Add new Element to First index & Return a New Array    <----------  */

var kittens = ["Milo", "Otis", "Garfield"];
function prependKitten(name) {
 var moreKittens = [name, ...kittens];
 return moreKittens;
}

/* ---------> Remove The Last Element & Return a New Array    <----------  */

var kittens = ["Milo", "Otis", "Garfield"];
function removeLastKitten() {
var lastCat = kittens.slice(0, kittens.length -1);
return lastCat;
}


/* ---------> Remove The First Element & Return a New Array    <----------  */

var kittens = ['Milo', 'Otis', 'Garfield'];
 function removeFirstKitten() {
 var firstCat = kittens.slice(1);
  return firstCat;
}
