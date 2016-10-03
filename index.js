const app = "I don't do much."
var kittens=["Milo","Otis","Garfield"];
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

 kittens=["Milo","Otis","Garfield"];
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}


function appendKitten(name){
kittens=["Milo","Otis","Garfield"];
  var newarray=[];
  newarray= kittens.concat();
  newarray.push(name);
  return newarray;
}

function prependKitten(name){
kittens=["Milo","Otis","Garfield"];
  var newarray=[];
  newarray= kittens.concat();
  newarray.unshift(name);
  return newarray;
}

function removeLastKitten(){
kittens=["Milo","Otis","Garfield"];
  var newarray=[];
  newarray= kittens.concat();
  newarray.pop();
  return newarray;
}
function removeFirstKitten(){
kittens=["Milo","Otis","Garfield"];
  var newarray=[];
  newarray= kittens.concat();
  newarray.shift();
  return newarray;
}
