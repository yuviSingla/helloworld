/**
*  WEB322 - Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites and friends) or distributed to other students.
*  I understand that if caught doing so, I will receive zero on this assignment and possible 
*  fail the entire course.
*
*  Name: yuvi
*  Student ID: 126567213
*  Date: 2023-05-10
*  Cyclic Web App URL: https://odd-bat-beanie.cyclic.app
*  GitHub Repository URL: https://github.com/yuviSingla?tab=repositories
*
*/


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send(" yuvi - 126567213");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
