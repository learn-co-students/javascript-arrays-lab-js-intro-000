var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

var destructivelyAppendKitten = (name) => {
    kittens.push(name)
}

var destructivelyPrependKitten = (name) => {
    kittens.unshift(name)
}

var destructivelyRemoveLastKitten = () => {
    kittens.pop()
}

var destructivelyRemoveFirstKitten = () => {
    kittens.shift()
}

var appendKitten = (name) => {
    var kitte = [...kittens, name]
    return kitte
}

var prependKitten = (name) => {
    var kitten = [name, ...kittens]
    return kitten
}

var removeLastKitten = () => {
    var kitt = kittens.slice(0, kittens.length -1)
    return kitt
}

var removeFirstKitten = () => {
   var  kit = kittens.slice(1)
    return kit
}