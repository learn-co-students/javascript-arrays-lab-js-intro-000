var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  var newArr = kittens;
  newArr.push(name)
  return newArr
}

function destructivelyPrependKitten(name){
  var newArr = kittens;
  newArr.unshift(name)
  return newArr
}

function destructivelyRemoveLastKitten(){
  var newArr = kittens;
  newArr.pop()
  return newArr
}

function destructivelyRemoveFirstKitten(){
  var newArr = kittens;
  newArr.shift();
  return newArr;
}

function appendKitten(name){
  var newKitten = name.split()
  return kittens.concat(newKitten);
}

function prependKitten(name){
  var newKitten = name.split()
  return newKitten.concat(kittens);
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
