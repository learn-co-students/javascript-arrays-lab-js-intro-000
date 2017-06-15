const app = "I don't do much."
const kittens = ["Milo","Otis","Garfield"]

/* appends a kitten to the end of the kittens array   */
function destructivelyAppendKitten (name) {

var name = "Ralph"
kittens.push(name)

return kittens
}

/* prepends a kitten to the beginning of the kittens array:    */
function destructivelyPrependKitten (name) {

var name = "Bob"

kittens.unshift(name)

return kittens



}

/* removes the last kitten from the kittens array:   */
function destructivelyRemoveLastKitten () {
kittens.pop()

return kittens

}

/* removes the First kitten from the kittens array:     */
function destructivelyRemoveFirstKitten () {

kittens.shift()

return kittens

}
/* appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged: */

function appendKitten (name) {

var name = "Broom"

return [...kittens,name]

}

/*  prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged  */
function prependKitten (name) {
var name = "Arnold"

return [ name,...kittens]

}

/*  removes the last kitten in the kittens array and returns a new array, leaving the kittens array unch
anged:    */
function removeLastKitten () {

return kittens.slice (0,kittens.length-1)

}

/* removes the first kitten from the kittens array and returns a new array, leaving the kittens array
unchanged:     */
function removeFirstKitten () {

return kittens.slice(1)

}
