const fs = require('fs'); 
const assert = require('assert'); 

eval(fs.readFileSync('code.js') + ''); 

let graph1 = [[1, 2], [3], [5], [4], [], [6], [7, 8], [8, 9], []]; 

let graph2 = [[1, 2], [3], [5], [4], [], [6], []]; 

let graph3 = [[1, 2, 3, 4], [5], [6], [7], [8], [], [], [], []]; 

let graph4 = [[1], [2], [3], [4], [0]]; 

let graph5 = [[1, 2], [3], [5], [4], [], [6], [3]]; 

assert(hasCycle(graph1) == true); 
assert(hasCycle(graph2) == false); 
assert(hasCycle(graph3) == false); 
assert(hasCycle(graph4) == true); 
assert(hasCycle(graph5) == true); 