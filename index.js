const app = "I don't do much."

function destructivelyAppendKitten(name){
  return window.kittens.push(name);
}

function destructivelyPrependKitten(name){
  return window.kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return window.kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return window.kittens.shift();
}

function appendKitten(name){
  var addKitten = [...window.kittens];
  addKitten.push(name);
  return addKitten;
}

function prependKitten(name){
  var addKitten = [...window.kittens];
  addKitten.unshift(name);
  return addKitten;
}

function removeLastKitten(){
  var removeKitten = [...window.kittens];
  removeKitten.pop();
  return removeKitten;
}

function removeFirstKitten(){
  var removeKitten = [...window.kittens];
  removeKitten.shift();
  return removeKitten;
}
