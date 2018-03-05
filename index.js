const app = "I don't do much."
function destructivelyAppendKitten(newKitten){
  kittens.push(newKitten)
  return kittens
}
function destructivelyPrependKitten(newKitten){
  kittens.unshift(newKitten);
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  //return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(newKitten){
  var temp = [...kittens, newKitten ];
  return temp;
}
function prependKitten(newKitten){
  var temp = [newKitten,...kittens];
  return temp;
}
function removeLastKitten(){
var  temp=kittens.slice(0,-1)
return temp
}
function removeFirstKitten(){
  return kittens.slice(1);
}
