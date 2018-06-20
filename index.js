var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(Ralph) {kittens.push(Ralph); return kittens}
function destructivelyPrependKitten(Fluffy) {kittens.unshift(Fluffy); return kittens}
function destructivelyRemoveLastKitten(Phil) {kittens.pop(Phil); return kittens}
function destructivelyRemoveFirstKitten(Steve) {kittens.shift(Steve); return kittens}
function appendKitten(Broom) {return [...kittens, Broom]}
function prependKitten(Harry) {return [Harry, ...kittens]}
function removeLastKitten() {return kittens.slice(0, kittens.length -1)}
function removeFirstKitten () {return kittens.slice(1)}
