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
  var array1=[]
  array1=kittens.concat(name);
  return array1;
}
function prependKitten(name){
  var array1=[];
  array1.unshift(name);
  var array2=array1.concat(kittens);
  return array2;
}
function removeLastKitten(){
	var array1=(kittens.slice(0,-1));
	return array1;
}
function removeFirstKitten(){
	var array1=(kittens.slice(1));
	return array1;
}