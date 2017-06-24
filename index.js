const app = "I don't do much."

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
  kittens.shift(1);
  return kittens;
}

function appendKitten(name)
{
  var n = [...kittens, name];
  return n;
}

function prependKitten(name)
{
  var n = [name, ...kittens];
  return n;
}

function removeLastKitten()
{
  var n = kittens.slice(0, kittens.length-1);
  return n;
}

function removeFirstKitten()
{
  var n = kittens.slice(1, kittens.length);
  return n;
}
