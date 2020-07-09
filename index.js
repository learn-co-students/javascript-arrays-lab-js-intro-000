var kittens = ["Milo", "Otis", "Garfield"];
var destructivelyAppendKitten = name =>{
  kittens.push(name);
  return kittens;
}
var destructivelyPrependKitten= name =>{
  kittens.unshift(name);
  return kittens;
}
var appendKitten = name =>{
  var kittens1=[...kittens, name];
  return kittens1;
}
var prependKitten = name=>{
   var kittens1=[name,...kittens];
   return kittens1;
}
var destructivelyRemoveLastKitten= () => {
  kittens.pop();
  return kittens;
}
var destructivelyRemoveFirstKitten= () =>{
  kittens.shift();
  return kittens;
}
var removeLastKitten= () =>{
  var kittens1 = kittens.slice(0, kittens.length -1);
  return kittens1;
}
var removeFirstKitten= () =>{
  var kittens1= kittens.slice(1);
  return  kittens1;
}
