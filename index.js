const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name)
{
  return kittens.push(name)
}

function destructivelyPrependKitten(name)
{
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten()
{
  return kittens.pop();
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift(1,kittens.length)
}

function appendKitten(name)
{
  return [...kittens, "Broom"]
}

function prependKitten(name)
{
  return ["Arnold", ...kittens]
}

function removeLastKitten()
{
  var cats = kittens.slice(0,kittens.length-1)
  return cats
}

function removeFirstKitten()
{
  var cats = kittens.slice(1,kittens.length)
  return cats
}
