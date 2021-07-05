
var kittens = ["Milo", "Otis", "Garfield"];

// Add your functions and code here


  function  destructivelyAppendKitten(name){
    kittens.push(name);
  }


  function destructivelyPrependKitten(name){
    kittens.unshift(name);
  }

  function destructivelyRemoveLastKitten(name){
    kittens.pop(name);

  }


  function  destructivelyRemoveFirstKitten(){
      kittens.shift(name);
  }


  function appendKitten(name){
    var newKittens = kittens.concat(name) ;
    return newKittens;
  }


  function prependKitten(name){
    var newKittens = kittens.slice();
    newKittens.unshift(name);
    return newKittens;

  }


  function removeLastKitten() {
    var newKittens = kittens.slice();
    newKittens.pop();
    return newKittens;
  }

  function removeFirstKitten() {
    var newKittens = kittens.slice();
    newKittens.shift();
    return newKittens;
  }
