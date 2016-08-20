const app = "I don't do much."


var destructivelyAppendKitten =(name)=> {
  kittens.push(name);
}

var destructivelyPrependKitten =(name)=> {
  kittens.unshift(name);
}

var destructivelyRemoveLastKitten =()=> {
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten =()=> {
  kittens.shift();
  return kittens;
}

var appendKitten =(name)=> {
  return [...kittens, name];
}

var prependKitten =(name)=> {
  return [name, ...kittens];
}

var removeLastKitten =()=> {
  return kittens.slice(0, -1);
}

var removeFirstKitten =()=> {
  return kittens.slice(1);
}
