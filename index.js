  var kittens = [
  "Milo",
  "Otis",
  "Garfield"
] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name)
{
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens
}

 function destructivelyRemoveFirstKitten()
 {
   return kittens.shift()
 }

 function removeLastKitten()
 {
   //var n = kittens.length - 1
   return kittens.slice(0, kittens.length - 1)

 }

 function removeFirstKitten()

 {
   return kittens.slice(1)
 }

 function appendKitten(name)
 {
   //var kittens2 = kittens[...name]
  // var kittens3=kittens2.concat(kittens)
    //return kittens.concat(name)

    var kittens2 = [...kittens, name]
    return kittens2
 }

 function prependKitten(name)
 {
   var nnameArray =[name]
   return nnameArray.concat(kittens)
 }
