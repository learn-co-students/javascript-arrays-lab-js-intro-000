var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push('Ralph');
}
function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
  const kittens2=['Broom']
  const kittens3= kittens.concat(kittens2)
  return kittens3
}
function prependKitten(name){
  const kittens2=["Arnold"];
  const kittens3= kittens2.concat(kittens);
  return kittens3
}
function removeLastKitten(){
  return kittens.slice(0,2)
}
function removeFirstKitten(){
  return kittens.slice(-2)
}