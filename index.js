const app = "I don't do much."
function destructivelyAppendKitten(name){kittens.push(name)}
function destructivelyPrependKitten(name){kittens.unshift(name)}
function destructivelyRemoveLastKitten(name){kittens.pop(name)}
function destructivelyRemoveFirstKitten(name){kittens.shift(name)}
function appendKitten(name){var kitties = [...kittens, name]; return kitties}
function prependKitten(name){var babycats = [name,...kittens]; return babycats}
function removeLastKitten(name){return kittens.slice(0,2)}
function removeFirstKitten(name){return kittens.slice(1.3)}
