var kittens = ["Milo", "Otis", "Garfield"];//define your array here
function destructivelyAppendKitten(Ralph){
return kittens.push("Ralph");
  }
// Add your functions and code here
function destructivelyPrependKitten(Ralph){
  return kittens.unshift(Ralph)
}
function destructivelyRemoveLastKitten(Ralph){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(Broom){
  var kittens1= kittens.slice();
  kittens1.push("Broom");
  return kittens1;
}
function prependKitten(Broom){
  return [Broom,...kittens];
}
function removeLastKitten(Broom){
return kittens.slice(0,kittens.length-1);
}
function removeFirstKitten(){
  return kittens.slice(1);
}
