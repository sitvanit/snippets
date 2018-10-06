const required = () => { throw new Error('Missing parameter') };

const add = (a = required(), b = required()) => a + b;

console.log(add(1, 2));  // 3
add(1);     // Error: Missing parameter
