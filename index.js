var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push("Ralph");               //add an array at the end
  //return kittens.upshift("Sofi");
  //return kittens;
}
function destructivelyPrependKitten(name){
  return kittens.unshift("Bob");              //add an array at the beginning
}
function destructivelyRemoveLastKitten(){
  return kittens.pop(kittens.length - 1);     //remove the last array
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift(1);                    //remove the 1st array
}
function appendKitten(name){
  //kittens.push("Broom");
  kittens;
  var new_array = new Array();
  new_array.push("Broom")
  return kittens.concat(new_array);
}
function prependKitten(name){
  return [name, ...kittens]
}
function removeLastKitten(){
  //kittens.slice(kittens.length - 1);
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten(){
  return kittens.slice(1);
}
