var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("student name - yuvi student id: 126567213"     
* WEB322: Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
* 
* Name: _________yuvi_____________ Student ID: _______126567213_______ Date: ________________
*
* Online (Heroku) URL: __________________________________https://app.cyclic.sh/#/app/yuvisingla-helloworld/builds_____________________
);
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
