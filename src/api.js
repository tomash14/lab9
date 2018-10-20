
const express = require("express");
const app = express();
const greeting = require("./greeting");

app.get("/greeting/:name", (req, res) => {
    res.send({greeting: "Hello, " + req.params.name});
    res.status = 200;
});

module.exports = app;
