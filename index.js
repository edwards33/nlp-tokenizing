var natural = require('natural')
var exampleStr = "Fruit also void set lights living for saw can't forth fowl she'd in, living beast yielding rule own under good thing. Can't our said made life fowl under she'd he which seasons our fowl also void them."

var tokenizer = new natural.WordTokenizer()

console.log(tokenizer.tokenize(exampleStr))
