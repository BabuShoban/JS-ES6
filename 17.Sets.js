//sets makes unique list as like java
//set.has() will chekc value is there in set
//set.delete() will delete the value from sets
//set.clear() will delete entrie sets
//set.add() will add the value

const example = new Set([1, 1, 1, 1, 2, 2, 2]);

example.add(5);

console.log(example.has(1));
console.log(example);
console.log(example.size);
