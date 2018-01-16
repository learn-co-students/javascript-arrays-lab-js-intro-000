const app = "I don't do much."
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
}
function destructivelyRemoveFirstKitten()
{
  kittens.shift();
}
function appendKitten(name)
{
  var cats = kittens;
  cats = [...kittens, name];
  return cats;
}
function prependKitten(name)
{
  var cats = kittens;
  cats = [name,... kittens];
  return cats;
}
function removeLastKitten()
{
  var cats = kittens;
  var n = cats.length;
  cats = kittens.slice(0, cats.length - 1);
  return cats;

}
function removeFirstKitten()
{
  var cats = kittens;
  cats = kittens.slice(1);
  return cats;

}