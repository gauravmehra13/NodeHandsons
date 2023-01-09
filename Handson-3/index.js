const express = require("express");

const app=express()

const firstMiddleware = (req, res, next) => {

    console.log(" our first middleware is running")
    next()
}

app.use(firstMiddleware)

const secondMiddleware = (req, res, next) => {
    console.log("our second middleware is running")
    next()
}


app.get('/login', function (req, res) {
    console.log("we are hitting the /login route")
    res.send("Welcome to LOGIN")
})

app.get('/edit', function (req, res) {
    console.log("we are hitting the /edit route")
    res.send("Welcome to EDIT")
})

app.get('/data', function (req, res) {
    console.log("we are hitting the /data route")
    res.send("Welcome to DATA")
})


app.get('/contact', secondMiddleware, function (req, res) {
    console.log("we are hitting the /data route")
    res.send("Welcome to Contact")
})

app.get('/home', secondMiddleware, function (req, res) {
    console.log("we are hitting the /home route")
    res.send("Welcome to HOME")
})


app.listen(3009, function () {

    console.log("the server is running at port 3009")
})