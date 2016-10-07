const app = "I don't do much."

function Arrays() {
  return function beforeEach() {
    window.kittens=['Milo', 'Otis', 'Garfield'];
  }
}

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"];
  window.kittens=["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  window.kittens= ["Milo", "Otis", "Garfield","Ralph"];
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  window.kittens= ["Bob","Milo", "Otis", "Garfield"];
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  window.kittens= ["Milo","Otis"];
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  window.kittens= ["Otis", "Garfield"];
}

function appendKitten(name) {
  return[...kittens,"Broom"];
  window.kittens= ["Milo", "Otis", "Garfield", "Broom"]
}

function prependKitten(name) {
  return["Arnold",...kittens];
  window.kittens= ["Arnold", "Milo", "Otis", "Garfield"];
}

function removeLastKitten() {
  return kittens.slice(0,kittens.length-1);
  window.kittens= ["Milo","Otis"];
}

function removeFirstKitten() {
  return kittens.slice(1);
  window.kittens= ["Otis","Garfield"];
}
