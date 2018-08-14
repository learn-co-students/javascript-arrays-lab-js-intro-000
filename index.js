// Add your functions and code here
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name){
  kittens.push('Ralph')
}
destructivelyAppendKitten();

var kittens = ["Milo","Otis","Garfield",]
function destructivelyPrependKitten()
{
  kittens.unshift("Bob")
}
destructivelyPrependKitten();

var kittens = ["Milo", "Otis","Garfield"]
function destructivelyRemoveLastKitten()
{
  kittens.pop()
}
destructivelyRemoveLastKitten();

var kittens=["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten()
{
  kittens.shift()
}
destructivelyRemoveFirstKitten();


var kittens= ["Milo","Otis","Garfield"];
var addKitty = ["Broom"];
function appendKitten(name)
{
  return(kittens.concat(addKitty));
}
appendKitten()


var kittens= ["Milo", "Otis" , "Garfield"];
var oneKitty= ["Arnold"];
function prependKitten(name)
{
  return (oneKitty.concat(kittens));
}
prependKitten

var kittens= ["Milo", "Otis" , "Garfield"];
function removeLastKitten()
{
  return (kittens.slice(0,kittens.length - 1));
}



var kittens= ["Milo", "Otis" , "Garfield"];
function removeFirstKitten()
{
  return (kittens.slice(1,kittens.length));
}
