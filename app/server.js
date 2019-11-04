// Dependencies
var express = require("express");
var path = require("path");

const express = require('express')
const app = express()
const PORT = 3000;

var compatibility = 0;
var set1 = [2, 1, 5, 4, 1, 2, 5, 2, 4];
var set2= [2, 2, 3, 5, 3, 5, 4, 2, 1];

// function to compare two user's responses and return total difference
let userCompare = function(user1, user2) {
let count = 0;
for (i=0; i < user1.length; i++) {
count = count + Math.abs(user1[i] -user2[i]);
}
return count;
};

// compares two users
compatibility = userCompare(set1, set2);


// starts server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  