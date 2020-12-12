var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
console.log(kittens)

function destructivelyAppendKitten(){
kittens.push("Ralph");
}
  console.log(kittens);

function destructivelyPrependKitten(){
  kittens.unshift("Bob");
}
  console.log(kittens);

function destructivelyRemoveLastKitten(){
  kittens.pop();
}
console.log(kittens);

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
console.log(kittens);


function appendKitten() {
return [...kittens, "Broom"];
}
console.log(appendKitten());

function prependKitten() {
  return ["Arnold", ...kittens];
}
console.log(prependKitten());

function removeLastKitten() {
  return kittens.slice(0,2);
}
console.log(removeLastKitten());

function removeFirstKitten() {
  return kittens.slice(1);
}
console.log(removeFirstKitten());
