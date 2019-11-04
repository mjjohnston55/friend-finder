const express = require('express')
const app = express()

var set1 = [2, 1, 5, 4, 1, 2, 5, 2, 4];
var set2= [2, 2, 3, 5, 3, 5, 4, 2, 1];

let userCompare = function(user1, user2) {
let count = 0;
for (i=0; i < user1.length; i++) {
count = count + Math.abs(user1[i] -user2[i]);
}
return count;
}