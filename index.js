var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  var name1 = [...kittens, name];
  return name1;
}
function prependKitten(name){
  var name2 = [name,...kittens];
  return name2;
}
function removeLastKitten(){
  var cat = kittens.slice(0,-1);
  return cat;
}
function removeFirstKitten(){
  var cats = kittens.slice(1);
  return cats;
}
