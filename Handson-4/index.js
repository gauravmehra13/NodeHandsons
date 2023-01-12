const express = require("express")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const app = express()

app.use(bodyParser.json())

app.post('/register', function (req, res) {
    console.log("we are registering the user")
    const body = req.body
    const roundsOfSalt = 10
    const password = body.password

    bcrypt.genSalt(roundsOfSalt, function (err, salt) {

        if (err) { console.log(err) }
        else
            console.log("salt is generated", salt)

        bcrypt.hash(password, roundsOfSalt, function (err, hashedPassword) {

            if (err) { console.log("User has not registered, please try again") }
            else {
                console.log("user successfully registered")
                res.send({ "Hashed Password": hashedPassword })
            }
        })

    })

})

app.post('/login', function (req, res) {
    const loginData = req.body
    const SECRET_KEY = "secretkey@123"
    const jwtToken = jwt.sign(loginData, SECRET_KEY)
    
      res.send({ "token": jwtToken })
            console.log("user has successfully logged in")
            console.log("JWT TOKEN:", jwtToken)
    
    if(jwtToken){
        console.log("User has successfully logged in")
    }
    else{
        console.log("User is not registered")
    }
    
        })

app.listen(3008, function () {
    console.log("the server is running at port 3008")
})