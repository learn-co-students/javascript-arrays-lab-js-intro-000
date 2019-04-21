var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

 function destructivelyAppendKitten(kittenString){
  kittens.push(kittenString);
  return kittens;
 }
 
 function destructivelyPrependKitten(kittenString){
   kittens.unshift(kittenString);
   return kittens;
 }
 
 function destructivelyRemoveLastKitten(kittenString){
   kittens.pop(kittenString);
   return kittens;
 }
 
 function destructivelyRemoveFirstKitten(kittenString){
   kittens.shift(kittenString);
   return kittens;
 }
 
 function appendKitten(kittenString){
   return[...kittens, kittenString]
 }
 
 function prependKitten(kittenString){
   return[kittenString,...kittens]
 }
 
 function removeLastKitten(kittenString){
  return kittens.slice(0, kittens.length - 1);
   
 }
 
 function removeFirstKitten(kittenString){
   return kittens.slice(1);
 }
 
 
 