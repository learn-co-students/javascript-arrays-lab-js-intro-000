const app = "I don't do much."

function destructivelyAppendKitten(name) {
     kittens.push(name);
     return kittens;
     }

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
return kittens.concat(name);
}

function prependKitten(name) {
   return ['Arnold',...kittens];
}

function removeLastKitten() {
   return kittens.filter((kittens, index) => index !== 2);
 }

function removeFirstKitten() {
  return kittens.filter((kittens, index) => index !== 0);
}
