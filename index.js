const app = "I don't do much.";

//Appends a kitten to the end of the kittens array
function destructivelyAppendKitten(element) {
	kittens.push(element);
};

//Prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(element) {
      kittens.unshift(element);
};

//Removes the last kitten from the kittens array
function destructivelyRemoveLastKitten() {
     kittens.pop();
};

//Removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten() {
   kittens.shift();
};

//Appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(name) {
   var newArray = [...kittens, name];
   return newArray;
}; 

//Appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name) {
    var newArray = [name, ...kittens];
    return newArray;
};
 
 //Removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
 function removeLastKitten() {
    return kittens.slice(0, kittens.length -1);
 };

//removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten() {
    return kittens.slice(1);
};



