const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();

}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(name){
  var NewArray =  [...kittens, name] ;
  return NewArray;
}
function prependKitten(name){
  var NewArray =  [ name, ...kittens] ;
  return NewArray;
}
 function removeLastKitten(){
   var NewArray = kittens.slice(0, kittens.length -1);
   return NewArray;
 }
 function removeFirstKitten(){
   var NewArray = kittens.slice(1);
   return NewArray;
 }
