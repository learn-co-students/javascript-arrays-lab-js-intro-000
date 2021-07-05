var kittens = ['Milo','Otis','Garfield']; //define your array here
function destructivelyAppendKitten(name)
{
  kittens.push(name);
}
function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten()
{
  kittens.pop();
}// Add your functions and code here
function destructivelyRemoveFirstKitten()
{
  kittens.shift();
}
function appendKitten(name)
{
  var newKitten=[...kittens, name];
  return newKitten
}
function prependKitten(name)
{
  var newKitten=[name, ...kittens];
  return newKitten
}
function removeLastKitten()
{
  var newKitten=kittens.slice(0,kittens.length-1);
  return newKitten
}
function removeFirstKitten()
{
  var newKitten=kittens.slice(1);
  return newKitten
}
