var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
const destructivelyAppendKitten = (kitten) => kittens.push(kitten);

const destructivelyPrependKitten = (kitten) => kittens.unshift(kitten);

const destructivelyRemoveLastKitten = () => kittens.pop();

const destructivelyRemoveFirstKitten = () => kittens.shift();


const appendKitten = (name) => {
// let kittensUpdated = kittens.concat(name);
  let kittensUpdated = [...kittens,name];
  
  return kittensUpdated;
}  

const prependKitten = (name) => {
  let kittensUpdated = [name,...kittens];
  
  return kittensUpdated;
}  

const removeFirstKitten = () => {
  return kittens.slice(1);
}

const removeLastKitten = () => {
  return kittens.slice(0,-1);
}


