var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
const destructivelyAppendKitten = name => kittens.push(name)

const destructivelyPrependKitten = name => kittens.unshift(name)

const destructivelyRemoveLastKitten = () => kittens.pop()

const destructivelyRemoveFirstKitten = () => kittens.shift()

const appendKitten = name => {
  let copy = [...kittens]
  copy.push(name)
  return copy
}

const removeFirstKitten = () => {
  let copy = [...kittens]
  copy.shift()
  return copy
}

const removeLastKitten = () => {
  let copy = [...kittens]
  copy.pop()
  return copy
}

const prependKitten = name => {
  let copy = [...kittens]
  copy.unshift(name)
  return copy
}
