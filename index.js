const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(name){
  var temp = [];
  temp = temp.concat(kittens);
  temp.push(name);
  return temp;
}
function prependKitten(name){
    var temp = [];
    temp = temp.concat(kittens);
    temp.unshift(name);
    return temp;
}
function removeLastKitten(){
  var temp = [];
  temp = temp.concat(kittens);
  temp.pop();
  return temp;
}
function removeFirstKitten(){
  var temp = [];
  temp = temp.concat(kittens);
  temp.shift();
  return temp;
}
