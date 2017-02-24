const app = "I don't do much."
 var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten (name)
{
  kittens.push("Ralph");
  return kittens;
}
function destructivelyPrependKitten(name)
{
  kittens.unshift("Bob");
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
  var New = [...kittens,"Broom"];
  return New;
}
function prependKitten(name)
{
  var New = ["Arnold",...kittens];
  return New;
}

function removeFirstKitten()
{
  var New = kittens.slice(1);
  return New;
}
function removeLastKitten()
{
  var New = kittens.slice(0, kittens.length - 1);
  return New;
}
