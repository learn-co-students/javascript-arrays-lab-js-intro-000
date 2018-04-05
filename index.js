const app = "I don't do much."

var kittens = function() {
  var arr = ['Milo', 'Otis', 'Garfield'];
  return arr;
}

function destructivelyAppendKitten(name)
{
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten()
{
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift();
  return kittens;
}

function appendKitten(name)
{
  var kittenCopy = new Array();
  kittenCopy = [...kittens, name];
  return kittenCopy;
}

function prependKitten(name)
{
  var kittenCopy = new Array();
  kittenCopy = [name, ...kittens];
  return kittenCopy;
}

function removeLastKitten()
{
  var kittenCopy = new Array();
  kittenCopy = kittens.slice(0, kittens.length - 1);
  return kittenCopy;
}

function removeFirstKitten()
{
  var kittenCopy = new Array();
  kittenCopy = kittens.slice(1);
  return kittenCopy;
}
