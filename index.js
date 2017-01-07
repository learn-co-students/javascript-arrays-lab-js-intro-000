const app = "I don't do much."

var destructivelyAppendKitten = kitten => {
  kittens.push(kitten)
  }
var destructivelyPrependKitten = kitten => {
  kittens.unshift(kitten)
}
var destructivelyRemoveLastKitten = kitten => {
  kittens.pop()
}
var destructivelyRemoveFirstKitten = kitten => {
  kittens.shift()
}
var appendKitten = kitten => {
  var newArray = kittens.slice(0)
  newArray.push(kitten)
  return newArray
}

var prependKitten = kitten => {
  var newArray = [kitten, ...kittens]
  return newArray
}

var removeLastKitten = kitten => {
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}

var removeFirstKitten = () => {
  var newArray = kittens.slice(1, kittens.length)
  return newArray
}
