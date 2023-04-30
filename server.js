
 WEB322: Assignment 1
 I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 No part of this assignment has been copied manually or electronically from any other source
 (including web sites) or distributed to other students. *
Name: yuvi Student ID: 126567213 Date: May 18, 2023 *
Online (Heroku) URL: https://odd-bat-beanie.cyclic.app


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send(" yuvi - 126567213");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
