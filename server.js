var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("student name - yuvi student id: 126567213");
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
