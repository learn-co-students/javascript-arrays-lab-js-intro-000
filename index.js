const app = "I don't do much."

var catNames = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name)
{
  catNames.push("Ralph")
  return catNames
}

function destructivelyPrependKitten(name)
{
  catNames.unshift("Bob")
  return catNames
}

function destructivelyRemoveLastKitten(name)
{
  catNames.shift(1);
}

function destructivelyRemoveFirstKitten(name)
{
  catNames.shift(1,catNames.length)
}

function appendKitten(name)
{
  return [...catNames, "Broom"]
}

function prependKitten(name)
{
  return ["Arnold", ...catNames]
}

function removeLastKitten(name)
{
  catNames.slice(0,1)
}

function removeFirstKitten(name)
{
  catNames.slice(1,2)
}
