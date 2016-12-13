const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name)
{
    kittens.push("Ralph")
}

function destructivelyPrependKitten(name)
{
    kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(name)
{
    kittens.pop("Garfield")
}

function destructivelyRemoveFirstKitten(name)
{
    kittens.shift("Milo")
}

function appendKitten(name)
{
    var newKittens = [...kittens, name];
    return newKittens
}

function prependKitten(name)
{
    var newKittens = [name, ...kittens];
    return newKittens
}

function removeLastKitten(name)
{
   var newKittens = kittens.slice(0, kittens.length-1);
   return newKittens
}

function removeFirstKitten(name)
{
   var newKittens = kittens.slice(1);
   return newKittens
}
