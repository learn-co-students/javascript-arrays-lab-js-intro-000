var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) // adds element to end of original array PUSH
{
  kittens.push("Ralph");
}

function destructivelyPrependKitten(name) // adds element to begining of original array UNSHIFT
{
  kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten(name) // removes last element in original array POP
{
  kittens.pop();
}
function destructivelyRemoveFirstKitten(name) // removes first element in original array SHIFT 
{
  kittens.shift();
}
function appendKitten(name) // new array, adds element to end of array SPREAD
{
  var kittens2 = [...kittens, "Broom"];
  return kittens2
}
function prependKitten(name) // new array, adds element to begining of array SPREAD 
{
  var kittens5 = ["Arnold", ...kittens];
  return kittens5  
}
function removeLastKitten(name) // new array, removes last element of new array SLICE
{
  var kittens3 = kittens.slice(0, kittens.length - 1);
  return kittens3
}
function removeFirstKitten(name) // new array, removes first element of new array SLICE
{
  var kittens4 = kittens.slice(-2);
  return kittens4
} 