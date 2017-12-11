var destructivelyAppendKitten = name => {
    return kittens.push(name)
}

var destructivelyPrependKitten = name => {
    return kittens.unshift(name)
}

var destructivelyRemoveLastKitten = () => {
    return kittens.pop()
}

var destructivelyRemoveFirstKitten = () => {
    return kittens.shift()
}

var appendKitten = name => {
    return [...kittens, name]
}

var prependKitten = name => {
    return [name, ...kittens]
}

var removeLastKitten = () => {
    return kittens.slice(0, -1)
}

var removeFirstKitten = () => {
    return kittens.slice(1)
}
