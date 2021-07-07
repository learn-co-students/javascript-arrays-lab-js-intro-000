var kittens = ['Milo','Otis','Garfield']; //define your array here

// Add your functions and code here
var destructivelyAppendKitten = (name) => {
kittens.push(name);
return kittens;
}

var destructivelyPrependKitten = (name) => {
  return kittens.unshift(name);

}

var destructivelyRemoveLastKitten = () => {
return kittens.pop()
}

var destructivelyRemoveFirstKitten = () => {
return kittens.shift();
}

var appendKitten = (name) =>{
return kittens.concat(name)
}

var prependKitten = (name) => {
  return [name].concat(kittens)
}

var removeLastKitten = () => {
  return kittens.slice(0,kittens.length-1)
}
var removeFirstKitten = () => {
  return kittens.slice(1)
}
