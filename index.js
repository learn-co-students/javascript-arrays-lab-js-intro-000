var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten() {
  kittens.push("Ralph")

}

function destructivelyPrependKitten(){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(){

  var newkitten =   kittens.concat(["Broom"])
  return newkitten
}

function prependKitten(){
  var newkitten = ["Arnold", ...kittens]
  return newkitten
}

function removeLastKitten(){
  var newkitten = kittens.slice(0, 2)
  return newkitten
}

function removeFirstKitten(){
  var newkitten = kittens.slice(1, 3)
  return newkitten
}
