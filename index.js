const app = "I don't do much."
+var kittens = ['Milo', 'Otis', 'Garfield'];
+
+function destructivelyAppendKitten(name) {
+   kittens.push (name)
+   return kittens
+}
+function destructivelyPrependKitten(name) {
+  kittens.unshift (name)
+  return kittens
+}
+function  destructivelyRemoveLastKitten(name) {
+  kittens.pop (name)
+  return kittens
+}
+function destructivelyRemoveFirstKitten(name) {
+  kittens.shift (name)
+  return kittens
+}
+function appendKitten(name) {
+ [...kittens, name]
+ return [...kittens, name]
+}
+function prependKitten(name) {
+  [name, ...kittens]
+  return [name, ...kittens]
+}
+function removeLastKitten(name) {
+  kittens.slice (0, kittens.length-1)
+  return  kittens.slice (0, kittens.length-1)
+}
+function removeFirstKitten() {
+  kittens.slice (1)
+  return  kittens.slice (1)
+}
