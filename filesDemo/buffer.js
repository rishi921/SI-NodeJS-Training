const bufFromString = Buffer.from('xzdsfdzfgdfgfhgfh');
console.log(bufFromString);
const bufWithSize = Buffer.alloc(10);
console.log(bufWithSize);
// Example: Write a string into an existing buffer from position 0
const buf = Buffer.alloc(50);
buf.write('Hello', 0);
console.log(buf.toString()); 