

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
};

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
};

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
};

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
};

function appendKitten(name){
  var array2 = [...kittens, name];
  return array2;
};

function prependKitten(name){
  var array2 = [name, ...kittens];
  return array2;
};

function removeLastKitten(){
  var slice = kittens.slice(0,-1);
  return slice;
};

function removeFirstKitten(){
  var slice = kittens.slice(1);
  return slice;
};
