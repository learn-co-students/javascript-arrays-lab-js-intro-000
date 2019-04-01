var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) 
{
  return kittens.push(name);
}

function destructivelyPrependKitten(name)
{
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten()
{
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten()
{
  return kittens.shift(name);
}

function prependKitten(name)
{
  return [name, ...kittens];
}

function appendKitten(name)
{
  return [...kittens, name];
}

function removeLastKitten(name)
{
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray;
}

function removeFirstKitten(name)
{
 var newArray = kittens.slice(1);
 return newArray;
}